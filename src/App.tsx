import LandingImage from "./components/LandingImage";
import SideBar from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="flex w-full h-screen">
        <SideBar />
        <LandingImage />
      </div>
    </BrowserRouter>
  );
}

export default App;
