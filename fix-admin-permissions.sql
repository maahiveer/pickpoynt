-- Fix admin permissions to allow full article management
-- This allows admin users to see and manage all articles

-- Drop existing policies
DROP POLICY IF EXISTS "Users can view their own articles" ON articles;
DROP POLICY IF EXISTS "Users can insert their own articles" ON articles;
DROP POLICY IF EXISTS "Users can update their own articles" ON articles;
DROP POLICY IF EXISTS "Users can delete their own articles" ON articles;
DROP POLICY IF EXISTS "Public articles are viewable by everyone" ON articles;

-- Create comprehensive policies for articles
CREATE POLICY "Anyone can view published articles" ON articles
  FOR SELECT USING (status = 'published');

CREATE POLICY "Admin users can manage all articles" ON articles
  FOR ALL USING (
    -- Allow if author_id is NULL (for admin-created articles)
    author_id IS NULL
    OR
    -- Allow if user is the author
    auth.uid() = author_id
    OR
    -- Allow if user is admin (this will work once we have proper user management)
    EXISTS (
      SELECT 1 FROM user_profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Also allow anonymous access to published articles for public viewing
CREATE POLICY "Public can view published articles" ON articles
  FOR SELECT USING (status = 'published');

-- Update user_profiles policies to allow admin access
DROP POLICY IF EXISTS "Users can view all profiles" ON user_profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON user_profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON user_profiles;

CREATE POLICY "Anyone can view profiles" ON user_profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can manage their own profile" ON user_profiles
  FOR ALL USING (auth.uid() = id);

-- Allow anonymous access to categories
DROP POLICY IF EXISTS "Categories are viewable by everyone" ON categories;
CREATE POLICY "Anyone can view categories" ON categories
  FOR SELECT USING (true);



