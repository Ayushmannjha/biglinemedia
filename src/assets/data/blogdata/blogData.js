
const blogAnalysesData = [
  {
    id: 1,
    name: "TechCrunch",
    url: "techcrunch.com",
    category: "Tech",
    subcategory: "Tech News",
    focus: "Content Strategy",
    rating: 4.5,
    views: "2.3M",
    comments: 234,
    shares: 1200,
    date: "2024-06-15",
    readTime: 8,
    keyInsight: "Exceptional breaking news coverage with lightning-fast publication cycles, but community engagement suffers from lack of personalized interaction",
    tags: ["#TechNews", "#ContentStrategy", "#SEO", "#Breaking News"],
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    metrics: {
      design: 4.2,
      content: 4.8,
      seo: 4.6,
      engagement: 3.8,
      performance: 4.5,
      monetization: 4.3
    },
    strengths: ["Fast content delivery", "Strong SEO optimization", "Clear navigation"],
    weaknesses: ["Limited community features", "Ad-heavy layout", "Mobile UX issues"],
    traffic: {
      monthly: "45M",
      growth: "+12%",
      sources: { organic: 65, direct: 20, social: 10, referral: 5 }
    },
    featured: true,
    premium: false
  },
  {
    id: 2,
    name: "Pinch of Yum",
    url: "pinchofyum.com",
    category: "Food",
    subcategory: "Recipe Blog",
    focus: "Design & UX",
    rating: 4.8,
    views: "1.8M",
    comments: 156,
    shares: 890,
    date: "2024-06-12",
    readTime: 12,
    keyInsight: "Masterful visual storytelling with stunning photography, but recipe card functionality needs optimization for mobile users",
    tags: ["#FoodBlog", "#Design", "#Photography", "#Recipe Cards"],
    thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop",
    metrics: {
      design: 4.9,
      content: 4.7,
      seo: 4.4,
      engagement: 4.6,
      performance: 4.2,
      monetization: 4.5
    },
    strengths: ["Beautiful photography", "Engaging storytelling", "Strong Pinterest presence"],
    weaknesses: ["Slow loading times", "Recipe card UX", "Limited video content"],
    traffic: {
      monthly: "8.2M",
      growth: "+18%",
      sources: { organic: 45, social: 35, direct: 15, referral: 5 }
    },
    featured: false,
    premium: true
  },
  {
    id: 3,
    name: "Nomadic Fanatic",
    url: "nomadicfanatic.com",
    category: "Travel",
    subcategory: "Van Life",
    focus: "Video & Multimedia",
    rating: 4.2,
    views: "956K",
    comments: 89,
    shares: 445,
    date: "2024-06-10",
    readTime: 15,
    keyInsight: "Outstanding video production quality with immersive storytelling, but monetization strategy could be diversified beyond YouTube",
    tags: ["#Travel", "#Video", "#Van Life", "#Documentary"],
    thumbnail: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=400&fit=crop",
    metrics: {
      design: 4.0,
      content: 4.5,
      seo: 3.8,
      engagement: 4.4,
      performance: 4.1,
      monetization: 3.6
    },
    strengths: ["High-quality videos", "Authentic storytelling", "Strong YouTube integration"],
    weaknesses: ["Limited blog content", "Weak email marketing", "Over-reliance on video"],
    traffic: {
      monthly: "1.2M",
      growth: "+25%",
      sources: { organic: 30, social: 45, direct: 20, referral: 5 }
    },
    featured: false,
    premium: false
  },
  {
    id: 4,
    name: "The Financial Diet",
    url: "thefinancialdiet.com",
    category: "Finance",
    subcategory: "Personal Finance",
    focus: "Community & Engagement",
    rating: 4.6,
    views: "1.2M",
    comments: 312,
    shares: 678,
    date: "2024-06-08",
    readTime: 10,
    keyInsight: "Exceptional community building with authentic voice and relatability, but mobile user experience requires significant improvements",
    tags: ["#Finance", "#Community", "#Millennial Money", "#Lifestyle"],
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop",
    metrics: {
      design: 4.1,
      content: 4.7,
      seo: 4.3,
      engagement: 4.9,
      performance: 3.8,
      monetization: 4.4
    },
    strengths: ["Strong community", "Authentic voice", "Diverse content formats"],
    weaknesses: ["Mobile UX issues", "Inconsistent posting", "Limited interactive features"],
    traffic: {
      monthly: "3.1M",
      growth: "+8%",
      sources: { organic: 55, social: 25, direct: 15, referral: 5 }
    },
    featured: true,
    premium: true
  },
  {
    id: 5,
    name: "Minimalist Baker",
    url: "minimalistbaker.com",
    category: "Food",
    subcategory: "Healthy Recipes",
    focus: "SEO & Traffic",
    rating: 4.7,
    views: "2.1M",
    comments: 445,
    shares: 1100,
    date: "2024-06-05",
    readTime: 9,
    keyInsight: "SEO powerhouse with perfectly optimized content structure, but could benefit from enhanced video integration and social proof",
    tags: ["#HealthyFood", "#SEO", "#Plant-Based", "#Quick Recipes"],
    thumbnail: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=400&fit=crop",
    metrics: {
      design: 4.4,
      content: 4.6,
      seo: 4.9,
      engagement: 4.3,
      performance: 4.4,
      monetization: 4.5
    },
    strengths: ["Excellent SEO", "Clean design", "Consistent branding"],
    weaknesses: ["Limited video content", "Social media integration", "Comment engagement"],
    traffic: {
      monthly: "12.5M",
      growth: "+22%",
      sources: { organic: 70, social: 15, direct: 12, referral: 3 }
    },
    featured: false,
    premium: true
  },
  {
    id: 6,
    name: "Buffer Blog",
    url: "buffer.com/blog",
    category: "Marketing",
    subcategory: "Social Media",
    focus: "Content Strategy",
    rating: 4.4,
    views: "1.5M",
    comments: 198,
    shares: 890,
    date: "2024-06-03",
    readTime: 14,
    keyInsight: "Data-driven content strategy with exceptional transparency, but could improve visual design and interactive elements",
    tags: ["#Marketing", "#Social Media", "#Data-Driven", "#Transparency"],
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    metrics: {
      design: 3.9,
      content: 4.8,
      seo: 4.6,
      engagement: 4.2,
      performance: 4.3,
      monetization: 4.0
    },
    strengths: ["Data transparency", "Actionable insights", "Regular publishing schedule"],
    weaknesses: ["Visual design", "Interactive elements", "Video content"],
    traffic: {
      monthly: "2.8M",
      growth: "+15%",
      sources: { organic: 60, social: 20, direct: 15, referral: 5 }
    },
    featured: false,
    premium: false
  }
];

