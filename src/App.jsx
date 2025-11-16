import AboutMe from "./pages/AboutMe";
import HeroSection from "./pages/HeroSection";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/" />
        <Route />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
