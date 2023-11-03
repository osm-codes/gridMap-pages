import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import { MapProvider } from '../contexts/MapContext';

interface AppProps {
  router?: 'browser' | 'static';
  location?: string; // Only needed for StaticRouter
}

const App: React.FC<AppProps> = ({ router = 'browser', location }) => {
  const Router: any = router === 'browser' ? BrowserRouter : StaticRouter;
  const routerProps = router === 'static' ? { location } : {};

  return (
    <MapProvider>
      <Router {...routerProps}>
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
