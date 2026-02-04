-- Simple fix: Allow NULL author_id and update RLS policies
-- This allows admin users to create articles without being in auth.users

-- Update RLS policies to allow NULL author_id for admin operations
DROP POLICY IF EXISTS "Users can view their own articles" ON articles;
DROP POLICY IF EXISTS "Users can insert their own articles" ON articles;
DROP POLICY IF EXISTS "Users can update their own articles" ON articles;
DROP POLICY IF EXISTS "Users can delete their own articles" ON articles;

-- Create new policies that allow NULL author_id
CREATE POLICY "Users can view their own articles" ON articles
  FOR SELECT USING (auth.uid() = author_id OR author_id IS NULL);

CREATE POLICY "Users can insert their own articles" ON articles
  FOR INSERT WITH CHECK (auth.uid() = author_id OR author_id IS NULL);

CREATE POLICY "Users can update their own articles" ON articles
  FOR UPDATE USING (auth.uid() = author_id OR author_id IS NULL);

CREATE POLICY "Users can delete their own articles" ON articles
  FOR DELETE USING (auth.uid() = author_id OR author_id IS NULL);

-- Also allow admin users to manage all articles
CREATE POLICY "Admin users can manage all articles" ON articles
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM user_profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );



