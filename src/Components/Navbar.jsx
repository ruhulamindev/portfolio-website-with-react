import React, { useState } from "react";
import { Menu, X, Moon } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import MyContainer from "./MyContainer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-200 border-b border-base-300 shadow-sm">
      <MyContainer className="px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary">
            Ruhul Amin
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
                        {/* Just Icon */}
            <div className="ml-4 p-2 rounded-lg hover:bg-base-200 transition cursor-pointer">
              <Moon size={20} />
            </div>

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition ${
                    isActive
                      ? "text-primary"
                      : "text-base-content hover:text-primary"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Button */}
          <div className="flex md:hidden items-center gap-2">
            {/* Just Icon */}
            <div className="p-2 rounded-lg hover:bg-base-200 transition cursor-pointer">
              <Moon size={20} />
            </div>

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
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg font-medium transition ${
                    isActive
                      ? "bg-primary text-white"
                      : "hover:bg-base-200"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </MyContainer>
    </nav>
  );
};

export default Navbar;
