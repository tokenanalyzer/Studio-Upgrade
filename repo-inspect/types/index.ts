export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  content?: string;
  thumbnail: string;
  category: string;
  tags: string[];
  live_url?: string;
  github_url?: string;
  featured: boolean;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string;
  category: string;
  author: string;
  reading_time: number;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  company?: string;
  budget?: string;
  service: string;
  message: string;
  status: "new" | "contacted" | "qualified" | "converted" | "archived";
  created_at: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  published: boolean;
  order: number;
  created_at: string;
  updated_at: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon?: string;
  order: number;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface SiteSetting {
  id: string;
  key: string;
  value: string;
  created_at: string;
  updated_at: string;
}
