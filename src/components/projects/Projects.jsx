import React, { useState, useEffect } from 'react';
import './Projects.css';
import { projectData } from '../../data/ProjectData';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // 모달 닫기 함수
  const closeModal = () => setSelectedProject(null);

  // ESC 키로 모달 닫기
  useEffect(() => {
  const handleEsc = (e) => {
    if (e.key === "Escape") {
      setSelectedProject(null);
    }
  };

  if (selectedProject) {
    window.addEventListener("keydown", handleEsc);
  }

  return () => {
    window.removeEventListener("keydown", handleEsc);
  };
}, [selectedProject]);

// 모달이 열릴 때 스크롤 막기
 useEffect(() => {
  if (selectedProject) {
    // 모달이 열릴 때 스크롤만 막음
    document.body.style.overflow = 'hidden';
  } else {
    // 모달이 닫힐 때 스크롤 복원
    document.body.style.overflow = 'unset';
  }

  // 컴포넌트 언마운트 시 클린업
  return () => {
    document.body.style.overflow = 'unset';
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
            <div className="project-header">
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <p className="project-date">{project.date}</p>
              <a href={project.storeUrl} target="_blank" rel="noreferrer" className="playstore-link">View on PlayStore</a>
            </div>

            <div className="project-tech-stack">
              <h4>Tech Stack</h4>
              <p>{project.usedSkill}</p>
            </div>

            <div className="project-btns">
              <button className="readme-btn" onClick={() => setSelectedProject(project)}>ReadMe</button>
              {project.troubleShooting && project.troubleShooting.title && (
                <button className="trouble-btn">Trouble Shooting</button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* --- 모달 다이얼로그 구현 --- */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <h2>{selectedProject.title} README</h2>
            <hr />
            <div className="modal-body">
              <h4>프로젝트 요약</h4>
              <p>{selectedProject.description}</p>
              
              <h4>기술 스택</h4>
              <p>{selectedProject.usedSkill}</p>

              {/* 추가 데이터가 있다면 여기에 맵핑 */}
              {selectedProject.features && (
                <>
                  <h4>주요 기능</h4>
                  <ul>
                    {selectedProject.features.map((f, index) => <li key={index}>{f}</li>)}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;