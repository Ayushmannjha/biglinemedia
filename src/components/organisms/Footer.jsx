import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Rss, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import envConfig from '../../utils/envConfig';

const Footer = () => {
  // Get social media URLs from environment config
  const socialLinks = {
    twitter: envConfig.social.twitter.company,
    facebook: envConfig.social.facebook.company,
    instagram: envConfig.social.instagram.company,
    linkedin: envConfig.social.linkedin.company
  };
  // Animation variants for Framer Motion
  // We're keeping these for potential 'whileInView' effects if desired,
  // but removing the 'initial="hidden"' from the main container
  // to ensure content is immediately visible for LCP.
  const footerVariants = {
    hidden: { opacity: 0 }, // This variant is now only for when you explicitly want to hide something
    visible: {
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <div className="bg-[#0a1045] text-white pt-20 px-6 md:px-20  w-auto h-fit">
      {/*
        Removed initial="hidden" from here.
        The content will now be immediately visible, contributing to a better LCP score.
        You can still use whileInView="visible" for a "reveal" animation as the user scrolls.
      */}
      <motion.div
        className="max-w-7xl mx-auto"
        // initial="hidden" // Commented out to improve LCP
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={footerVariants}
      >
        {/* Top Section: Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-gray-700">
          {/* Company Info */}
          {/* Apply itemVariants' 'visible' directly or remove motion if LCP is paramount for this section */}
          <motion.div variants={itemVariants} initial="visible"> {/* Set initial to 'visible' for immediate paint */}
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-600 text-white p-2 rounded-md">
                <Rss size={20} />
              </div>
              <h2 className="text-2xl  tracking-tight">BIGLINEMEDIA</h2>
            </div>
            <div className="w-fit  h-max">
              We are a full-service digital agency empowering political campaigns, brands, and businesses to achieve their goals through strategic communication and cutting-edge technology.
          </div>
          </motion.div>

          {/* Our Services */}
          <motion.div variants={itemVariants} initial="visible"> {/* Set initial to 'visible' */}
            <h3 className="text-lg mb-4">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="services/election-management" className="hover:text-blue-400 transition-colors duration-300">Election Campaigns</Link></li>
              <li><Link to="services/video-production" className="hover:text-blue-400 transition-colors duration-300">Video Production</Link></li>
              <li><Link to="services/web-development" className="hover:text-blue-400 transition-colors duration-300">Web Development</Link></li>
              <li><Link to="services/social-media" className="hover:text-blue-400 transition-colors duration-300">Social Media Management</Link></li>
            </ul>
          </motion.div>

          {/* Quick Contact */}
          <motion.div variants={itemVariants} initial="visible"> {/* Set initial to 'visible' */}
            <h3 className=" text-lg mb-4">Quick Contact</h3>
            <ul>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-blue-400 mt-1" />
                <span>A block 5th floor<br />maurya lok complex patna</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-blue-400" />
                <span>+91 94309 73929</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-blue-400" />
                <span>contact@biglinemedia.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} initial="visible"> {/* Set initial to 'visible' */}
            <h3 className=" text-lg mb-4">Get Industry Insights</h3>
            <p className="text-sm text-gray-400 mb-4">Subscribe to our newsletter for the latest trends in digital strategy and campaign management.</p>
            
          </motion.div>
        </div>

        {/* Bottom Section: Copyright and Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 text-sm">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} BIGLINEMEDIA. All Rights Reserved.
          </p>
          <div className="flex space-x-4 text-gray-400 hover:text-white transition-colors duration-300">
            <a 
              href={socialLinks.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a 
              href={socialLinks.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </a>
            <a 
              href={socialLinks.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;