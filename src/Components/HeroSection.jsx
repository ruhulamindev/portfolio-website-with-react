import React from "react";
import { Github, Linkedin, Download, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import MyContainer from "./../Components/MyContainer";

const HeroSection = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/pdf.pdf";
    link.download = "Ruhul_Amin_Resume.pdf";
    link.click();
  };

  return (
    <div className="flex flex-col items-start justify-start bg-base-100 pt-4 md:pt-4">
      <MyContainer className="px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                Hello, I'm <span className="text-primary">Ruhul Amin</span>
              </h1>
              <p className="text-xl text-gray-500 mb-2">
                💻Frontend & MERN Stack Developer
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I create beautiful, responsive web applications with modern
                technologies.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleDownloadResume}
                className="btn btn-primary flex items-center gap-2"
              >
                <Download size={20} /> Download Resume
              </button>
              <Link to="/projects">
                <button className="btn btn-outline">View My Work</button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/ruhulamindev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-base-200 hover:bg-primary/10 rounded-lg transition"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/md-ruhul-amin8/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-base-200 hover:bg-primary/10 rounded-lg transition"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61566534111401"
                className="p-3 bg-base-200 hover:bg-primary/10 rounded-lg transition"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          {/* Right Side - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm aspect-square bg-base-200 rounded-2xl flex items-center justify-center border border-base-300 lg:ml-auto">
              <img
                src="/IMG_20240509_001921.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default HeroSection;
