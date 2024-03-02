import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0 || window.innerWidth < 768;
      console.log("is scrolled,", isScrolled);
      console.log("window inner length", window.innerWidth);
      setScrolled(isScrolled);
    };

    const handleResize = () => {
      // Your resize handling logic goes here
      handleScroll(); // Update scroll state on resize
    };

    // Subscribe to the scroll and resize events when the component mounts on the client side
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);

      // Unsubscribe from the events when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div
      className={`fixed w-screen top-0 py-2 z-50 ${
        scrolled ? "bg-[#212741] lg:text-white" : " lg:bg-transparent "
      }`}
    >
      <nav
        className={`navbar py-2 sticky top-0  z-50 ${
          scrolled ? "lg:bg-[#212741] lg:text-white" : " lg:bg-transparent "
        }`}
      >
        <Link
          to="/"
          className={`${
            scrolled
              ? " flex items-start lg:items-end lg:bg-[#212741] lg:text-white   justify-start lg:justify-end "
              : " flex items-start  lg:items-end justify-start lg:justify-end "
          }`}
          onClick={closeMobileMenu}
        >
          <img
            src={logo}
            alt="Ethiopian Nutrition Leaders Network"
            className="lg:h-28 h-16  lg:w-60 lg:mr-10 navbar-logo"
          />
        </Link>
        <div className="menu-icon text-black00 mt-3" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul
          className={
            click
              ? "nav-menu active lg:gap-10 -mr-20 overflow-x-hidden justify-center items-center lg:bg-[#212741] lg:text-white"
              : "nav-menu lg:gap-10 -mr-20 overflow-x-hidden  justify-center font-normal items-center"
          }
        >
          <li className="nav-item">
            <Link
              to="/"
              className={`${
                scrolled
                  ? " py-2 px-3 md:p-0 text-[#FF9700] lg:text-white  flex justify-center items-center offer lg:text-2xl rounded md:bg-transparent text-center hove font-serif"
                  : " py-2 px-3 md:p-0 text-[#FF9700] flex justify-center items-center  text-center  lg:text-2xl rounded md:bg-transparent  hove font-serif"
              }`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>{" "}
          <li className="nav-item">
            <Link
              to="/about"
              className={`${
                scrolled
                  ? " py-2 px-3 md:p-0 text-[#FF9700] lg:text-white  flex justify-center items-center offer lg:text-2xl rounded md:bg-transparent text-center hove font-serif"
                  : " py-2 px-3 md:p-0 text-[#FF9700] flex justify-center items-center  text-center  lg:text-2xl rounded md:bg-transparent  hove font-serif"
              }`}
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>{" "}
          <li className="nav-item">
            <Link
              to="/program"
              className={`${
                scrolled
                  ? " py-2 px-3 md:p-0 text-[#FF9700] lg:text-white  flex justify-center items-center offer lg:text-2xl rounded md:bg-transparent text-center hove font-serif"
                  : " py-2 px-3 md:p-0 text-[#FF9700] flex justify-center items-center  text-center  lg:text-2xl rounded md:bg-transparent  hove font-serif"
              }`}
              onClick={closeMobileMenu}
            >
              Program
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/blog"
              className={`${
                scrolled
                  ? " py-2 px-3 md:p-0 text-[#FF9700] lg:text-white  flex justify-center items-center offer lg:text-2xl rounded md:bg-transparent text-center hove font-serif"
                  : " py-2 px-3 md:p-0 text-[#FF9700] flex justify-center items-center  text-center  lg:text-2xl rounded md:bg-transparent  hove font-serif"
              }`}
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
          </li>
          <li className="nav-item ">
            <Link
              to="/contact"
              className="nav-links but  hover:rounded-3xl lg:rounded-3xl lg:bg-[#FF7700] lg:text-white font-normal"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
