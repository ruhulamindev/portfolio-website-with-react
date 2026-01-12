import React, { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import MyContainer from "./MyContainer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "About", to: "about" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-base-300 shadow-sm app-card">
      <MyContainer className="px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <ScrollLink
            to="hero"
            smooth={true}
            duration={500}
            offset={-80} // navbar height
            className="text-2xl font-bold text-primary cursor-pointer"
          >
            Ruhul Amin
          </ScrollLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-base-200 transition cursor-pointer"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="font-medium cursor-pointer hover:text-primary transition"
              >
                {link.name}
              </ScrollLink>
            ))}
          </div>

          {/* Mobile Button */}
          <div className="flex md:hidden items-center gap-2">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-base-200 transition cursor-pointer"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-base-200 transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-2 py-4">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg font-medium cursor-pointer hover:bg-base-200 transition"
              >
                {link.name}
              </ScrollLink>
            ))}
          </div>
        )}
      </MyContainer>
    </nav>
  );
};

export default Navbar;
