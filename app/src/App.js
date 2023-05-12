import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AboutPage from './components/pages/about/AboutPage';
import ChessPage from './components/pages/chess/ChessPage';
import PortfolioPage from './components/pages/portfolio/PortfolioPage';
import BlogPage from './components/pages/blog/BlogPage';
import NotFoundPage from './components/pages/notfound/NotFoundPage'

function App() {
  return (
    <div id="main-container">
      <Router>
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="chess" element={<ChessPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="/*" element = {<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
