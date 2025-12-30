import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import Spinner from "./ui/Spinner";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollToTop from "./ui/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";
import PageTransition from "./ui/PageTransition";

const HeroSection = lazy(() => import("./pages/HeroSection"));
const ContactMe = lazy(() => import("./pages/ContactMe"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Projects = lazy(() => import("./pages/Projects"));
const AboutMe = lazy(() => import("./pages/AboutMe"));
const Blog = lazy(() => import("./pages/Blog"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          index
          element={
            <PageTransition>
              <HeroSection />
            </PageTransition>
          }
        />
        <Route
          path="aboutme"
          element={
            <PageTransition>
              <AboutMe />
            </PageTransition>
          }
        />
        <Route
          path="projects"
          element={
            <PageTransition>
              <Projects />
            </PageTransition>
          }
        />
        <Route
          path="contactme"
          element={
            <PageTransition>
              <ContactMe />
            </PageTransition>
          }
        />
        <Route
          path="projects/:projectId"
          element={
            <PageTransition>
              <ProjectDetails />
            </PageTransition>
          }
        />
        <Route
          path="/blog"
          element={
            <PageTransition>
              <Blog />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition>
              <PageNotFound />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<Spinner />}>
            <AnimatedRoutes />
          </Suspense>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: { duration: 5000 },
            error: { duration: 5000 },
            style: {
              fontFamily: "sans-serif",
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "white",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
