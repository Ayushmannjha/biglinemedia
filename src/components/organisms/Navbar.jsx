import React, { useState, useEffect } from "react"; // Import useEffect
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { ChevronDown } from "lucide-react";
import { navItems } from "../../assets/data/Navbar"; // Assuming you have a data file for nav items

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false); // New state for scroll detection
  const location = useLocation();

  const handleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const isActive = (path) => location.pathname === path;

  const isDropdownActive = (dropdown) =>
    dropdown?.some((item) => location.pathname.startsWith(item.path));

  // --- Scroll Detection Logic ---
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50; // Pixels scrolled before changing navbar
      // Update 'scrolled' state based on scroll position
      if (window.scrollY > scrollThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Initial check in case the page is loaded already scrolled
    handleScroll();

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount
  // --- End Scroll Detection Logic ---

  return (
    <nav
      id="mainNavbar" // Added ID for potential future direct DOM manipulation if needed, though not strictly required with state
      className={`fixed top-0 left-0 w-full z-20 h-md transition-all duration-300 ease-in-out
        ${scrolled ? "bg-blue-600  shadow-md" : "bg-transparent"}
      `}
    >
      <div className="flex justify-center items-center">
        {/* Logo */}
        <div className="flex items-center justify-around fill-available lg:w-auto px-4 py-2">
          <div >
            
              <img src={logo} alt="Logo" className="h-25 w-41   mr-61    pr-5" />
            
          </div>
          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-2 rounded m-6 ${scrolled ? "text-gray-700 border border-gray-300" : "text-white border border-white"}`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex space-x-6 items-center text-sm font-medium relative ">
            {navItems.map((item) => {
              const active = item.path
                ? isActive(item.path)
                : isDropdownActive(item.dropdown);
              return (
                <li
                  key={item.label}
                  className={`relative group px-4 py-2 rounded-md cursor-pointer ${
                    active
                      ? "text-gray-600"
                      : scrolled
                      ? "text-gray-700 hover:text-blue-500" // Text color when scrolled (white background)
                      : "text-amber-400 hover:text-blue-400" // Text color when transparent
                  }`}
                  onMouseEnter={() => item.dropdown && handleDropdown(item.label)}
                  onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
                >
                  {item.path ? (
                    <NavLink to={item.path}>{item.label}</NavLink>
                  ) : (
                    <span className="flex items-center gap-1">
                      {item.label} <ChevronDown size={14} />
                    </span>
                  )}
                  {/* Dropdown */}
                  {item.dropdown && openDropdown === item.label && (
                    <ul className="absolute top-full left-0 bg-white shadow-md mt-2 rounded-md w-56 z-20">
                      {item.dropdown.map((subItem) => (
                        <li
                          key={subItem.label}
                          className="px-4 py-2 text-black hover:bg-orange-300"
                        >
                          <NavLink to={subItem.path}>{subItem.label}</NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <ul className="lg:hidden mt-4 flex flex-col space-y-2 text-sm font-medium bg-white text-black p-4 rounded-b-lg shadow-md">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="px-4 py-2 rounded-md cursor-pointer hover:bg-orange-600"
            >
              {!item.dropdown ? (
                // ✅ Simple navigation item
                <NavLink
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block font-medium ${
                      isActive ? "text-orange-600 font-bold" : "text-black"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ) : (
                // ✅ Dropdown item
                <>
                  <div
                    className="flex justify-between items-center"
                    onClick={() =>
                      setOpenDropdown((prev) => (prev === item.label ? null : item.label))
                    }
                  >
                    <span className="font-medium">{item.label}</span>
                    <span>{openDropdown === item.label ? "▲" : "▼"}</span>
                  </div>
                  {openDropdown === item.label && (
                    <ul className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <li
                          key={subItem.label}
                          className="px-2 py-1 text-sm hover:bg-orange-300 rounded-md"
                        >
                          <NavLink
                            to={subItem.path}
                            onClick={() => {
                              setMenuOpen(false);
                              setOpenDropdown(null);
                            }}
                          >
                            {subItem.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;