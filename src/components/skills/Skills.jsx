import React from 'react';
import './Skills.css'; 

function Skills() {
  const skillData = [
    {
      category: "Language",
      items: ["Kotlin", "Java", "JavaScript"]
    },
    {
      category: "Android",
      items: ["CleanArchitecture","Retrofit2", "Room", "Compose", "XML", "MVVM", "LiveData","Coroutine/Flow", "Hilt"]
    },
    {
      category: "Web",
      items: ["React", "HTML5", "CSS3", "Styled-Components", "Axios"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-title">
        <h2>SKILLS</h2>
      </div>

      <div className="skills-container">
        {skillData.map((group, index) => (
          <div className="skill-card" key={index}>
            <h3 className="skill-category">{group.category}</h3>
            <div className="skill-items">
              {group.items.map((skill, i) => (
                <span className="skill-badge" key={i}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;