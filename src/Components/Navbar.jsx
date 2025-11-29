import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "../App.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Close menu after clicking a link (mobile)
  const closeMenu = () => setOpen(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div
        className="
          flex items-center justify-between 
          px-4 py-3 max-w-7xl mx-auto
        "
      >
        {/* LOGO */}
        <Link to="/" onClick={closeMenu}>
          <img
            src="/logo.png"
            alt="Logo"
            className="h-15 w-auto object-contain cursor-pointer"
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul
          className="
            hidden md:flex 
            items-center gap-8 
            text-gray-700 font-medium 
            whitespace-nowrap
          "
        >
          <li><Link to="/" className="hover:text-orange-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-orange-600">About Us</Link></li>
          <li><Link to="/apply" className="hover:text-orange-600">Apply Now</Link></li>
          <li><Link to="/franchise" className="hover:text-orange-600">Franchise Details</Link></li>
          <li><Link to="/contact" className="hover:text-orange-600">Contact</Link></li>
        </ul>

        {/* DESKTOP BUTTON */}
        <div className="hidden lg:flex">
          <Link to="/quote">
            <button className="bg-orange-600 text-white py-2 px-5 rounded-lg whitespace-nowrap hover:bg-orange-700 transition">
              Get Quote
            </button>
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden bg-white shadow-md transition-all duration-300 
          overflow-hidden ${open ? "max-h-80" : "max-h-0"}
        `}
      >
        <ul className="flex flex-col px-6 py-4 gap-4 text-gray-700 font-medium">

          <li>
            <Link to="/" onClick={closeMenu} className="block hover:text-orange-600">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" onClick={closeMenu} className="block hover:text-orange-600">
              About Us
            </Link>
          </li>

          <li>
            <Link to="/apply" onClick={closeMenu} className="block hover:text-orange-600">
              Apply Now
            </Link>
          </li>

          <li>
            <Link to="/franchise" onClick={closeMenu} className="block hover:text-orange-600">
              Franchise Details
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={closeMenu} className="block hover:text-orange-600">
              Contact
            </Link>
          </li>

          {/* Mobile Get Quote */}
          <li>
            <Link to="/quote" onClick={closeMenu}>
              <button className="w-full bg-orange-600 text-white py-2 rounded-lg mt-2 hover:bg-orange-700">
                Get Quote
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
