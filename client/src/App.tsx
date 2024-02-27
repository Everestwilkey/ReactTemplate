import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react';
import './scss/styles.scss';
import Header from './componnents/header';
import ContactForm from './componnents/contactform';
import AboutPage from './pages/aboutPage';
import ContactPage from './pages/contactPage';
import Footer from './componnents/footer';
import Home from './pages/homePage';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="About" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
