-- Fix the author_id constraint to allow NULL for admin users
-- This allows articles to be created without a real user in auth.users

-- First, drop the existing foreign key constraint
ALTER TABLE articles DROP CONSTRAINT IF EXISTS articles_author_id_fkey;

-- Add a new constraint that allows NULL values
ALTER TABLE articles ADD CONSTRAINT articles_author_id_fkey 
  FOREIGN KEY (author_id) REFERENCES auth.users(id) ON DELETE CASCADE;

-- Update the RLS policies to allow NULL author_id
DROP POLICY IF EXISTS "Users can view their own articles" ON articles;
DROP POLICY IF EXISTS "Users can insert their own articles" ON articles;
DROP POLICY IF EXISTS "Users can update their own articles" ON articles;
DROP POLICY IF EXISTS "Users can delete their own articles" ON articles;

-- Recreate policies that handle NULL author_id
CREATE POLICY "Users can view their own articles" ON articles
  FOR SELECT USING (auth.uid() = author_id OR author_id IS NULL);

CREATE POLICY "Users can insert their own articles" ON articles
  FOR INSERT WITH CHECK (auth.uid() = author_id OR author_id IS NULL);

CREATE POLICY "Users can update their own articles" ON articles
  FOR UPDATE USING (auth.uid() = author_id OR author_id IS NULL);

CREATE POLICY "Users can delete their own articles" ON articles
  FOR DELETE USING (auth.uid() = author_id OR author_id IS NULL);



