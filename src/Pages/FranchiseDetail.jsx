import React, { useState, useEffect } from "react";
import "../App.css";

const slides = [
  { image: "/1.jpeg" },
  { image: "/2.jpg" },
  { image: "/3.jpeg" },
];

export default function FranchiseDetail() {
  const [index, setIndex] = useState(0);
  const [animateHero, setAnimateHero] = useState(false);

  // Popup state
  const [showPopup, setShowPopup] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Franchise");

  useEffect(() => {
    setAnimateHero(true);
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
      setAnimateHero(false);
      setTimeout(() => setAnimateHero(true), 50);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-white py-10">

      {/* ===================== RESPONSIVE HERO ===================== */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 py-10 md:py-16 px-5 sm:px-10 md:px-20 items-center gap-10">

        {/* LEFT CONTENT */}
        <div className="space-y-5 animate-fadeInSlow text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-400 leading-tight">
            Become a Franchise Partner
          </h1>

          <p className="text-black-600 text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            Join India’s most reliable logistics network offering scalable 
            franchise opportunities, strong operational support and nationwide presence.
          </p>

          {/* APPLY NOW BUTTON */}
          <div className="flex justify-center md:justify-start">
            <button
              onClick={() => {
                setSelectedOption("Franchise");
                setShowPopup(true);
              }}
              className="px-8 py-3 bg-orange-400 text-white rounded-full hover:bg-orange-500 shadow-lg transition-all"
            >
              Apply Now
            </button>
          </div>

          {/* STATS */}
          <div className="flex justify-center md:justify-start gap-10 pt-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-orange-400">10,000+</h2>
              <p className="text-gray-500 text-sm">Shipments Daily</p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-orange-400">500+</h2>
              <p className="text-gray-500 text-sm">Active Franchise Partners</p>
            </div>
          </div>
        </div>

        {/* RIGHT HERO IMAGE */}
        <div className="relative h-[260px] sm:h-[320px] md:h-[380px] rounded-2xl overflow-hidden shadow-xl">
          <img
            src={slides[index].image}
            alt="hero"
            className={`w-full h-full object-cover transition-all duration-[1500ms]
            ${animateHero ? "opacity-100 scale-110" : "opacity-0 scale-100"}`}
          />
          <div className="absolute inset-0 bg-blue-600/20 mix-blend-multiply"></div>
        </div>
      </div>

      {/* ===================== FRANCHISE CARDS ===================== */}
      <div className="py-16 bg-white">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-orange-400 mb-14 animate-fadeInSlow">
          Franchise Opportunities
        </h2>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 sm:px-10 md:px-16">

          {[
            { img: "/4.jpg", title: "Standard Franchise", desc: "Ideal for local delivery operations with consistent parcel movement." },
            { img: "/5.jpg", title: "Master Franchise", desc: "Manage regional operations with strong business control and growth potential." },
            { img: "/6.webp", title: "B2B / Heavy Shipments", desc: "Perfect for businesses handling bulk or heavy logistics across regions." }
          ].map((card, i) => (
            <div
              key={i}
              className="relative h-[240px] sm:h-[260px] md:h-[280px] rounded-2xl overflow-hidden border border-blue-200 shadow-lg hover:shadow-xl transition-all animate-cardFadeUp hover:-translate-y-2 bg-white"
              style={{ animationDelay: `${i * 0.2}s` }}
            >

              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-90"
                style={{ backgroundImage: `url(${card.img})` }}
              ></div>

              {/* Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-white/10 backdrop-blur-md border-t border-blue-100">
                <h3 className="text-xl sm:text-2xl font-bold text-orange-400">
                  {card.title}
                </h3>

                <p className="mt-1 text-gray-800 text-sm leading-relaxed">
                  {card.desc}
                </p>

                <button
                  onClick={() => {
                    setSelectedOption(card.title);
                    setShowPopup(true);
                  }}
                  className="mt-3 sm:mt-4 bg-orange-400 hover:bg-orange-400 text-white px-4 py-2 rounded-full text-sm sm:text-base shadow-md transition-all"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===================== APPLY NOW POPUP ===================== */}
     {showPopup && (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-3">
    <div className="bg-white w-full max-w-lg rounded-2xl p-6 sm:p-8 shadow-2xl relative animate-fadeIn">

      {/* Close Button */}
      <button
        onClick={() => setShowPopup(false)}
        className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
      >
        ✕
      </button>

      {/* Popup Title */}
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-5 sm:mb-6 text-gray-800">
        Apply for <span className="text-orange-500">{selectedOption}</span>
      </h2>

      {/* FORM */}
      <form className="space-y-4 sm:space-y-5">

        {/* Name */}
        <div>
          <label className="text-sm font-semibold text-gray-700">Name*</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full p-2.5 sm:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-semibold text-gray-700">Email*</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2.5 sm:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="text-sm font-semibold text-gray-700">Phone Number*</label>
          <input
            type="text"
            placeholder="Enter your phone number"
            className="w-full p-2.5 sm:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* State + City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-semibold text-gray-700">State*</label>
            <select className="w-full p-2.5 sm:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400">
              <option>--- Select State ---</option>
              <option>Karnataka</option>
              <option>Maharashtra</option>
              <option>Tamil Nadu</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700">City*</label>
            <select className="w-full p-2.5 sm:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400">
              <option>--- Select City ---</option>
              <option>Mangalore</option>
              <option>Bangalore</option>
              <option>Udupi</option>
            </select>
          </div>
        </div>

        {/* Option */}
        <div>
          <label className="text-sm font-semibold text-gray-700">Select Option*</label>
          <select className="w-full p-2.5 sm:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400">
            <option>--- Select Option ---</option>
            <option>Standard Franchise</option>
            <option>Master Franchise</option>
            <option>B2B / Heavy Shipments</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="submit"
            className="w-full sm:flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold shadow-md"
          >
            Submit Application
          </button>

          <button
            type="button"
            onClick={() => setShowPopup(false)}
            className="w-full sm:flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold"
          >
            Cancel
          </button>
        </div>

      </form>
    </div>
  </div>
)}


    </div>
  );
}
