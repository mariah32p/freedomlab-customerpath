/*
  # Fix profiles RLS policy for INSERT operations

  1. Security Changes
    - Add INSERT policy for profiles table to allow users to create their own profile
    - Ensures users can only insert profiles where the id matches their auth.uid()

  This fixes the RLS violation error when creating new user profiles.
*/

-- Add INSERT policy for profiles table
CREATE POLICY IF NOT EXISTS "Users can insert own profile"
  ON profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);