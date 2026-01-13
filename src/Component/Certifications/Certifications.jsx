import React from "react";
import { Award, Calendar, ExternalLink } from "lucide-react";
import "./Certifications.css"; // Import CSS file

export default function Certifications() {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2025",
      credentialId: "AWS-SAA-2024-001",
      description:
        "Demonstrated expertise in designing distributed systems on AWS platform",
      skills: ["Cloud Architecture", "AWS Services", "Security", "Scalability"],
      verified: true,
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2025",
      credentialId: "GCP-PD-2023-456",
      description:
        "Proficient in developing scalable applications on Google Cloud Platform",
      skills: ["GCP", "Kubernetes", "Cloud Functions", "BigQuery"],
      verified: true,
    },
    {
      title: "Drone Pilot Training & Development",
      issuer: "PIEMR",
      date: "2023",
      credentialId: "AZ-900-2023-789",
      description: "Training in drone flying, aviation rules, cloud integration, and data analysis with Azure.",
      skills:[
  "Azure Services",  "Cloud Computing",  "Aviation Regulations","Flight Operations","Remote Sensing",
  "Navigation Systems","Data Analysis"
],
      verified: true,
    },
    {
      title: "Bash Scripting",
      issuer: "Medicaps University",
      date: "2025",
      credentialId: "BASH-2025-001",
      description: "Completed Bash scripting lectures and assessment covering command-line usage, shell scripting basics, and automation fundamentals.",
      skills: ["Bash","Linux Command Line","Shell Scripting","Automation" ],
      verified: true
    },
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <div className="certifications-header">
          <h2>Professional Certifications</h2>
          <p>
            Validated expertise through industry-recognized certifications and
            continuous learning
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-card-header">
                {/* Left side (Award + Verified) */}
                <div className="cert-left">
                  <div className="cert-icon">
                    <Award className="icon" />
                  </div>
                  {cert.verified && <span className="verified">Verified</span>}
                </div>

                {/* Right side (external link) */}
                <button className="external-link">
                  <ExternalLink className="icon" />
                </button>
              </div>

              <h3 className="cert-title">{cert.title}</h3>

              <div className="cert-meta">
                <p className="issuer">{cert.issuer}</p>
                <span className="dot">•</span>
                <div className="date">
                  <Calendar className="icon small" />
                  <span>{cert.date}</span>
                </div>
              </div>

              <p className="description">{cert.description}</p>

              <p className="credential">Credential ID: {cert.credentialId}</p>

              <div className="skills">
                {cert.skills.map((skill, i) => (
                  <span key={i} className="skill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="cert-footer">
          <p>
            Committed to continuous learning and staying updated with the latest
            technologies
          </p>
          <div className="footer-badges">
            <span className="badge blue-purple">4+ Active Certifications</span>
            <span className="badge purple-blue">Cloud Specialist</span>
          </div>
        </div>
      </div>
    </section>
  );
}
