import React from "react";
import { Github, Linkedin, Download, Facebook } from "lucide-react";
import MyContainer from "./../Components/MyContainer";
import { Link } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiNextdotjs,
  SiExpress,
  SiJavascript,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

const HeroSection = () => {
  const handleDownloadResume = () => {
    alert("Resume file is not added yet. Please try later!");
    // const link = document.createElement("a");
    // link.href = "/pdf.pdf";
    // link.download = "Ruhul_Amin_Resume.pdf";
    // link.click();
  };

  const techIcons = [
    { icon: FaHtml5, color: "text-orange-500" },
    { icon: FaCss3Alt, color: "text-blue-500" },
    { icon: SiTailwindcss, color: "text-sky-400" },
    { icon: SiJavascript, color: "text-yellow-400" },
    { icon: FaReact, color: "text-cyan-400" },
    { icon: SiNextdotjs, color: "text-white" },
    { icon: SiFirebase, color: "text-yellow-500" },
    { icon: SiMongodb, color: "text-green-600" },
    { icon: FaNodeJs, color: "text-green-500" },
    { icon: SiExpress, color: "text-gray-300" },
    { icon: FaGitAlt, color: "text-red-500" },
    { icon: FaGithub, color: "text-gray-200" },
    { icon: SiVercel, color: "text-white" },
    { icon: SiNetlify, color: "text-teal-400" },
  ];

  return (
    <div className="flex py-10 mb-5 flex-col items-start justify-start pt-4 md:pt-4 app-card overflow-x-hidden overflow-y-hidden">
      <MyContainer className="px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-5xl font-bold mb-4">
                Hello, I'm <br />
                <span className="text-primary">Ruhul Amin</span>
              </h1>
              <div className="relative w-full mb-2 overflow-hidden h-8">
                <motion.div
                  className="absolute whitespace-nowrap text-xl font-bold md:text-[25px]"
                  initial={{ x: "100%" }}
                  animate={{ x: "-100%" }}
                  transition={{
                    repeat: Infinity,
                    duration: 8,
                    ease: "linear",
                  }}
                >
                  💻 Frontend & MERN Stack Developer
                </motion.div>
              </div>

              <p className="text-lg  leading-relaxed">
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
                className="p-3 rounded-lg transition"
                style={{
                  backgroundColor: "var(--icon-bg)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "var(--icon-hover-bg)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "var(--icon-bg)")
                }
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/md-ruhul-amin8/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg transition"
                style={{
                  backgroundColor: "var(--icon-bg)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "var(--icon-hover-bg)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "var(--icon-bg)")
                }
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61566534111401"
                className="p-3 rounded-lg transition"
                style={{
                  backgroundColor: "var(--icon-bg)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "var(--icon-hover-bg)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "var(--icon-bg)")
                }
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Right Side - Profile with Rotating Icons */}
          <div className="flex justify-center md:p-2 p-6 lg:justify-end">
            <div className="relative profile-ring rounded-full w-72 h-72 md:w-80 md:h-80 flex items-center justify-center">
              {/* Rotating Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute inset-0"
              >
                {techIcons.map((item, index) => {
                  const Icon = item.icon;
                  const angle = (360 / techIcons.length) * index;

                  return (
                    <div
                      key={index}
                      className="absolute top-1/2 left-1/2"
                      style={{
                        transform: `rotate(${angle}deg) translateY(-160px)`,
                      }}
                    >
                      <Icon className={`tech-icon ${item.color}`} />
                    </div>
                  );
                })}
              </motion.div>

              {/* Profile Image */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary shadow-xl z-10">
                <img
                  src="/IMG_20240509_001921.jpg"
                  alt="Ruhul Amin"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default HeroSection;
