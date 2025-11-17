// import AboutMe from "./pages/AboutMe";
// import HeroSection from "./pages/HeroSection";
// import ContactMe from "./pages/ContactMe";
// import Projects from "./pages/Projects";
// import ProjectDetails from "./pages/ProjectDetails";
import { BrowserRouter, Route, Routes } from "react-router";

import { lazy, Suspense } from "react";
import Spinner from "./ui/Spinner";

const HeroSection = lazy(() => import("./pages/HeroSection"));
const ContactMe = lazy(() => import("./pages/ContactMe"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Projects = lazy(() => import("./pages/Projects"));
const AboutMe = lazy(() => import("./pages/AboutMe"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" index element={<HeroSection />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contactme" element={<ContactMe />} />
          <Route path="projects/:projectId" element={<ProjectDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
{
  /* <Suspense fallback={spinner}> */
}
