import "../styles/Achievements.css";

export default function Achievements() {
  return (
    <div className="achievements-page">
      <h1 className="achievements-title">Our Impact & Legacy</h1>

      <div className="achievements-container">
        <div className="hex-card highlight">
          <div className="hex-header">
            <span className="icon">⟡</span>
            <h3>Hackathon Wins</h3>
          </div>
          <p>10+ First place, National Level</p>
        </div>

        <div className="hex-card">
          <div className="hex-header">
            <span className="icon">⟡</span>
            <h3>Open Source Contributions</h3>
          </div>
          <span className="pill">500+ merged PRs, major projects</span>
        </div>

        <div className="hex-card">
          <div className="hex-header">
            <span className="icon">⟡</span>
            <h3>Innovations & Awards</h3>
          </div>
          <div className="progress-track">
            <div className="progress-fill"></div>
          </div>
        </div>

        <div className="hex-card">
          <div className="hex-header">
            <span className="icon">⟡</span>
            <h3>Community Impact</h3>
          </div>
          <span className="pill">2000+ users, 50+ events</span>
        </div>
      </div>
    </div>
  );
}
