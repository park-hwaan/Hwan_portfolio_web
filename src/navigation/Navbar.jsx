import React, { useEffect, useState } from "react"
import "./Navbar.css"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

 const handleMoveToSection = (e, id) => {
    e.preventDefault(); // 기본 해시 이동 방지
    const element = document.querySelector(id);
    if (element) {
      const offset = 100; // 네비바 높이 고려한 여백
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar__logo">Hwan's Portfolio</div>
      <nav className="navbar__menu">
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#career">Career</a>
      </nav>
    </header>
  );
}

export default Navbar
