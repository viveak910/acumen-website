import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { TimedCards } from './components/timed-cards';
import { Team } from './pages/Team';
import { Events } from './pages/Events';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1a1a1a] text-[#FFFFFFDD]">
        <Navbar />
        <Routes>
          <Route path="/" element={<TimedCards />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;