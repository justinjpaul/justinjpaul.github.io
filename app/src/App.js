import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AboutPage from './components/pages/about/AboutPage';
import ChessPage from './components/pages/chess/ChessPage';
import PortfolioPage from './components/pages/portfolio/PortfolioPage';
import UpdatesPage from './components/pages/updates/UpdatesPage';
import NotFoundPage from './components/pages/notfound/NotFoundPage'

function App() {
  return (
    <div id="main-container">
      <Router>
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="chess" element={<ChessPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="updates" element={<UpdatesPage />} />
          <Route path="/*" element = {<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
