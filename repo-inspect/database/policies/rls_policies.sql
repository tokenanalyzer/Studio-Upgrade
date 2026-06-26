-- ============================================
-- Projects Policies
-- ============================================
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Projects are viewable by everyone" ON projects
    FOR SELECT USING (published = TRUE);

CREATE POLICY "Projects are manageable by authenticated users" ON projects
    FOR ALL USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');

-- ============================================
-- Blog Posts Policies
-- ============================================
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Blog posts are viewable by everyone" ON blog_posts
    FOR SELECT USING (published = TRUE);

CREATE POLICY "Blog posts are manageable by authenticated users" ON blog_posts
    FOR ALL USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');

-- ============================================
-- Leads Policies
-- ============================================
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Leads are insertable by everyone" ON leads
    FOR INSERT WITH CHECK (TRUE);

CREATE POLICY "Leads are viewable by authenticated users" ON leads
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Leads are manageable by authenticated users" ON leads
    FOR ALL USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');

-- ============================================
-- Testimonials Policies
-- ============================================
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Testimonials are viewable by everyone" ON testimonials
    FOR SELECT USING (published = TRUE);

CREATE POLICY "Testimonials are manageable by authenticated users" ON testimonials
    FOR ALL USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');

-- ============================================
-- Social Links Policies
-- ============================================
ALTER TABLE social_links ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Social links are viewable by everyone" ON social_links
    FOR SELECT USING (published = TRUE);

CREATE POLICY "Social links are manageable by authenticated users" ON social_links
    FOR ALL USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');

-- ============================================
-- Settings Policies
-- ============================================
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Settings are viewable by everyone" ON settings
    FOR SELECT USING (TRUE);

CREATE POLICY "Settings are manageable by authenticated users" ON settings
    FOR ALL USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');
