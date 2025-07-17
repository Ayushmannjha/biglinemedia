import {  Megaphone, Share2, Code, Video} from 'lucide-react';

 export const services = [
  {
    title: 'Election Campaign',
    description: 'Strategizes and executes political campaigns for electoral success.',
    detailedDescription: 'Our election campaign services encompass comprehensive strategy development, voter outreach, event management, and data-driven analytics to maximize electoral impact.',
    icon: Megaphone,
    isHighlight: true,
    color: 'from-red-500 to-rose-600',
    bgColor: 'bg-red-50',
    features: ['Voter Outreach', 'Campaign Strategy', 'Event Management'],
    link :"services/election-management"
  },
  {
    title: 'Social Media Management',
    description: 'Manages and optimizes online presence across social platforms.',
    detailedDescription: 'We provide end-to-end social media management, including content creation, audience engagement, campaign monitoring, and performance analytics to build a strong online brand.',
    icon: Share2,
    isHighlight: true,
    color: 'from-purple-500 to-indigo-600',
    bgColor: 'bg-purple-50',
    features: ['Content Creation', 'Audience Engagement', 'Analytics & Reporting'],
    link:"services/social-media-management"
  },
  {
    title: 'Web Development',
    description: 'Designs, develops, and maintains responsive and dynamic websites.',
    detailedDescription: 'From custom web design to robust back-end development, we build scalable and user-friendly websites tailored to your specific needs, ensuring optimal performance and security.',
    icon: Code,
    isHighlight: true,
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-50',
    features: ['Custom Design', 'Front-end Development', 'Back-end Development'],
    link:"services/web-development"
  },
  {
    title: 'Video Management',
    description: 'Produces, edits, and manages high-quality video content.',
    detailedDescription: 'Our video management services cover everything from conceptualization and filming to post-production and distribution, creating compelling visual narratives for various platforms.',
    icon: Video,
    isHighlight: true,
    color: 'from-green-500 to-teal-600',
    bgColor: 'bg-green-50',
    features: ['Video Production', 'Editing & Post-production', 'Content Distribution'],
    link:"services/video-production"
  },
];