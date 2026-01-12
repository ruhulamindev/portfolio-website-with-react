import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MyContainer from "../Components/MyContainer";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === id);
        setProject(found);
      });
  }, [id]);

  if (!project) {
    return (
      <div className="py-20 text-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <section className="py-5 mb-5 app-card">
      <MyContainer className="px-4 md:px-8">
        <Link to="/projects" className="btn btn-outline mb-6">
          ← Back to Projects
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="w-full h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-fit"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-primary">{project.name}</h1>

            <p className="text-base text-justify">{project.description}</p>

            <div>
              <h2 className="font-semibold mb-2">Technologies Used:</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="badge badge-outline badge-primary">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              {/* Live Project Button */}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-outline"
                >
                  🌐 Live Project
                </a>
              )}

              {/* GitHub Button */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-outline"
                >
                  💻 GitHub Repo
                </a>
              )}
            </div>

            <div>
              <h2 className="font-semibold">Challenges:</h2>
              <p>{project.challenges}</p>
            </div>

            <div>
              <h2 className="font-semibold">Future Plans:</h2>
              <p>{project.futurePlan}</p>
            </div>
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default ProjectDetails;
