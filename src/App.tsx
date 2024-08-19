import { Routes, Route } from "react-router-dom";
import SideBar from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Projects from "./pages/Projects";
import Commissions from "./pages/Commissions";
import ContactMe from "./pages/ContactMe";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col md:flex-row w-full h-screen">
       <div  className="w-full md:w-1/4" >
       <SideBar/>
       </div>
        <div className="w-full md:w-3/4">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<LandingPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/commissions" element={<Commissions />} />
            <Route path="/contact-me" element={<ContactMe />} />
            <Route path="/about-me" element={<AboutMe />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
