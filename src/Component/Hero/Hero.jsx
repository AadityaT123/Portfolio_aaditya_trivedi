import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // React Icons
import { HiArrowDown } from "react-icons/hi"; // ArrowDown
import "./Hero.css"; // Import the CSS file

export function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          {/* Profile Picture */}
          <div className="hero-profile mb-8">
            <div className="profile-image">
              <img
                src="/indian-software-developer-headshot.png"
                alt="Aaditya Trivedi - Professional Profile"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="hero-name">Aaditya Trivedi</h1>
          <p className="hero-title">
            Passionate Flutter & React Developer | AI & Cloud Enthusiast
          </p>
          <p className="hero-description">
            Crafting innovative mobile and web solutions with cutting-edge
            technologies. Specializing in Flutter, React, AI, and cloud computing
            to bring ideas to life.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <button
              className="hero-btn primary-btn"
              onClick={() => scrollToSection("portfolio")}
            >
              View My Work
            </button>
            <button
              className="hero-btn secondary-btn"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </button>
          </div>

 {/* Social Links */}
<div className="hero-socials">
  <a
    href="https://github.com/AadityaT123"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub />
  </a>
  <a
    href="https://www.linkedin.com/in/aaditya-trivedi-16196524b/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin />
  </a>
  <a href="mailto:aadityatrivedi31244@gmail.com">
    <FaEnvelope />
  </a>
</div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection("about")}
            className="scroll-indicator"
          >
            <HiArrowDown className="scroll-icon" size={30} />
          </button>
        </div>
      </div>
    </section>
  );
}
