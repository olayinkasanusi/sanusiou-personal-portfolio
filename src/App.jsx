import AboutMe from "./pages/AboutMe";
import HeroSection from "./pages/HeroSection";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import { BrowserRouter, Route, Routes } from "react-router";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<HeroSection />} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contactme" element={<ContactMe />} />
        <Route path="projects/:projectId" element={<ProjectDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// const Homepage = lazy(() => import("./pages/Homepage"));
// const Pricing = lazy(() => import("./pages/Pricing"));
// const Product = lazy(() => import("./pages/Product"));
// const PageNotFound = lazy(() => import("./pages/PageNotFound"));
// const AppLayout = lazy(() => import("./pages/AppLayout"));
// const Login = lazy(() => import("./pages/Login"));
{
  /* <Suspense fallback={spinner}> */
}
