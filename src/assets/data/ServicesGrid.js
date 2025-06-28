const adminImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='120' viewBox='0 0 200 120'%3E%3Crect width='200' height='120' fill='%23e5e7eb'/%3E%3Ctext x='100' y='60' text-anchor='middle' dy='0.3em' font-family='Arial' font-size='14' fill='%23374151'%3EService Image%3C/text%3E%3C/svg%3E";
import {
  DollarSign, Bus, GraduationCap, Leaf, Landmark, 
  ArrowRight, Sparkles, Eye, Star, ChevronRight
} from 'lucide-react';
 export const services = [
  {
    title: 'ELECTION M',
    description: 'Manages the municipality\'s financial planning, budgeting, accounting.',
    detailedDescription: 'Our comprehensive financial management system ensures transparent budgeting, accurate accounting, and strategic financial planning for sustainable municipal growth.',
    icon: DollarSign,
    image: adminImg,
    isHighlight: true,
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-50',
    features: ['Budget Planning', 'Financial Reports', 'Tax Management']
  },
  {
    title: 'Transport',
    description: 'Plans, develops, and maintains the transportation systems.',
    detailedDescription: 'Advanced transportation infrastructure planning with smart traffic management, public transit optimization, and sustainable mobility solutions.',
    icon: Bus,
    image: adminImg,
    isHighlight: true,
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50',
    features: ['Route Planning', 'Traffic Management', 'Public Transit']
  },
  {
    title: 'Education',
    description: 'Oversees public schools and educational programs.',
    detailedDescription: 'Comprehensive educational oversight ensuring quality learning environments, curriculum development, and student success programs.',
    icon: GraduationCap,
    image: adminImg,
    isHighlight: true,
    color: 'from-purple-500 to-violet-600',
    bgColor: 'bg-purple-50',
    features: ['School Management', 'Curriculum Design', 'Student Programs']
  },
  {
    title: 'Environment',
    description: 'Dedicated to sustainable practices, protecting natural resources.',
    detailedDescription: 'Environmental protection through innovative sustainability programs, waste management, and green infrastructure development.',
    icon: Leaf,
    image: adminImg,
    isHighlight: true,
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
    features: ['Sustainability', 'Waste Management', 'Green Infrastructure']
  },
  {
    title: 'Administration',
    description: 'Oversees the overall management and coordination.',
    detailedDescription: 'Streamlined administrative processes with digital governance, citizen services, and efficient interdepartmental coordination.',
    icon: Landmark,
    image: adminImg,
    isHighlight: true,
    color: 'from-orange-500 to-red-600',
    bgColor: 'bg-orange-50',
    features: ['Digital Governance', 'Citizen Services', 'Process Management']
  },
];