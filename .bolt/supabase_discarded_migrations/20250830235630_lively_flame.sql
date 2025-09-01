/*
  # Create profiles table with proper RLS policies

  1. New Tables
    - `profiles`
      - `id` (uuid, primary key, references auth.users)
      - `email` (text, not null)
      - `plan` (text, default 'basic')
      - `subscription_status` (text, default 'not_started')
      - `trial_ends_at` (timestamptz, nullable)
      - `current_period_end` (timestamptz, nullable)
      - `customer_id` (text, nullable)
      - `subscription_id` (text, nullable)
      - `payment_issue_since` (timestamptz, nullable)
      - `created_at` (timestamptz, default now())
      - `updated_at` (timestamptz, default now())

  2. Security
    - Enable RLS on `profiles` table
    - Add policy for users to read their own profile
    - Add policy for users to insert their own profile
    - Add policy for users to update their own profile

  3. Constraints
    - Plan must be 'basic' or 'pro'
    - Subscription status must be valid enum value
*/

CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text NOT NULL,
  plan text DEFAULT 'basic',
  subscription_status text DEFAULT 'not_started',
  trial_ends_at timestamptz,
  current_period_end timestamptz,
  customer_id text,
  subscription_id text,
  payment_issue_since timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Allow users to read their own profile
CREATE POLICY "Users can read own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Allow users to insert their own profile
CREATE POLICY "Users can insert own profile"
  ON profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Allow users to update their own profile
CREATE POLICY "Users can update own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Add constraints for plan and subscription status
ALTER TABLE profiles ADD CONSTRAINT profiles_plan_check 
  CHECK (plan IN ('basic', 'pro'));

ALTER TABLE profiles ADD CONSTRAINT profiles_subscription_status_check 
  CHECK (subscription_status IN (
    'not_started', 'trialing', 'active', 'past_due', 
    'canceled', 'incomplete', 'incomplete_expired', 'unpaid', 'paused'
  ));