import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AboutPage from './components/pages/about/About';
import ChessPage from './components/pages/chess/ChessPage';
import ProjectsPage from './components/pages/projects/Projects';
import BlogPage from './components/pages/blog/Blog';

function App() {
  return (
    <div id="main-container">
      <Router>
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="chess" element={<ChessPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="blog" element={<BlogPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
