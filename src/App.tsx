import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CV from './pages/CV';
import Biografia from './pages/Biografia';
import Harrastukset from './pages/Harrastukset';
import Projektit from './pages/Projektit';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<CV />} />
            <Route path="/biografia" element={<Biografia />} />
            <Route path="/harrastukset" element={<Harrastukset />} />
            <Route path="/projektit" element={<Projektit />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
