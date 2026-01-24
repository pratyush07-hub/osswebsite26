import "./styles/global.css";
import Hero from "./components/Hero";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return(
    <div>
    <Navbar />
    <Outlet/>
    </div>

  );
}

export default App;
