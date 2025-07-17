const services = [
    { id: 'election-campaigning', title: 'Election Campaigning', icon: '📢', gradient: 'from-red-500 to-pink-600' },
    { id: 'web-development', title: 'Web Development', icon: '💻', gradient: 'from-blue-500 to-cyan-600' },
    { id: 'social-media', title: 'Social Media', icon: '📱', gradient: 'from-pink-500 to-rose-600' },
    { id: 'video-production', title: 'Video Production', icon: '🎬', gradient: 'from-purple-500 to-indigo-600' },
    { id: 'general', title: 'General Inquiry', icon: '❓', gradient: 'from-teal-500 to-green-600' }
];

const faqItems = [
    {
      question: "How quickly do you respond to inquiries?",
      answer: "We pride ourselves on fast response times. Most inquiries receive a response within 2-6 business hours, depending on the service type and complexity of your request."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes! We offer free initial consultations for most services to understand your needs and provide tailored recommendations before any commitment."
    },
    {
      question: "What information should I prepare before contacting you?",
      answer: "Having your project goals, timeline, budget range, and any existing materials ready helps us provide more accurate guidance from the start."
    },
    {
      question: "Can you work with clients outside your local area?",
      answer: "Absolutely! We work with clients globally through video calls, project management tools, and digital collaboration platforms."
    },
    {
      question: "What makes your approach different?",
      answer: "We combine strategic thinking with creative execution, always focusing on measurable results and long-term partnerships rather than one-off projects."
    }
];




  // Service configurations moved here to be passed down
const serviceConfigs = {
    'election-campaigning': {
      title: 'Plan Your Winning Campaign',
      responseTime: 'Our <strong>campaign strategists</strong> aim to respond within 4 business hours for urgent inquiries.',
      expert: { name: 'Sarah Mitchell', title: 'Lead Campaign Strategist', gradient: 'from-red-500 to-pink-600' },
      testimonial: { quote: 'Our voter outreach soared by 20% with their targeted digital strategy!', author: 'Local Candidate, 2024', gradient: 'from-purple-600 to-blue-600' },
      fields: [
        { type: 'select', name: 'electionType', label: 'Select Election Type *', options: ['Local', 'State', 'National', 'Other'] },
        { type: 'text', name: 'timeline', label: 'Desired Campaign Timeline (e.g., "Next 6 months")' }
      ]
    },
    'web-development': {
      title: 'Build Your Digital Presence',
      responseTime: 'Our <strong>web developers</strong> will respond within 2 business hours to discuss your project.',
      expert: { name: 'Alex Chen', title: 'Senior Full-Stack Developer', gradient: 'from-blue-500 to-cyan-600' },
      testimonial: { quote: 'They transformed our online presence and doubled our conversion rate!', author: 'Tech Startup CEO, 2024', gradient: 'from-green-600 to-teal-600' },
      fields: [
        { type: 'select', name: 'websiteType', label: 'Type of Website Needed *', options: ['E-commerce', 'Corporate', 'Portfolio', 'Blog', 'Web Application', 'Other'] },
        { type: 'text', name: 'existingUrl', label: 'Existing Website URL (if any)' },
        { type: 'select', name: 'budget', label: 'Approx. Budget Range', options: ['Less than ₹50,000', '₹50,000 - ₹1,00,000', '₹1,00,000 - ₹2,50,000', '₹2,50,000+'] }
      ],
      hasScheduling: true
    },
    'social-media': {
      title: 'Amplify Your Social Reach',
      responseTime: 'Our <strong>social media experts</strong> will connect within 6 business hours to strategize your growth.',
      expert: { name: 'Maya Patel', title: 'Social Media Strategist', gradient: 'from-pink-500 to-rose-600' },
      testimonial: { quote: 'Our engagement increased by 300% in just 3 months!', author: 'Fashion Brand Owner, 2024', gradient: 'from-orange-600 to-red-600' },
      fields: [
        { type: 'text', name: 'companyName', label: 'Company Name (Optional)' },
        { type: 'checkbox', name: 'platforms', label: 'Platforms of Interest:', options: ['Facebook', 'Instagram', 'LinkedIn', 'X (Twitter)', 'YouTube', 'TikTok'] }
      ]
    },
    'video-production': {
      title: 'Create Compelling Visual Stories',
      responseTime: 'Our <strong>video production team</strong> will reach out within 4 business hours to discuss your vision.',
      expert: { name: 'David Rodriguez', title: 'Creative Director', gradient: 'from-purple-500 to-indigo-600' },
      testimonial: { quote: 'The promotional video they created generated 50% more leads!', author: 'Marketing Director, 2024', gradient: 'from-yellow-600 to-orange-600' },
      fields: [
        { type: 'select', name: 'videoType', label: 'Type of Video Needed *', options: ['Promotional', 'Explainer', 'Testimonial', 'Event', 'Corporate', 'Animation', 'Other'] },
        { type: 'text', name: 'desiredLength', label: 'Desired Length (e.g., "30 seconds", "2 minutes")' }
      ],
      hasScheduling: true
    },
    'general': {
      title: 'How Can We Help You?',
      responseTime: 'Our <strong>support team</strong> will respond within 24 hours to address your inquiry.',
      expert: { name: 'Jennifer Kim', title: 'Client Success Manager', gradient: 'from-teal-500 to-green-600' },
      testimonial: { quote: 'Exceptional service and attention to detail in every interaction!', author: 'Long-term Client, 2024', gradient: 'from-indigo-600 to-purple-600' },
      fields: [
        { type: 'text', name: 'subject', label: 'Subject *' }
      ]
    }
}
    
export {services,faqItems,serviceConfigs,}