import React from "react";
import "../styles/about.css";

export default function About() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>Open Source Society (OSS)</h1>
        <p className="subtitle">Ajay Kumar Garg Engineering College</p>
      </section>

      <section className="about-content">
        <div className="card">
          <h2>Who We Are</h2>
          <p>
            The Open Source Society is a community of tech enthusiasts dedicated to the 
            culture of open-source development. Located at the heart of the 
            <strong> CS-IT Block, 4th Floor (Block-4)</strong>, our lab serves as a 
            hub for innovation, collaboration, and late-night coding sessions.
          </p>
        </div>

        <div className="card">
          <h2>Open Source & GSoC</h2>
          <p>
            Open source is more than just code; it's about community and transparency. 
            We focus heavily on programs like <strong>Google Summer of Code (GSoC)</strong>, 
            mentoring students to contribute to global projects, master Git/GitHub, 
            and build software that impacts millions worldwide.
          </p>
        </div>

        <div className="card">
          <h2>Our Team & Alumni</h2>
          <p>
            Our strength lies in our people. From competitive programmers to full-stack 
            developers, our <strong>Team</strong> is a group of passionate learners. 
            Our <strong>Alumni</strong> have gone on to work at top-tier tech giants 
            and contribute to major open-source organizations, carrying the OSS legacy 
            across the globe.
          </p>
        </div>
      </section>

      <footer className="about-footer">
        <p>Visit us at Block-4, 4th Floor, AKGEC</p>
      </footer>
    </div>
  );
}