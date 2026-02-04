# 📝 Publishing HTML Content on TrackScale Blog

## 🚀 **How to Publish HTML Articles**

Your blog is designed to handle HTML content perfectly! Here are the methods:

### **Method 1: Admin Panel (Recommended)**

1. **Access Admin Panel**:
   - Go to `http://localhost:3000/admin`
   - Login with your credentials

2. **Create New Article**:
   - Click "New Article"
   - Fill in the form:
     - **Title**: Your article title
     - **Slug**: URL-friendly version
     - **Content**: Paste your HTML here
     - **Excerpt**: Brief description
     - **Tags**: Relevant tags
     - **Status**: Published

3. **HTML Content**:
   - The rich text editor accepts HTML
   - You can paste full HTML documents
   - Or use the editor's HTML source mode

### **Method 2: Direct Database Insert**

If you want to add HTML content directly to the database:

```sql
INSERT INTO articles (
  title,
  slug,
  content,
  excerpt,
  status,
  author_id,
  tags,
  created_at,
  published_at
) VALUES (
  'Your Article Title',
  'your-article-slug',
  '<h1>Your HTML Content</h1><p>Your paragraph content...</p>',
  'Brief description of your article',
  'published',
  'your-user-id',
  ARRAY['tag1', 'tag2', 'tag3'],
  NOW(),
  NOW()
);
```

### **Method 3: Using Supabase Dashboard**

1. **Go to Supabase Dashboard**
2. **Navigate to Table Editor**
3. **Select `articles` table**
4. **Click "Insert" → "Insert row"**
5. **Fill in the fields**:
   - `title`: Article title
   - `slug`: URL slug
   - `content`: Your full HTML content
   - `excerpt`: Brief description
   - `status`: "published"
   - `author_id`: Your user ID
   - `tags`: Array of tags

## 🎯 **HTML Content Examples**

### **Basic HTML Article**:
```html
<h1>Welcome to TrackScale Blog</h1>
<p>This is a sample article with HTML content.</p>
<h2>Features</h2>
<ul>
  <li>Responsive design</li>
  <li>Modern styling</li>
  <li>Fast loading</li>
</ul>
<p>Thank you for reading!</p>
```

### **Advanced HTML with Styling**:
```html
<div class="article-content">
  <h1>Advanced HTML Article</h1>
  <div class="intro">
    <p>This article demonstrates advanced HTML features.</p>
  </div>
  <h2>Code Example</h2>
  <pre><code>
function hello() {
  console.log("Hello, World!");
}
  </code></pre>
  <h2>Table Example</h2>
  <table>
    <tr><th>Feature</th><th>Status</th></tr>
    <tr><td>Responsive</td><td>✅</td></tr>
    <tr><td>Fast</td><td>✅</td></tr>
  </table>
</div>
```

## 📊 **HTML Content Guidelines**

### **Supported HTML Elements**:
- **Headings**: `<h1>`, `<h2>`, `<h3>`, etc.
- **Text**: `<p>`, `<span>`, `<strong>`, `<em>`
- **Lists**: `<ul>`, `<ol>`, `<li>`
- **Links**: `<a href="...">`
- **Images**: `<img src="..." alt="...">`
- **Code**: `<code>`, `<pre>`
- **Tables**: `<table>`, `<tr>`, `<td>`
- **Divs**: `<div class="...">`
- **Spans**: `<span class="...">`

### **CSS Classes Available**:
Your blog includes these CSS classes for styling:
- `.prose` - Main content styling
- `.prose h1`, `.prose h2` - Heading styles
- `.prose p` - Paragraph styles
- `.prose code` - Code styling
- `.prose pre` - Code block styling
- `.prose table` - Table styling

### **Example with CSS Classes**:
```html
<div class="prose">
  <h1>Styled Article</h1>
  <p>This paragraph will be styled with the blog's typography.</p>
  <h2>Code Example</h2>
  <pre><code class="language-javascript">
const message = "Hello, World!";
console.log(message);
  </code></pre>
</div>
```

## 🎨 **Styling Your HTML Content**

### **Using Blog's CSS Classes**:
```html
<div class="prose prose-lg max-w-none">
  <h1>Your Article Title</h1>
  <p>Your content here...</p>
  <blockquote>
    <p>This is a blockquote with special styling.</p>
  </blockquote>
</div>
```

### **Custom Styling**:
You can add custom CSS by:
1. Adding styles to `app/globals.css`
2. Using inline styles in your HTML
3. Adding custom CSS classes

## 📝 **Content Management Tips**

### **HTML Best Practices**:
- Use semantic HTML elements
- Include proper heading hierarchy
- Add alt text to images
- Use descriptive link text
- Keep HTML clean and valid

### **SEO Optimization**:
- Use proper heading tags (H1, H2, H3)
- Include meta descriptions
- Add relevant keywords
- Use descriptive slugs
- Include internal links

## 🚀 **Quick Start Example**

Here's a complete HTML article you can publish:

```html
<h1>Getting Started with TrackScale Blog</h1>
<p>Welcome to TrackScale Blog! This is your first HTML article.</p>

<h2>What You Can Do</h2>
<ul>
  <li>Publish HTML content</li>
  <li>Use rich formatting</li>
  <li>Add images and links</li>
  <li>Create engaging articles</li>
</ul>

<h2>Code Example</h2>
<pre><code>
// JavaScript example
function greet(name) {
  return `Hello, ${name}!`;
}
</code></pre>

<p>Thank you for reading! Check out more articles on our <a href="/">homepage</a>.</p>
```

## 🎯 **Publishing Process**

1. **Prepare your HTML content**
2. **Access the admin panel**
3. **Create a new article**
4. **Paste your HTML in the content field**
5. **Add title, excerpt, and tags**
6. **Set status to "Published"**
7. **Click "Publish"**

Your HTML content will be rendered beautifully with the blog's styling! 🚀



