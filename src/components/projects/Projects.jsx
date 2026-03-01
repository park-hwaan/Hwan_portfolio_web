import React, { useState, useEffect } from "react";
import "./Projects.css";
import { projectData } from "../../data/ProjectData";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const closeModal = () => setSelectedProject(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };

    if (selectedProject) {
      window.addEventListener("keydown", handleEsc);
      document.body.classList.add("modal-open");
       document.documentElement.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.classList.remove("modal-open");
      document.documentElement.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-title">
        <h2>PROJECTS</h2>
      </div>

      <div className="projects-container">
        {projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <h3 className="project-card-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <p className="project-date">{project.date}</p>

            {project.storeUrl && (
              <a
                href={project.storeUrl}
                target="_blank"
                rel="noreferrer"
                className="playstore-link"
              >
                View on PlayStore
              </a>
            )}

            <div className="project-tech-stack">
              <h4>Tech Stack</h4>
              <p>{project.usedSkill}</p>
            </div>

            <div className="project-btns">
              <button
                className="readme-btn"
                onClick={() => setSelectedProject(project)}
              >
                ReadMe
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>

            <h2 className="modal-title">{selectedProject.title}</h2>

            <div className="modal-sub-info">
              <p>{selectedProject.date}</p>
              <p>{selectedProject.participants}</p>
              {selectedProject.githubLink && (
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Link
                </a>
              )}
            </div>

            <hr />

            <div className="modal-body">
              <h3 className="section-title">개발기능</h3>

              {selectedProject.contentDetail?.map((item, index) => (
                <div key={index} className="feature-block">
                  <h4>{item.featTitle}</h4>
                  <ul>
                    {item.featDetail.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {selectedProject.troubleShooting && (
                <div className="trouble-section">
                  <h3 className="section-title">Trouble Shooting</h3>
                  <h4>{selectedProject.troubleShooting.title}</h4>
                  <p>
                    <strong>문제:</strong>{" "}
                    {selectedProject.troubleShooting.problem}
                  </p>
                  <p>
                    <strong>해결:</strong>{" "}
                    {selectedProject.troubleShooting.solution}
                  </p>
                  <p>
                    <strong>성과:</strong>{" "}
                    {selectedProject.troubleShooting.effect}
                  </p>
                </div>
              )}

              <div className="execution-section">
                <h3 className="section-title">실행화면</h3>
                <p>추후 이미지 추가 예정</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;