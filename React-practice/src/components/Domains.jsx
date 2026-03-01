import { useState } from "react";

const DOMAINS = [
  {
    id: 1,
    title: "AI-ML",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="7" cy="22" r="3" fill="white" />
        <circle cx="22" cy="7" r="3" fill="white" />
        <circle cx="37" cy="22" r="3" fill="white" />
        <circle cx="22" cy="37" r="3" fill="white" />
        <circle cx="14" cy="14" r="2" fill="white" opacity="0.5" />
        <circle cx="30" cy="14" r="2" fill="white" opacity="0.5" />
        <circle cx="14" cy="30" r="2" fill="white" opacity="0.5" />
        <circle cx="30" cy="30" r="2" fill="white" opacity="0.5" />
        <line x1="7" y1="22" x2="22" y2="7" stroke="white" strokeWidth="1.2" opacity="0.45" />
        <line x1="22" y1="7" x2="37" y2="22" stroke="white" strokeWidth="1.2" opacity="0.45" />
        <line x1="37" y1="22" x2="22" y2="37" stroke="white" strokeWidth="1.2" opacity="0.45" />
        <line x1="22" y1="37" x2="7" y2="22" stroke="white" strokeWidth="1.2" opacity="0.45" />
        <line x1="14" y1="14" x2="30" y2="30" stroke="white" strokeWidth="1" opacity="0.25" />
        <line x1="30" y1="14" x2="14" y2="30" stroke="white" strokeWidth="1" opacity="0.25" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "APP Development",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect x="5" y="9" width="34" height="26" rx="3" stroke="white" strokeWidth="1.4" />
        <line x1="5" y1="17" x2="39" y2="17" stroke="white" strokeWidth="1.4" />
        <circle cx="11" cy="13" r="2" fill="white" opacity="0.55" />
        <circle cx="17" cy="13" r="2" fill="white" opacity="0.55" />
        <line x1="12" y1="24" x2="20" y2="24" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="29" x2="32" y2="29" stroke="white" strokeWidth="1.4" strokeLinecap="round" opacity="0.45" />
        <line x1="12" y1="33" x2="26" y2="33" stroke="white" strokeWidth="1.4" strokeLinecap="round" opacity="0.45" />
        <polyline points="24,21 28,25 24,29" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Frontend",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <path d="M22 5L9 11V22C9 30 14.5 37 22 40C29.5 37 35 30 35 22V11L22 5Z" stroke="white" strokeWidth="1.4" />
        <polyline points="15,22 19,26 29,16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Open Source",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect x="13" y="17" width="18" height="14" rx="2" stroke="white" strokeWidth="1.4" />
        <rect x="17" y="10" width="10" height="8" rx="2" stroke="white" strokeWidth="1.4" />
        <circle cx="22" cy="14" r="1.5" fill="white" opacity="0.6" />
        <line x1="9" y1="23" x2="13" y2="23" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="31" y1="23" x2="35" y2="23" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="17" y1="31" x2="15" y2="37" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="27" y1="31" x2="29" y2="37" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="19" cy="23" r="2" fill="white" opacity="0.45" />
        <circle cx="25" cy="23" r="2" fill="white" opacity="0.45" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Backend",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect x="14" y="5" width="16" height="34" rx="3" stroke="white" strokeWidth="1.4" />
        <line x1="14" y1="11" x2="30" y2="11" stroke="white" strokeWidth="1.4" opacity="0.5" />
        <line x1="14" y1="33" x2="30" y2="33" stroke="white" strokeWidth="1.4" opacity="0.5" />
        <circle cx="22" cy="37" r="1.5" fill="white" opacity="0.55" />
        <rect x="18" y="16" width="8" height="6" rx="1" fill="white" opacity="0.15" stroke="white" strokeWidth="1" />
        <line x1="18" y1="25" x2="26" y2="25" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.45" />
        <line x1="18" y1="28" x2="23" y2="28" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.45" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "UI/UX Design",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="15" stroke="white" strokeWidth="1.4" opacity="0.35" />
        <circle cx="22" cy="22" r="9" stroke="white" strokeWidth="1.4" opacity="0.55" />
        <circle cx="22" cy="22" r="3.5" fill="white" />
        <line x1="22" y1="7" x2="22" y2="13" stroke="white" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
        <line x1="22" y1="31" x2="22" y2="37" stroke="white" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
        <line x1="7" y1="22" x2="13" y2="22" stroke="white" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
        <line x1="31" y1="22" x2="37" y2="22" stroke="white" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
];

export default function DomainsSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      {/* Inject global styles to remove scrollbar */}
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          overflow: hidden;
          height: 100%;
        }
      `}</style>

      <div
        style={{
          background: "#111",
          borderRadius: "18px",
          padding: "44px 25px 44px 25px",
          fontFamily: "'Courier New', Courier, monospace",
          overflow: "hidden",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            color: "#fff",
            fontSize: "2.6rem",
            fontWeight: 900,
            margin: "0 0 36px 0",
            letterSpacing: "-1.5px",
            padding: "15px 0 8px 0",
          }}
        >
          Domains
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "18px",
          }}
        >
          {DOMAINS.map((domain) => (
            <div
              key={domain.id}
              onMouseEnter={() => setHovered(domain.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === domain.id ? "#1e1e1e" : "#1a1a1a",
                border: hovered === domain.id
                  ? "1px solid rgba(255,255,255,0.18)"
                  : "1px solid rgba(255,255,255,0.06)",
                borderRadius: "12px",
                padding: "10px 30px",
                cursor: "pointer",
                transition: "all 0.25s ease",
                transform: hovered === domain.id ? "translateY(-4px)" : "translateY(0)",
                boxShadow: hovered === domain.id
                  ? "0 16px 48px rgba(0,0,0,0.55)"
                  : "0 2px 8px rgba(0,0,0,0.3)",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                minHeight: "130px",
              }}
            >
              <div style={{ opacity: hovered === domain.id ? 1 : 0.7, transition: "opacity 0.25s" }}>
                {domain.icon}
              </div>
              <div>
                <h3
                  style={{
                    color: "#fff",
                    fontSize: "1rem",
                    fontWeight: 700,
                    margin: "0 0 6px 0",
                    letterSpacing: "0.01em",
                  }}
                >
                  {domain.title}
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "0.82rem",
                    margin: 0,
                    lineHeight: "1.55",
                  }}
                >
                  {domain.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}