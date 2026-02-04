'use client'

import { useState } from 'react'
import { RichTextEditor } from '@/components/RichTextEditor'

export default function EditorDemo() {
  const [content, setContent] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample Article</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.7;
            color: #1f2937;
            background-color: #ffffff;
            font-size: 18px;
        }
        
        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        
        h1, h2, h3 {
            color: #1f2937;
            margin-bottom: 1rem;
        }
        
        p {
            margin-bottom: 1rem;
            color: #374151;
        }
        
        .info-box {
            background-color: #eff6ff;
            border: 1px solid #bfdbfe;
            border-radius: 8px;
            padding: 20px;
            margin: 24px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to the Improved Editor</h1>
        <p>This is a sample article to demonstrate the new RichTextEditor capabilities.</p>
        
        <div class="info-box">
            <h3>New Features</h3>
            <p>The editor now supports complete HTML documents with custom CSS styling!</p>
        </div>
        
        <h2>How to Use</h2>
        <p>You can now:</p>
        <ul>
            <li>Paste complete HTML documents</li>
            <li>Upload HTML files</li>
            <li>Preview your content</li>
            <li>Download as HTML</li>
        </ul>
    </div>
</body>
</html>`)

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Improved Rich Text Editor Demo
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            This editor now supports complete HTML documents with custom CSS styling, file upload/download, and preview mode.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
          <RichTextEditor
            value={content}
            onChange={setContent}
            placeholder="Start writing your article or paste complete HTML content..."
          />
        </div>

        <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
            🎉 New Editor Features
          </h3>
          <ul className="space-y-2 text-blue-800 dark:text-blue-200">
            <li>✅ <strong>Complete HTML Support:</strong> Paste full HTML documents with DOCTYPE, head, and body tags</li>
            <li>✅ <strong>File Upload:</strong> Upload .html files directly into the editor</li>
            <li>✅ <strong>Preview Mode:</strong> Toggle between code view and live preview</li>
            <li>✅ <strong>Download:</strong> Export your content as HTML files</li>
            <li>✅ <strong>HTML Template:</strong> Insert a complete HTML template with one click</li>
            <li>✅ <strong>Custom CSS:</strong> Preserve and edit custom styling within your content</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
