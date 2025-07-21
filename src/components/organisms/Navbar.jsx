import  { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { ChevronDown, Menu, X } from "lucide-react";
import { navItems } from "../../assets/data/Navbar"; // Your navigation data
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // --- Scroll Detection Logic ---
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;
  const isDropdownActive = (dropdown) =>
    dropdown?.some((item) => location.pathname.startsWith(item.path));

  // Animation Variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: "easeInOut" } },
  };
  
  const dropdownVariants = {
    hidden: { opacity: 0, y: 10, transition: { duration: 0.2, ease: "easeInOut" } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-auto z-30 transition-all duration-500 ease-in-out
        ${scrolled ? "bg-white shadow-lg" : "bg-gradient-to-b from-blue-800/70 to-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <NavLink to="/" className="flex-shrink-0">
            <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
          </NavLink>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center space-x-2 ">
            {navItems.map((item) => {
              const active = item.path
                ? isActive(item.path)
                : isDropdownActive(item.dropdown);
              return (
                <li
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                  onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
                >
                  <span
                    className={`
                      px-4 py-2 rounded-md text-sm font-medium cursor-pointer flex items-center gap-1 transition-colors duration-300
                      ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-200 hover:text-white'}
                      ${active && scrolled ? 'text-blue-600' : ''}
                      ${active && !scrolled ? 'text-black' : ''}
                    `}
                  >
                    {item.path ? (
                      <NavLink to={item.path}>{item.label}</NavLink>
                    ) : (
                      <>
                        {item.label} <ChevronDown size={16} className={`transition-transform duration-300 ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                      </>
                    )}
                  </span>
                  {/* Underline for active state */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 ${
                      active ? 'scale-x-100' : ''
                    }`}
                  />

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.dropdown && openDropdown === item.label && (
                      <motion.ul
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg overflow-hidden ring-1 ring-black ring-opacity-5 z-20"
                      >
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.label}>
                            <NavLink
                              to={subItem.path}
                              className={({ isActive }) =>
                                `block px-5 py-3 text-sm transition-colors duration-200 ${
                                  isActive ? 'text-white bg-blue-600' : 'text-gray-800 hover:bg-gray-100'
                                }`
                              }
                            >
                              {subItem.label}
                            </NavLink>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${scrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/20"}`}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden bg-white shadow-lg absolute w-full"
          >
            <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  {!item.dropdown ? (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                          isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-800 hover:bg-gray-100'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ) : (
                    <div>
                      <div
                        className="flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100 cursor-pointer"
                        onClick={() => setOpenDropdown(prev => prev === item.label ? null : item.label)}
                      >
                        <span>{item.label}</span>
                        <ChevronDown size={20} className={`transition-transform duration-300 ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                      </div>
                      {openDropdown === item.label && (
                        <ul className="pl-4 mt-1 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <li key={subItem.label}>
                              <NavLink
                                to={subItem.path}
                                className={({ isActive }) =>
                                  `block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                                    isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-100'
                                  }`
                                }
                              >
                                {subItem.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;