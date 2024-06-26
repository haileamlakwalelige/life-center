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
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS file for styling
import { useEffect } from "react";
import BlogDetail from "./pages/BlogDetail";
import NewsDetail from "./pages/NewsDetail";

// Initialize AOS
AOS.init();

const App = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);
  return (
    <div className="-mt-2">
      <BrowserRouter>
        <ScrollToTop />
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/program" element={<Program />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news/:id" element={<NewsDetail />} />
        </Routes>
        <Footer />
        <Copy />
      </BrowserRouter>
    </div>
  );
};

export default App;
