import "../styles/Achievements.css";
import { Trophy, Github, Lightbulb, Users } from "lucide-react";

export default function Achievements() {
  const impacts = [
    {
      icon: <Trophy />,
      title: "Hackathon Wins",
      subtitle: "10+ First place, National Level",
      hasProgressBar: true,
    },
    {
      icon: <Github />,
      title: "Open Source Contributions",
      subtitle: "500+ Merged PRs, major projects",
      // hasBox: true,
    },
    {
      icon: <Lightbulb />,
      title: "Innovations Awards",
      subtitle: "15+ Industry recognitions",
      // hasBox: true,
    },
    {
      icon: <Users />,
      title: "Community Impact",
      subtitle: "2000+ Members, 50+ Events",
      // hasBox: true,
    },
  ];

  return (
    <div className="achievements-container">
      <main className="main-content">
        <div className="title-section">
          <h1 className="main-title">Our Impact & Legacy</h1>
        </div>

        <div className="cards-container">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className={`impact-card ${
                index === 0 ? "gradient-border" : "gray-border"
              }`}
            >
              {/* Icon */}
              <div className="card-icon">{impact.icon}</div>

              {/* Middle Section */}
              <div className="card-middle">
                <h2 className="card-title">{impact.title}</h2>

                {/* Subtitle always shows */}
                {impact.subtitle && (
                  <p className="subtitle-text">{impact.subtitle}</p>
                )}

                {/* Optional Progress Bar */}
                {impact.hasProgressBar && (
                  <div className="progress-bar">
                    <div className="progress-fill"></div>
                  </div>
                )}
              </div>

              {/* Optional Box (for styling) */}
              {impact.hasBox && (
                <div className="subtitle-box">
                  <p className="subtitle-text">{impact.subtitle}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
