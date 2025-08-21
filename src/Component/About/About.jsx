import React from "react";
import { GraduationCap, Briefcase, Code, Award } from "lucide-react";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-header">
          <h2 className="title">About Me</h2>
          <p className="subtitle">
            I am a passionate Flutter and React developer with a strong foundation in computer science and a keen
            interest in AI and cloud technologies, contributing to innovative solutions.
          </p>
        </div>

        <div className="about-grid">
          {/* Bio Section */}
          <div>
            <h3 className="sub-title">My Journey</h3>
            <p className="text">
              As a dedicated software developer, I specialize in creating seamless mobile and web experiences using
              Flutter and React. My passion for technology extends beyond development to include artificial intelligence
              and cloud computing, where I continuously explore new possibilities.
            </p>
            <p className="text">
              Currently pursuing my B.Tech in Computer Science with AI specialization, I combine academic knowledge with
              practical experience to deliver innovative solutions that make a real impact.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="skills-grid">
            <div className="skill-card">
              <Code className="icon" />
              <h4 className="skill-title">Programming</h4>
              <p className="skill-text">C, C++, Python, Java</p>
            </div>
            <div className="skill-card">
              <Award className="icon" />
              <h4 className="skill-title">Frontend & Mobile</h4>
              <p className="skill-text">React, Flutter</p>
            </div>
            <div className="skill-card">
              <Briefcase className="icon" />
              <h4 className="skill-title">AI & ML</h4>
              <p className="skill-text">Machine Learning</p>
            </div>
            <div className="skill-card">
              <GraduationCap className="icon" />
              <h4 className="skill-title">Cloud Computing</h4>
              <p className="skill-text">AWS</p>
            </div>
          </div>
        </div>

        {/* Education & Experience */}
        <div className="about-cards">
          {/* Education */}
          <div className="card">
            <div className="card-header">
              <GraduationCap className="icon small" />
              <h3 className="card-title">Education</h3>
            </div>
            <div className="card-body">
              <div>
                <h4 className="highlight">B.Tech in Computer Science (AI)</h4>
                <p>Medi-Caps University (Ongoing)</p>
              </div>
              <div>
                <h4 className="highlight">Diploma in Software Development</h4>
                <p>Prestige Institute of Engineering, Management and Research, Indore</p>
                <p className="muted">CGPA: 8.68</p>
              </div>
              <div>
                <h4 className="highlight">10th Grade</h4>
                <p>Completed in 2019</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="card">
            <div className="card-header">
              <Briefcase className="icon small" />
              <h3 className="card-title">Experience</h3>
            </div>
            <div className="card-body">
              <div>
                <h4 className="highlight">Cloud Engineer Intern</h4>
                <p>AWS Academy at Medi-Caps University</p>
                <p className="muted">Gained hands-on experience with AWS cloud services and infrastructure</p>
              </div>
              <div>
                <h4 className="highlight">Government Internship</h4>
                <p>AICTSL, Indore</p>
                <p className="muted">Contributed to government technology initiatives and digital solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
