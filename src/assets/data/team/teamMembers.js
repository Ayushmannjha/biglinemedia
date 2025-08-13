// src/assets/data/team/teamMembers.js
const Aashikant = "https://res.cloudinary.com/dcklr65ur/image/upload/v1755093283/Aashikant_pdstas.webp"
const Abhisek = "https://res.cloudinary.com/dcklr65ur/image/upload/v1755093282/Abhisek_ltpz8q.webp"
const Harsh = "https://res.cloudinary.com/dcklr65ur/image/upload/v1755093282/Harsh_ktqcmz.webp"
const ceoImage ="https://res.cloudinary.com/dcklr65ur/image/upload/v1755093284/Chandra_oeosj4.webp"

// Use a placeholder for the problematic image
 // Temporary placeholder
export const teamMembers = [
  {
    id: 1,
    name: "Chandra vrat deo",
    title: "Lead Campaign Strategist AND CEO",
    photo: ceoImage, // Using string path for image with spaces
    cardBg: "bg-gradient-to-br from-blue-400 to-teal-500",
    primarySpecializations: ["Election Strategy", "Digital Advertising"],
    bio: "Alice is a seasoned strategist with over 15 years of experience in political campaigns and digital marketing. She excels at crafting compelling narratives and driving impactful online engagement.",
    achievements: [
      "Managed 10+ successful national campaigns",
      "Increased client engagement by 40% on average",
    ],
    expertiseTags: [
      "Crisis Communications",
      "Google Ads",
      "Content Strategy",
    ],
    industry: {
      yearsInIndustry: 15,
      yearsAtDM: 10,
      skills: {
        "Strategy": 90,
        "Project Management": 85,
        "Creativity": 95,
      },
    },
    linkedIn: "https://www.linkedin.com/in/alicejohnson",
  },
  {
    id: 2,
    name: "Aashikant kumar",
    title: "Head of Web Development",
    photo: Aashikant, // Using string path for image with spaces
    cardBg: "bg-gradient-to-br from-green-400 to-lime-500",
    primarySpecializations: ["Full-Stack Development", "UI/UX Design"],
    bio: "Bob leads our web development team, bringing robust technical solutions to life. He ensures our client's digital presence is not only functional but also highly engaging and user-friendly.",
    achievements: [
      "Delivered over 50 complex web projects",
      "Pioneered adoption of Next.js",
    ],
    expertiseTags: [
      "React",
      "Node.js",
      "UI/UX Design",
    ],
    industry: {
      yearsInIndustry: 1,
      yearsAtDM: 1,
      skills: {
        "Development": 98,
        "Architecture": 95,
        "Problem Solving": 92,
      },
    },
    linkedIn: "https://www.linkedin.com/in/bobwilliams",
  },
  {
    id: 3,
    name: "Harsh kumar",
    title: "Creative Director - Video",
    photo: Harsh,
    cardBg: "bg-gradient-to-br from-purple-400 to-pink-500",
    primarySpecializations: ["Content Creation", "Post-Production"],
    bio: "Catherine is our visionary Creative Director, specializing in impactful video content. She transforms ideas into visually stunning narratives that resonate with audiences.",
    achievements: [
      "Directed 3 award-winning commercial campaigns",
      "Produced 500+ hours of video content",
    ],
    expertiseTags: [
      "Adobe Premiere Pro",
      "After Effects",
      "Storytelling",
    ],
    industry: {
      yearsInIndustry: 10,
      yearsAtDM: 7,
      skills: {
        "Creativity": 99,
        "Direction": 92,
        "Editing": 90,
      },
    },
    linkedIn: "https://www.linkedin.com/in/catherinelee",
  },
  {
    id: 4,
    name: "Abhisek kumar",
    title: "Social Media Specialist and graphic",
    photo: Abhisek,
    cardBg: "bg-gradient-to-br from-yellow-400 to-orange-500",
    primarySpecializations: ["Social Media Strategy", "Community Engagement"],
    bio: "David is our social media guru, adept at building vibrant online communities and crafting engaging content strategies across all platforms.",
    achievements: [
      "Grew client's Instagram following by 300% in 6 months",
      "Managed social media for 15+ diverse brands",
    ],
    expertiseTags: [
      "Facebook Ads",
      "Instagram Marketing",
      "TikTok Strategy",
    ],
    industry: {
      yearsInIndustry: 7,
      yearsAtDM: 5,
      skills: {
        "Social Media": 95,
        "Community Mgmt.": 88,
        "Trend Analysis": 90,
      },
    },
    linkedIn: "https://www.linkedin.com/in/davidchen",
  },
];