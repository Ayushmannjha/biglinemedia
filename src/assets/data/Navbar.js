export const navItems = [
  { label: "HOME", path: "/" },
  { label: "JOIN OUR HAND", path: "/join" },
  { label: "ABOUT", path: "/about" },
  {
    label: "SERVICE",
    dropdown: [
      { label: "Election Management", path: "/services/election-management" },
      { label: "Video Production", path: "/services/video-production" },
      { label: "Social Media Management", path: "/services/social-media-management" 
                        },
      { label: "Web Development", path: "/services/web-development"
      },
    ],
  },
  { label: "TEAM", path: "/team" },
  {
    label: "BLOG",
    path: "/blog",
  },
  { label: "CONTACT", path: "/contact" },
]