import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  {Navbar}  from "./components/Navbar";
import { TimedCards } from "./components/timed-cards";
import { MobileView } from "./components/MobileView";
import { Team } from "./pages/Team";
import { Events } from "./pages/Events";
import { useDeviceDetect } from "./useDeviceDetect";
import Main from "./components/Main";
import RegistrationForm from "./components/RegistrationForm";
import { useEffect } from "react";
import Co from "./components/Co";


function App() {
  const isMobile = useDeviceDetect();
 

  return (
    <Router>
      <div className="min-h-screen bg-[#1a1a1a] text-[#FFFFFFDD]">
        <Navbar />
        <Routes>
          {/* Detect device and render the appropriate view */}
          <Route path="/" element={<Main/>} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={isMobile? <MobileView/>:<TimedCards />} />
          <Route path="/register" element={<RegistrationForm/>} />
          <Route path="/co" element={<Co/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
