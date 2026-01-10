import React from "react";
import { Github, Linkedin, Facebook, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import MyContainer from "./../Components/MyContainer";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 border-t border-base-300 mt-2">
      <MyContainer className="px-4 md:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-center md:text-left">
          {/* About - Left */}
          <div className="md:text-left flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold text-primary mb-3">Ruhul Amin</h3>
            <p className="text-sm text-base-content/70">
              Frontend & MERN Stack Developer passionate about building modern,
              responsive, and user-friendly web applications.
            </p>
          </div>

          {/* Quick Links - Middle */}
          <div className="flex flex-col items-center">
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["/", "/skills", "/projects", "/about", "/contact"].map((path, idx) => {
                const names = ["Home", "Skills", "Projects", "About", "Contact"];
                return (
                  <li key={idx}>
                    <Link to={path} className="hover:text-primary transition">
                      {names[idx]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Social Links - Right */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-semibold mb-3">Follow Me</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/ruhulamindev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-base-200 hover:bg-primary hover:text-white transition"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/md-ruhul-amin8/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-base-200 hover:bg-primary hover:text-white transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61566534111401"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-base-200 hover:bg-primary hover:text-white transition"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-base-300 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-base-content/70 gap-2">
          <p>© {currentYear} Ruhul Amin. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={16} className="text-primary" /> by Ruhul Amin
          </p>
        </div>
      </MyContainer>
    </footer>
  );
};

export default Footer;
