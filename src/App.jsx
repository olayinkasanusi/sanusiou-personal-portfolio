import { BrowserRouter, Route, Routes } from "react-router";

import { lazy, Suspense } from "react";
import Spinner from "./ui/Spinner";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollToTop from "./ui/ScrollToTop";

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

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools /> */}
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" index element={<HeroSection />} />
              <Route path="aboutme" element={<AboutMe />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contactme" element={<ContactMe />} />
              <Route path="projects/:projectId" element={<ProjectDetails />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 5000,
            },
            error: {
              duration: 5000,
            },
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
    </>
  );
}

export default App;
