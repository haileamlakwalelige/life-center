// import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Program from "./pages/Program";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./components/layout/Footer";
import Copy from "./components/layout/Copy";

const App = () => {
  return (
    <div className="-mt-2">
      <BrowserRouter>
        <ScrollToTop />
        <div className="mb-32">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/program" element={<Program />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Copy />
      </BrowserRouter>
    </div>
  );
};

export default App;
