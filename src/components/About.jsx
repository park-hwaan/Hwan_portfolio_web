import React from 'react';
import './Components.css'

function About() {
  // 1. 데이터를 배열로 분리 (보통은 별도 파일이나 가상 DB에서 가져옴)
  const aboutData = [
    { icon: "👤", label: "이름", value: "박환" },
    { icon: "📅", label: "생년월일", value: "00.11.29" },
    { icon: "📍", label: "위치", value: "서울특별시 강동구" },
    { icon: "📞", label: "연락처", value: "010-7557-5986" },
    { icon: "✉️", label: "이메일", value: "pahw001129@naver.com" },
    { icon: "✏️", label: "학력", value: "한국공학대학교" },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-title">
        <h2>ABOUT ME</h2>
      </div>
      
      <div className="about-grid">
        {aboutData.map((data, index) => (
          <div className="about-item" key={index}>
            <div className="icon">{data.icon}</div>
            <div className="info">
              <div className="label">{data.label}</div>
              <div className="value">{data.value}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;