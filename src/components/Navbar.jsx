import { useEffect, useState } from "react";
import { FaRegCircle, FaBars, FaTimes } from "react-icons/fa";
import logo  from "../assets/images/logo.png"

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white shadow-lg z-50 transition-all duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 lg:px-8 py-4">

        {/* Logo */}

        <div className="flex items-center gap-3">

         <div>
  <img
    src={logo}
    alt="OnePager Logo"
    className="w-72 h-auto object-contain"
  />
</div>

        </div>

        {/* Desktop Menu */}

        <nav className="hidden lg:block">

          <ul className="flex gap-12 uppercase font-medium text-xl">

            <li>
              <a href="#home" className="hover:text-cyan-500 duration-300">
                Home
              </a>
            </li>

            <li>
              <a href="#portfolio" className="hover:text-cyan-500 duration-300">
                Portfolio
              </a>
            </li>

            <li>
              <a href="#services" className="hover:text-cyan-500 duration-300">
                Services
              </a>
            </li>

            <li>
              <a href="#team" className="hover:text-cyan-500 duration-300">
                Team
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-cyan-500 duration-300">
                About
              </a>
            </li>

            <li>
              <a href="#blog" className="hover:text-cyan-500 duration-300">
                Blog
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-cyan-500 duration-300">
                Contact Us
              </a>
            </li>

          </ul>

        </nav>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <nav className="lg:hidden bg-white border-t shadow-md">

          <ul className="flex flex-col text-center uppercase font-medium">

            <li>
              <a
                href="#home"
                onClick={closeMenu}
                className="block py-4 hover:bg-cyan-500 hover:text-white duration-300"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#portfolio"
                onClick={closeMenu}
                className="block py-4 hover:bg-cyan-500 hover:text-white duration-300"
              >
                Portfolio
              </a>
            </li>

            <li>
              <a
                href="#services"
                onClick={closeMenu}
                className="block py-4 hover:bg-cyan-500 hover:text-white duration-300"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#team"
                onClick={closeMenu}
                className="block py-4 hover:bg-cyan-500 hover:text-white duration-300"
              >
                Team
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="block py-4 hover:bg-cyan-500 hover:text-white duration-300"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#blog"
                onClick={closeMenu}
                className="block py-4 hover:bg-cyan-500 hover:text-white duration-300"
              >
                Blog
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="block py-4 hover:bg-cyan-500 hover:text-white duration-300"
              >
                Contact Us
              </a>
            </li>

          </ul>

        </nav>

      )}

    </header>
  );
}

export default Navbar;