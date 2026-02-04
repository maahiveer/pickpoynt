require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Missing Supabase credentials in .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkDatabase() {
    console.log('🔍 Checking database content...\n');

    try {
        // Check Categories
        const { data: categories, error: catError } = await supabase
            .from('categories')
            .select('*');

        if (catError) {
            console.error('❌ Error fetching categories:', catError.message);
        } else {
            console.log(`📂 Categories (${categories?.length || 0}):`);
            categories?.forEach(c => console.log(`   - ${c.name} (${c.slug})`));
            console.log('');
        }

        // Check Articles
        const { data: articles, error: artError } = await supabase
            .from('articles')
            .select('title, slug, status');

        if (artError) {
            console.error('❌ Error fetching articles:', artError.message);
        } else {
            console.log(`📝 Articles (${articles?.length || 0}):`);
            articles?.forEach(a => console.log(`   - ${a.title} (${a.status})`));
        }

    } catch (err) {
        console.error('❌ Unexpected error:', err);
    }
}

checkDatabase();
