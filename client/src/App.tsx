import { BrowserRouter, Routes, Route } from 'react-router-dom';

<<<<<<< HEAD
=======

>>>>>>> 53f21b011418f432ea9bcd14d72959308ed440b5
import './scss/styles.scss';

import AboutPage from './pages/aboutPage';
import ContactPage from './pages/contactPage';

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
