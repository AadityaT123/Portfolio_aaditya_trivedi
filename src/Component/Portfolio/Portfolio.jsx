import React from "react";
import { ExternalLink, Github } from "lucide-react";
import "./Portfolio.css"; // Dark styled CSS
import { Project } from "../Assets/Project";

export function Portfolio() {
  const projects = [
  {
    title: "Fare Jobs",
    description:
      "A comprehensive job portal built with React & Node.js featuring an admin panel, dark/light themes, and responsive design for seamless job searching and posting.",
    image: Project.farejobs,   // ✅ fixed
    technologies: ["React", "Node.js", "Admin Panel", "Responsive Design"],
    liveLink: "https://fare-jobs.netlify.app/",
    githubLink: "https://github.com/AadityaT123/job-Portal",
  },
  {
    title: "DESICART",
    description:
      "A feature-rich e-commerce platform developed with React, showcasing product listings, special offers, and a fully responsive design for optimal shopping experience.",
    image: Project.desicart,   // ✅ fixed
    technologies: ["React", "E-commerce", "Product Listings", "Responsive"],
    liveLink: "https://desicart-commerce.netlify.app/",
    githubLink: "https://github.com/AadityaT123/Desicart-Fullstack",
  },
  {
    title: "DineEase",
    description:
      "A Flutter mobile application for restaurant table bookings and pre-order management, featuring smooth UI/UX and seamless backend integration.",
    image: Project.farejobs,
    technologies: ["Flutter", "Mobile App", "Restaurant Booking", "UI/UX"],
    liveLink: "#",
    githubLink: "https://github.com/AadityaT123/DineEase-FullStack",
  },
  {
    title: "Flutter Mobile Apps",
    description:
      "Collection of Android/iOS applications built with Flutter, featuring smooth animations, intuitive user interfaces, robust backend integrations, and seamless cross-platform performance.",
    image: Project.TODO,
    technologies: ["Flutter", "Android", "iOS", "Backend Integration"],
    liveLink: "#",
    githubLink: "https://github.com/AadityaT123/TODO_flutter_app",
  },
];


  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2 className="title">Portfolio</h2>
          <p className="subtitle">
            Showcasing my latest projects and applications built with modern
            technologies and best practices.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card">
              <div className="card-image">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                />
              </div>

              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>

                <div className="tech-tags">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="card-buttons">
                  {project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <ExternalLink className="icon" />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    <Github className="icon" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
