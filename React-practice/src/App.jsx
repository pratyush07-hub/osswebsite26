import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import "./styles/global.css";
import Achievements from "./components/Achievements";
import Domains from "./components/Domains";


function App() {
  return (
    <BrowserRouter>
      {/* Navbar always visible */}
      <Navbar />

      {/* Page content */}
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/Domains" element={<Domains />} />




        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
