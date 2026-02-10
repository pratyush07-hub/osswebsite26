import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";

import Achievements from "./components/Achievements";
import OurTeam from "./components/OurTeam";
import Domain from "./components/Domain";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
    
      <Navbar />

      
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/OurTeam" element={<OurTeam />} />
          <Route path="/domain" element={<Domain />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
