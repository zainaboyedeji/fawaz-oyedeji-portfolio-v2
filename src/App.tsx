import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/sidebar";
import LandingPage from "./pages/landing-page";
import Projects from "./pages/projects";
import Commissions from "./pages/commissions";
import ContactMe from "./pages/contact-me";
import AboutMe from "./pages/about-me";
import { Gallery } from "./components/gallery";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/scroll-to-top";
import LoadingSpinner from "./components/loading-spinner";
import CVPage from "./pages/cv-page";
import {
  awakeningPhotosMetadata,
  gfhPhotosMetadata,
  hiddenflowsPhotosMetadata,
  mampPhotosMetadata,
  ncsiPhotosMetadata,
  nppPhotosMetadata,
  ottodailyPhotosMetadata,
  resalePhotosMetadata,
  yoursinarmsPhotosMetadata,
} from "./data";
import TearSheet from "./pages/tearsheet";
import Multimedia from "./pages/multimedia";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an async task like fetching data
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false when done
    }, 2000); // Adjust time based on how long you want to show the spinner

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <BrowserRouter>
      <div className="flex flex-col md:flex-row w-full h-screen">
        <div className="w-full md:w-1/4">
          <SideBar />
        </div>
        <div className="w-full md:w-3/4">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<LandingPage />} />
            <Route path="/commissions" element={<Commissions />} />
            <Route path="/tearsheet" element={<TearSheet />} />
            <Route path="/multimedia" element={<Multimedia />} />
            <Route
              path="/commissions/gun-for-hire"
              element={
                <AnimatePresence mode="wait">
                  <Gallery
                    photos={gfhPhotosMetadata}
                    title="Gun For Hire"
                    titleWidth={8}
                    category="gfh"
                    alt="Gun For Hire"
                  />
                </AnimatePresence>
              }
            />
            <Route
              path="/commissions/new-culture-studios-ibadan"
              element={
                <AnimatePresence mode="wait">
                  <Gallery
                    photos={ncsiPhotosMetadata}
                    title="New Culture Studios Ibadan"
                    titleWidth={8}
                    category="ncsi"
                    alt="New Culture Studios Ibadan"
                  />
                </AnimatePresence>
              }
            />
            <Route
              path="/commissions/nigerian-policing-programme"
              element={
                <AnimatePresence mode="wait">
                  <Gallery
                    photos={nppPhotosMetadata}
                    title="Nigerian Policing Programme"
                    titleWidth={8}
                    category="npp"
                    alt="Nigerian Policing Programme"
                  />
                </AnimatePresence>
              }
            />
            <Route
              path="/commissions/hidden-flows"
              element={
                <AnimatePresence mode="wait">
                  <Gallery
                    photos={hiddenflowsPhotosMetadata}
                    title="Hidden Flows"
                    titleWidth={8}
                    category="hiddenflows"
                    alt="Hidden Flows"
                  />
                </AnimatePresence>
              }
            />
            <Route path="/my-cv" element={<CVPage />} />
            <Route path="/contact-me" element={<ContactMe />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route
              path="/projects/mo-advert-mo-power"
              element={
                <AnimatePresence mode="wait">
                  <Gallery
                    photos={mampPhotosMetadata}
                    title="Mo Advert Mo Power"
                    titleWidth={8}
                    category="mamp"
                    alt="Mo Advert Mo Power"
                  />
                </AnimatePresence>
              }
            />
            <Route
              path="/projects/awakening"
              element={
                <AnimatePresence mode="wait">
                  <Gallery
                    photos={awakeningPhotosMetadata}
                    title="Awakening"
                    titleWidth={8.2}
                    category="awakening"
                    alt="Awakening"
                  />
                </AnimatePresence>
              }
            />
            <Route
              path="/projects/yours-in-arms"
              element={
                <AnimatePresence mode="wait">
                  <Gallery
                    photos={yoursinarmsPhotosMetadata}
                    title="Yours In Arms"
                    titleWidth={8.2}
                    category="yia"
                    alt="Yours In Arms"
                  />
                </AnimatePresence>
              }
            />
            <Route
              path="/projects/resale"
              element={
                <AnimatePresence mode="wait">
                  <Gallery
                    photos={resalePhotosMetadata}
                    title="Resale"
                    titleWidth={8.2}
                    category="resale"
                    alt="Resale"
                  />
                </AnimatePresence>
              }
            />
            <Route
              path="/projects/otto-daily"
              element={
                <AnimatePresence mode="wait">
                  <Gallery
                    photos={ottodailyPhotosMetadata}
                    title="Otto Daily"
                    titleWidth={8.2}
                    category="od"
                    alt="Otto Daily"
                  />
                </AnimatePresence>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;