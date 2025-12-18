import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Demo from './components/Demo';
import DomesticDemo from './components/DomesticDemo';
import InternationalDemo from './components/InternationalDemo';
import ProductDemo from './components/ProductDemo';
import Terms from './components/Terms';
import AboutUs from './components/AboutUs';
import Contacts from './components/Contacts';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Delay scroll to prevent interference with navigation transition and avoid browser security locks
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/demo/domestic" element={<DomesticDemo />} />
          <Route path="/demo/international" element={<InternationalDemo />} />
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/product-demo" element={<ProductDemo />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;