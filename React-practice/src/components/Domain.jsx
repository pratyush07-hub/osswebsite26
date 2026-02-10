import React from "react";
import "../styles/Domain.css";

export default function Domain() {
  const domainList = [
    { name: "AIML", description: "Exploring the world of Artificial Intelligence and Machine Learning." },
    { name: "FRONTEND", description: "Building responsive, high-performance web interfaces with React and modern tools." },
    { name: "OPEN SOURCE", description: "Contributing to global projects and mastering Git, GitHub, and GSoC." },
    { name: "BACKEND", description: "Designing robust server-side logic, databases, and secure APIs." },
    { name: "UI-UX", description: "Crafting intuitive user experiences and beautiful digital designs." },
    { name: "APP-DEV", description: "Developing seamless mobile applications for Android and iOS platforms." }
  ];

  return (
    <div className="domains-container">
      <header className="domains-header">
        <h1>DOMAINS</h1>
        <div className="underline"></div>
      </header>

      <div className="domains-grid">
        {domainList.map((domain, index) => (
          <div key={index} className="domain-card">
            <h2>{domain.name}</h2>
            <p>{domain.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}