import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import { MapProvider } from '../contexts/MapContext';

const App: React.FC = () => {
  return (
    <MapProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Add additional routes here */}
        </Routes>
      </Router>
    </MapProvider>
  );
};

export default App;
