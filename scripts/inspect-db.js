require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function inspectDatabase() {
    console.log('--- INSPECTING DATABASE ---');
    console.log('URL:', supabaseUrl);

    // Categories
    const { data: categories, error: catError } = await supabase.from('categories').select('*');
    if (catError) console.error('Cat Error:', catError);
    else console.log('Categories:', categories);

    // Articles
    const { data: articles, error: artError } = await supabase.from('articles').select('id, title, status');
    if (artError) console.error('Art Error:', artError);
    else console.log('Articles:', articles);
}

inspectDatabase();
