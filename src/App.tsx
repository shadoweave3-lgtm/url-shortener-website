import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import RedirectHandler from './components/RedirectHandler';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Contact from './pages/Contact';

function AppContent() {
  const location = useLocation();
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    const path = location.pathname;
    const slugFromPath = path.substring(1);

    const validRoutes = ['', 'features', 'pricing', 'dashboard', 'about', 'contact'];
    const isValidRoute = validRoutes.includes(slugFromPath);

    if (!isValidRoute && slugFromPath) {
      setSlug(slugFromPath);
    } else {
      setSlug(null);
    }
  }, [location.pathname]);

  if (slug) {
    return <RedirectHandler slug={slug} />;
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