const categories = [
  { id: 'all', name: 'All Blogs', count: blogAnalysesData.length },
  { id: 'tech', name: 'Tech', count: blogAnalysesData.filter(b => b.category === 'Tech').length },
  { id: 'food', name: 'Food', count: blogAnalysesData.filter(b => b.category === 'Food').length },
  { id: 'travel', name: 'Travel', count: blogAnalysesData.filter(b => b.category === 'Travel').length },
  { id: 'finance', name: 'Finance', count: blogAnalysesData.filter(b => b.category === 'Finance').length },
  { id: 'marketing', name: 'Marketing', count: blogAnalysesData.filter(b => b.category === 'Marketing').length },
  { id: 'lifestyle', name: 'Lifestyle', count: 0 },
  { id: 'politics', name: 'Politics', count: 0 },
  { id: 'education', name: 'Education', count: 0 }
];

import { Layers, Palette, BookOpen, TrendingUp, Users, DollarSign, Play, Share2 } from 'lucide-react';

const focusAreas = [
  { id: 'all', name: 'All Analyses' },
  { id: 'design', name: 'Design & UX' },
  { id: 'content', name: 'Content Strategy' },
  { id: 'seo', name: 'SEO & Traffic' },
  { id: 'engagement', name: 'Community & Engagement' },
  { id: 'monetization', name: 'Monetization' },
  { id: 'video', name: 'Video & Multimedia' },
  { id: 'social', name: 'Social Media Integration' }
];


export { blogAnalysesData, categories, focusAreas };