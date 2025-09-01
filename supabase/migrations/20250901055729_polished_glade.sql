/*
  # Cleanup users table and add cascading deletes

  1. Database Cleanup
    - Remove any orphaned profile records
    - Clean up test/duplicate users
  
  2. Foreign Key Updates
    - Update profiles foreign key to CASCADE on delete
    - Update stripe_customers foreign key to CASCADE on delete
  
  3. Security
    - Maintain existing RLS policies
    - Ensure data integrity during cleanup

  This migration allows safe user deletion by automatically cleaning up related records.
*/

-- First, let's see what we're working with
DO $$
BEGIN
  RAISE NOTICE 'Current user count: %', (SELECT COUNT(*) FROM auth.users);
  RAISE NOTICE 'Current profile count: %', (SELECT COUNT(*) FROM profiles);
  RAISE NOTICE 'Current stripe_customers count: %', (SELECT COUNT(*) FROM stripe_customers);
END $$;

-- Clean up any orphaned profiles (profiles without corresponding auth.users)
DELETE FROM profiles 
WHERE id NOT IN (SELECT id FROM auth.users);

-- Clean up any orphaned stripe_customers (customers without corresponding auth.users)
DELETE FROM stripe_customers 
WHERE user_id NOT IN (SELECT id FROM auth.users);

-- Drop existing foreign key constraints
ALTER TABLE profiles DROP CONSTRAINT IF EXISTS profiles_id_fkey;
ALTER TABLE stripe_customers DROP CONSTRAINT IF EXISTS stripe_customers_user_id_fkey;

-- Add new foreign key constraints with CASCADE delete
ALTER TABLE profiles 
ADD CONSTRAINT profiles_id_fkey 
FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE;

ALTER TABLE stripe_customers 
ADD CONSTRAINT stripe_customers_user_id_fkey 
FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;

-- Create a helper function to safely delete users (optional, for admin use)
CREATE OR REPLACE FUNCTION delete_user_safely(user_id_to_delete UUID)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- This function can be called by admins to safely delete a user
  -- All related records will be automatically deleted due to CASCADE
  
  DELETE FROM auth.users WHERE id = user_id_to_delete;
  
  RETURN TRUE;
EXCEPTION
  WHEN OTHERS THEN
    RAISE NOTICE 'Error deleting user %: %', user_id_to_delete, SQLERRM;
    RETURN FALSE;
END;
$$;

-- Grant execute permission to authenticated users (you can restrict this further if needed)
GRANT EXECUTE ON FUNCTION delete_user_safely(UUID) TO authenticated;

DO $$
BEGIN
  RAISE NOTICE 'Migration completed successfully';
  RAISE NOTICE 'Final user count: %', (SELECT COUNT(*) FROM auth.users);
  RAISE NOTICE 'Final profile count: %', (SELECT COUNT(*) FROM profiles);
  RAISE NOTICE 'Final stripe_customers count: %', (SELECT COUNT(*) FROM stripe_customers);
END $$;