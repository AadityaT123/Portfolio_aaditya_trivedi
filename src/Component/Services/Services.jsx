import React from "react";
import { Smartphone, Globe, Brain, Cloud, Code, Users } from "lucide-react";
import "./Services.css";

export default function Services() {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications using Flutter with smooth UI/UX and seamless backend integration.",
      features: ["iOS & Android Apps", "Custom UI/UX Design", "Backend Integration", "Performance Optimization"],
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive web applications built with React and cutting-edge technologies.",
      features: ["React Applications", "Responsive Design", "Modern UI/UX", "SEO Optimization"],
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence and machine learning algorithms.",
      features: ["ML Model Development", "AI Integration", "Data Analysis", "Predictive Analytics"],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions using AWS services.",
      features: ["AWS Deployment", "Cloud Architecture", "Scalable Solutions", "DevOps Integration"],
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions tailored to your specific business needs and requirements.",
      features: ["Custom Applications", "API Development", "Database Design", "System Integration"],
    },
    {
      icon: Users,
      title: "Consulting",
      description: "Technical consulting and guidance for your development projects and technology decisions.",
      features: ["Technical Guidance", "Architecture Planning", "Code Review", "Best Practices"],
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2>Services</h2>
          <p>
            Comprehensive development services to bring your ideas to life with modern technologies and best practices.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <Icon />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="feature-dot"></span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
