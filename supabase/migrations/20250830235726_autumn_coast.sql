/*
  # Add missing INSERT policy for profiles table

  1. Security Changes
    - Add INSERT policy for profiles table to allow users to create their own profile
    - This fixes the RLS violation error when new users try to create profiles

  The profiles table and other policies already exist, so we only add what's missing.
*/

-- Add INSERT policy for profiles table (only if it doesn't exist)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'profiles' 
    AND policyname = 'Users can insert own profile'
  ) THEN
    CREATE POLICY "Users can insert own profile"
      ON profiles
      FOR INSERT
      TO authenticated
      WITH CHECK (auth.uid() = id);
  END IF;
END $$;