import React, { useEffect, useState } from "react";
import MyContainer from "../Components/MyContainer";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <section id="projects" className="py-5 app-card">
      <MyContainer className="px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          My Projects
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card shadow-lg hover:shadow-xl transition app-card"
            >
              {/* Image */}
              <figure className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-fit"
                />
              </figure>

              {/* Card Body */}
              <div className="card-body">
                {/* Project Name / Title */}
                <h2 className="card-title">{project.name}</h2>

                <p className="text-sm text-justify mt-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="badge badge-outline badge-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="card-actions justify-end mt-4 gap-2">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-primary"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </MyContainer>
    </section>
  );
};

export default Projects;
