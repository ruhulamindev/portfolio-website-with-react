import React from "react";
import MyContainer from "./../Components/MyContainer";

const About = () => {
  return (
    <section id="about" className="py-10 my-10 md:py-10 app-card">
      <MyContainer className="px-4 md:px-8">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-12">
          About <span className="text-primary">Me</span>
        </h1>

        {/* Content */}
        <div className="space-y-10 text-lg leading-relaxed">
          {/* My Journey */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              My Journey
            </h3>
            <p className="text-justify">
              I started my programming journey with a strong passion for building
              modern, responsive, and user-friendly web applications. Over time,
              I have gained hands-on experience with frontend and MERN stack
              technologies and continuously improve my skills through practice
              and real-world projects.
            </p>
          </div>

          {/* What I Enjoy */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              What I Enjoy
            </h3>
            <p className="text-justify">
              I enjoy writing clean and maintainable code, designing intuitive
              user interfaces, and solving real-life problems through
              technology. I love working on challenging projects that help me
              grow as a developer.
            </p>
          </div>

          {/* Outside of Coding */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Outside of Coding
            </h3>
            <p className="text-justify">
              When I'm not coding, I like exploring new technologies, watching
              tech-related videos, reading blogs, and spending quality time with
              friends and family. I strongly believe in continuous learning and
              maintaining a healthy work-life balance.
            </p>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              My Values
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Writing clean and efficient code.</li>
              <li>Continuous learning and self-improvement.</li>
              <li>User-focused design approach.</li>
              <li>Honest communication and collaboration.</li>
              <li>Delivering quality work on time.</li>
            </ul>
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default About;
