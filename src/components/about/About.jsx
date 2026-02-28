import React from 'react';
import './About.css';

function About() {
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
      
      {/* 🔥 Hero 영역 */}
      <div className="hero-content">
        <h1 className="hero-main-text">
          - 박환 -<br />
          프론트엔드 개발자 포트폴리오
        </h1>
        <p className="hero-sub-text">
          안녕하세요.<br />
          끊기있는 앱,웹 개발자 박환입니다.
        </p>
        <button className="hero-btn">더 알아보기 ↓</button>
      </div>

      <hr className="divider" />

      {/* 🔥 About 영역 */}
      <div className="about-details">
        <div className="about-title">
          <h2>ABOUT ME</h2>
        </div>

        <div className="about-content">
          
          {/* 👇 왼쪽 프로필 이미지 */}
          <div className="about-image">
            <img src="/profile.jpg" alt="박환 프로필" />
          </div>

          {/* 👇 오른쪽 정보 */}
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

        </div>
      </div>

    </section>
  );
}

export default About;
