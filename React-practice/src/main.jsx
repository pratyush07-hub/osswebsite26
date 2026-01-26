import { StrictMode } from 'react'
import { createRoot ,RouteDOM} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Route, RouterProvider} from 'react-router-dom';
import {createBrowserRouter , createRoutesFromElements} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Domain from './components/Domain.jsx';
import Achievements from './components/Achievements.jsx';
import OurTeam from './components/OurTeam.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path=""
    element={<App/>}
    >
    <Route path="/"
    element={<Hero/>}
    />
    <Route path="/about"
    element={<About/>}
    />  
    <Route path="/Contact"
    element={<Contact/>}
    /> 
    <Route path="/domain"
    element={<Domain/>}
    />  
    <Route path="/achievements"
    element={<Achievements/>}
    />  
    <Route path="/our-team"
    element={<OurTeam/>}
    />  
    </Route> 
   )
  );

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)