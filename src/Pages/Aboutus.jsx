import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

// React Icons
import {
  FiEdit,
  FiSettings,
  FiGlobe,
  FiZap,
  FiTrendingUp,
  FiPhoneCall,
} from "react-icons/fi";

import { FaGraduationCap, FaHandshake, FaRocket, FaRupeeSign } from "react-icons/fa";

export default function Aboutus() {
  const navigate = useNavigate();

  // Banner slider images
  const banners = [
    {
      img: "/1.jpeg",
      title: "Connecting India With Smarter Logistics",
      desc: "Fast, reliable and scalable logistics solutions for every business.",
    },
    {
      img: "/2.jpg",
      title: "Empowering Franchise Entrepreneurs",
      desc: "Build a profitable logistics business with expert support.",
    },
    {
      img: "/3.jpeg",
      title: "Driven By Innovation",
      desc: "Experience next-level technology for seamless operations.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  // Auto slide
  useEffect(() => {
    setFade(true);
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % banners.length);
        setFade(true);
      }, 350);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const handleApply = (option) => {
    navigate("/franchise-details", { state: { selected: option } });
  };

  // HOW IT WORKS - Data with Icons
  const steps = [
    { step: "Apply Online", desc: "Submit a simple application in minutes.", icon: <FiEdit /> },
    { step: "Approval & Training", desc: "Get trained by our expert team.", icon: <FaGraduationCap /> },
    { step: "Setup & Launch", desc: "Launch your center with full support.", icon: <FaRocket /> },
    { step: "Start Earning", desc: "Begin daily operations & earn consistently.", icon: <FaRupeeSign /> },
  ];

  // WHY CHOOSE US - Data with Icons
  const chooseUs = [
    { title: "Pan-India Network", icon: <FiGlobe /> },
    { title: "Smart Technology", icon: <FiSettings /> },
    { title: "Franchise Support", icon: <FaHandshake /> },
    { title: "Fast Turnaround", icon: <FiZap /> },
    { title: "Scalable Model", icon: <FiTrendingUp /> },
    { title: "24/7 Support", icon: <FiPhoneCall /> },
  ];

  return (
    <div className="w-full bg-white font-poppins">

      {/* =================== HERO SLIDER =================== */}
      <div className="relative h-[280px] sm:h-[380px] md:h-[520px] w-full overflow-hidden shadow-lg">
        <img
          src={banners[index].img}
          alt="banner"
          className={`w-full h-full object-cover transition-all duration-[1200ms]
            ${fade ? "opacity-100 scale-110" : "opacity-0 scale-100"}`}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-orange-400 drop-shadow-xl leading-tight">
            {banners[index].title}
          </h1>
          <p className="mt-2 sm:mt-4 text-gray-200 text-sm sm:text-base md:text-lg max-w-xl md:max-w-2xl leading-relaxed">
            {banners[index].desc}
          </p>
        </div>
      </div>

      {/* ==================== HOW IT WORKS ==================== */}
      <div className="py-14 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-orange-50">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-10 sm:mb-16">
          How It Works
        </h2>

        <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12">
          {steps.map((item, i) => (
            <div key={i} className="flex gap-4 sm:gap-6 items-start">
              
              {/* Icon + Line */}
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center bg-orange-500 text-white rounded-full text-2xl shadow-lg">
                  {item.icon}
                </div>
                {i !== steps.length - 1 && (
                  <div className="w-[3px] h-10 sm:h-16 bg-orange-300 mt-2 rounded-full" />
                )}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{item.step}</h3>
                <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ==================== WHY CHOOSE US ==================== */}
      <div className="py-14 sm:py-20 px-4 sm:px-6 bg-white">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-12">
          Why Choose Valmo Logistics?
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {chooseUs.map((box, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 bg-orange-50 border border-orange-200 rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-orange-500">
                {box.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{box.title}</h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base leading-relaxed">
                Reliable operations powered by advanced logistics technology.
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-12">
          {[
            ["120+", "Operational Cities"],
            ["15K+", "Active Partners"],
            ["98%", "On-Time Delivery"],
            ["24/7", "Support"],
          ].map(([value, label], i) => (
            <div key={i} className="text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500">{value}</h3>
              <p className="text-gray-600 text-xs sm:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ==================== FRANCHISE OPTIONS ==================== */}
      <div className="py-14 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-orange-50">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-12">
          Franchise Opportunities
        </h2>

        <div className="flex flex-wrap justify-center gap-8 sm:gap-10">
          {[
            {
              title: "Booking Center",
              points: ["Daily Parcels", "Small Setup", "Full Support"],
              applied: "Booking Center",
              btn: "Apply for Booking Center",
            },
            {
              title: "Master Franchise",
              points: ["Regional Control", "High Earnings", "Training Included"],
              applied: "Master Franchise",
              btn: "Apply for Master Franchise",
            },
            {
              title: "B2B / Heavy Shipments",
              points: ["Bulk Shipments", "Corporate Clients", "High Growth"],
              applied: "B2B / Heavy Shipments",
              btn: "Apply for B2B / Heavy Shipments",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="w-full sm:w-72 md:w-80 bg-white shadow-lg p-6 sm:p-8 rounded-2xl border hover:shadow-2xl hover:-translate-y-1 transition-transform"
            >
              <h3 className="font-bold text-xl text-orange-500">{card.title}</h3>

              <ul className="text-sm sm:text-base text-gray-600 mt-4 space-y-2">
                {card.points.map((pt, idx) => (
                  <li key={idx}>• {pt}</li>
                ))}
              </ul>

              <button
                onClick={() => handleApply(card.applied)}
                className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 sm:py-3 rounded-xl text-sm font-medium transition"
              >
                {card.btn}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
