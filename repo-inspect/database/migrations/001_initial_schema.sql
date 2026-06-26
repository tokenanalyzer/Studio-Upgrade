-- ============================================
-- Enable UUID Extension
-- ============================================
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- Projects Table
-- ============================================
CREATE TABLE IF NOT EXISTS projects (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT NOT NULL,
    content TEXT,
    thumbnail TEXT,
    category TEXT NOT NULL,
    tags TEXT[] DEFAULT '{}',
    live_url TEXT,
    github_url TEXT,
    featured BOOLEAN DEFAULT FALSE,
    published BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_projects_published ON projects(published);
CREATE INDEX idx_projects_featured ON projects(featured);
CREATE INDEX idx_projects_category ON projects(category);

-- ============================================
-- Blog Posts Table
-- ============================================
CREATE TABLE IF NOT EXISTS blog_posts (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    cover_image TEXT,
    category TEXT NOT NULL,
    author TEXT NOT NULL,
    reading_time INTEGER DEFAULT 5,
    published BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_blog_posts_published ON blog_posts(published);
CREATE INDEX idx_blog_posts_category ON blog_posts(category);

-- ============================================
-- Leads Table
-- ============================================
CREATE TABLE IF NOT EXISTS leads (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    budget TEXT,
    service TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'new',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_created_at ON leads(created_at);

-- ============================================
-- Testimonials Table
-- ============================================
CREATE TABLE IF NOT EXISTS testimonials (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    quote TEXT NOT NULL,
    author TEXT NOT NULL,
    role TEXT NOT NULL,
    company TEXT NOT NULL,
    avatar TEXT,
    published BOOLEAN DEFAULT FALSE,
    "order" INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_testimonials_published ON testimonials(published);
CREATE INDEX idx_testimonials_order ON testimonials("order");

-- ============================================
-- Social Links Table
-- ============================================
CREATE TABLE IF NOT EXISTS social_links (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    platform TEXT NOT NULL,
    url TEXT NOT NULL,
    icon TEXT,
    "order" INTEGER DEFAULT 0,
    published BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_social_links_published ON social_links(published);
CREATE INDEX idx_social_links_order ON social_links("order");

-- ============================================
-- Site Settings Table
-- ============================================
CREATE TABLE IF NOT EXISTS settings (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    key TEXT NOT NULL UNIQUE,
    value TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_settings_key ON settings(key);

-- ============================================
-- Updated At Trigger Function
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Attach triggers
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_leads_updated_at BEFORE UPDATE ON leads
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_testimonials_updated_at BEFORE UPDATE ON testimonials
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_social_links_updated_at BEFORE UPDATE ON social_links
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_settings_updated_at BEFORE UPDATE ON settings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- Seed Data
-- ============================================
INSERT INTO projects (title, slug, description, thumbnail, category, tags, featured, published) VALUES
('Finova Dashboard', 'finova-dashboard', 'A comprehensive financial analytics dashboard with real-time data visualization.', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop', 'SaaS', ARRAY['Next.js', 'TypeScript', 'Supabase'], TRUE, TRUE),
('Aurora E-Commerce', 'aurora-ecommerce', 'A headless e-commerce platform with advanced filtering and seamless checkout.', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop', 'E-Commerce', ARRAY['Next.js', 'Stripe', 'PostgreSQL'], TRUE, TRUE),
('Nexus Social', 'nexus-social', 'A modern social networking platform with real-time messaging.', 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop', 'Web App', ARRAY['React', 'WebSocket', 'Node.js'], FALSE, TRUE),
('Vertex Architecture', 'vertex-architecture', 'Complete brand identity system for an architecture firm.', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop', 'Brand Identity', ARRAY['Branding', 'Figma', 'Web Design'], FALSE, TRUE)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO blog_posts (title, slug, excerpt, content, cover_image, category, author, reading_time, published) VALUES
('Building Performant Next.js 15 Applications', 'building-performant-nextjs-15', 'A comprehensive guide to optimizing Next.js 15 apps.', '<p>Content here...</p>', 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop', 'Development', 'M.D Studio', 8, TRUE),
('The Art of Micro-Interactions in UI Design', 'micro-interactions-ui-design', 'How subtle animations improve user experience.', '<p>Content here...</p>', 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop', 'Design', 'M.D Studio', 6, TRUE)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO testimonials (quote, author, role, company, published, "order") VALUES
('M.D Studio transformed our vision into a reality that exceeded every expectation.', 'Sarah Mitchell', 'CEO', 'TechVenture Inc.', TRUE, 1),
('Working with M.D Studio was a game-changer for our startup.', 'Marcus Chen', 'Founder', 'DataFlow Labs', TRUE, 2),
('The level of craftsmanship in every pixel and line of code is extraordinary.', 'Elena Rodriguez', 'Creative Director', 'Bloom Agency', TRUE, 3)
ON CONFLICT DO NOTHING;

INSERT INTO social_links (platform, url, "order", published) VALUES
('Twitter', 'https://twitter.com/mdstudio', 1, TRUE),
('GitHub', 'https://github.com/mdstudio', 2, TRUE),
('LinkedIn', 'https://linkedin.com/company/mdstudio', 3, TRUE),
('Dribbble', 'https://dribbble.com/mdstudio', 4, TRUE)
ON CONFLICT DO NOTHING;

INSERT INTO settings (key, value) VALUES
('site_name', 'M.D Studio'),
('site_url', 'https://mdstudio.vercel.app'),
('site_description', 'Award-winning digital studio crafting premium web experiences'),
('contact_email', 'hello@mdstudio.com'),
('contact_phone', '+1 (555) 123-4567'),
('contact_address', 'San Francisco, CA'),
('contact_hours', 'Mon - Fri, 9AM - 6PM PST'),
('whatsapp_number', '+15551234567'),
('hero_badge', 'Digital Solutions That Drive Growth'),
('hero_headline_1', 'Building Intelligent'),
('hero_headline_2', 'Digital Products'),
('hero_description', 'We help startups and businesses build scalable, modern and high-performance digital solutions.'),
('hero_cta_primary', 'Start a Project'),
('hero_cta_secondary', 'View Portfolio'),
('seo_title', 'M.D Studio | Award-Winning Digital Studio'),
('seo_description', 'Award-winning digital studio crafting premium web experiences, SaaS products, and brand identities.')
ON CONFLICT (key) DO NOTHING;
