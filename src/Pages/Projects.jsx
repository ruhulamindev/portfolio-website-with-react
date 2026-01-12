import React, { useEffect, useState } from "react";
import MyContainer from "../Components/MyContainer";
import { Link } from "react-router-dom";

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
    <section className="py-5 mb-5 app-card">
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

                {/* Type (Left) & Category (Right) */}
                <div className="flex items-center justify-between mt-2">
                  {/* Project Type */}
                  {project.type && (
                    <span className="badge badge-outline badge-info">
                      {project.type}
                    </span>
                  )}

                  {/* Category */}
                  {project.category && (
                    <span className="badge badge-outline badge-primary">
                      {project.category}
                    </span>
                  )}
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

                  {/* View Details Button */}
                  <Link
                    to={`/projects/${project.id}`}
                    className="btn btn-sm btn-secondary"
                  >
                    View Details
                  </Link>
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
