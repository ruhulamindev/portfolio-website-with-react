import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      level: "Expert",
      skills: [
        { name: "HTML5", percent: 95 },
        { name: "CSS3", percent: 90 },
        { name: "Tailwind CSS", percent: 90 },
        { name: "JavaScript", percent: 85 },
        { name: "React.js", percent: 85 },
        { name: "Next.js", percent: 70 },
      ],
    },
    {
      title: "Backend Development",
      level: "Advanced",
      skills: [
        { name: "Node.js", percent: 80 },
        { name: "Express.js", percent: 75 },
        { name: "MongoDB", percent: 80 },
        { name: "Firebase", percent: 70 },
      ],
    },
    {
      title: "Tools & Others",
      level: "Advanced",
      skills: [
        { name: "Git & GitHub", percent: 85 },
        { name: "Vercel / Netlify", percent: 80 },
        { name: "REST API", percent: 80 },
        { name: "Figma (Basic)", percent: 65 },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen bg-base-100 py-5 app-card mb-6">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            My Skills
          </h1>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            Technologies and tools I use to build modern, scalable and
            user-friendly web applications.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-lg hover:shadow-xl transition"
            >
              <div className="card-body">
                <h2 className="card-title text-primary">
                  {category.title}
                </h2>
                <p className="text-sm mb-4">
                  Level: {category.level}
                </p>

                {/* Skills Progress */}
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-1 text-sm font-medium">
                        <span>{skill.name}</span>
                        <span>{skill.percent}%</span>
                      </div>
                      <progress
                        className="progress progress-primary w-full"
                        value={skill.percent}
                        max="100"
                      ></progress>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
