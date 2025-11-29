import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Footer() {
  return (
    <footer className="bg-[#0b1e39]
 text-gray-900 pt-10 pb-6">

      {/* MAIN GRID */}
      <div
        className="container mx-auto px-6 sm:px-10 md:px-12 lg:px-20
                   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                   gap-12 md:gap-10"
      >

        {/* LOGO + TAGLINE */}
        <div className="">
          <img
            src="/logo1.jpg"
            alt="logo"
            className="h-14 mb-3"
          />

          <p className="text-sm leading-relaxed max-w-xs  text-white">
            “Safe, reliable, and technology-driven logistics solutions
            delivering efficiency across India.”
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-orange-400">Quick Links</h3>

          <ul className="space-y-2 text-sm  text-white">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/apply" className="hover:text-white">Apply Now</Link></li>
            <li><Link to="/franchise" className="hover:text-white">Franchise</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-orange-400">Legal</h3>

          <ul className="space-y-2 text-sm  text-white">
            <li>
              <Link to="/terms-and-conditions" className="hover:text-white">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-orange-400">Contact Us</h3>

          <ul className="space-y-2 text-sm text-white">
            <li>Office: Mangalore City, Udupi, Karnataka</li>
            <li>OP-65, Valmo Logistics</li>
            <li>Email: valmoglobalsolutions@gmail.com</li>
            <li>Phone: +91 8660792939</li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT LINE */}
      <p className="text-left text-sm text-white mt-10 px-6 sm:px-10 md:px-20">
        © 2025 Valmo Logistics. All rights reserved.
      </p>
    </footer>
  );
}
