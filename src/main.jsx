import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NavBar from "./Components/NavBar";
import App from "./pages/App";
import Games from "./pages/Games";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import "./assets/css/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/frogbite-web/" element={<App />} />
        <Route path="/frogbite-web/games" element={<Games />} />
        <Route path="/frogbite-web/services" element={<Services />} />
        <Route path="/frogbite-web/careers" element={<Careers />} />
        <Route path="/frogbite-web/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
