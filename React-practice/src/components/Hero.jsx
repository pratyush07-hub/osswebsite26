
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../styles/hero.css";

export default function Hero() {
  const lines = [
    "Hello !",
    "Welcome to OSS",
    "Fueling Tech Passion Through Open Source"
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0); 
  const [charIndex, setCharIndex] = useState(0); 

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentLine = lines[lineIndex];
      
      
      setDisplayedText(currentLine.slice(0, charIndex + 1));
      setCharIndex(prev => prev + 1);

      
      if (charIndex + 1 === currentLine.length) {
        setTimeout(() => {
          setCharIndex(0);
          setLineIndex((lineIndex + 1) % lines.length); 
          setDisplayedText("");
        }, 800); 
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [charIndex, lineIndex]);

  return (
    <div className="hero">
      <Navbar />

    
      <div className="code-bg">
        <pre>
{`
while(true){
  System.out.println(" Open Source ");
  contribute();
}

// ... your repeated code ...
`.repeat(20)}
        </pre>
      </div>


      <div className="hero-text">
        <h1>{displayedText}</h1>
      </div>
    </div>
  );
}
