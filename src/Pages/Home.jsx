import React, { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight,FiTruck, FiAirplay, FiAnchor, FiTrendingUp } from "react-icons/fi";

const Home = () => {
  const slides = [
    {
      image: "/a3.jpeg",
      title: "CROSS COUNTRY COVERAGE WITH RELIABLE TRUCKING",
      text:
        "We maintain relationships with thousands of vetted carriers across the country. Whether you need LTL, full truckload, or expedited service, we match you with the right provider and manage the details.",
      button: "Book Shipment"
    },
    {
      image: "/a1.jpeg",
      title: "WORLDWIDE SHIPPING WITH SPEED & SAFETY",
      text:
        "Delivering goods across continents with precision, reliability, and real-time tracking. Your cargo is handled with utmost care and professional logistics.",
      button: "Explore Services"
    },
    {
      image: "/a2.jpeg",
      title: "GLOBAL CONTAINER SHIPPING YOU CAN TRUST",
      text:
        "We manage container logistics from port to destination with seamless coordination, real-time tracking, and dedicated support.",
      button: "Learn More"
    }
  ];
  const cards = [
    {
      image: "/s1.jpeg",
      title: "Advanced Real Time Tracking System",
      desc: "Enter Description Here",
    },
    {
      image: "/s2.jpeg",
      title: "Fully Transparent Freight Pricing",
      desc: "Enter Description Here",
      number: "15",
      sub: "Years of experience",
    },
    {
      image: "/s3.jpeg",
      title: "Comprehensive Customs and Compliance",
      desc: "Enter Description Here",
    },
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [textAnim, setTextAnim] = useState(false);

  // refs for current index + timers so closures are stable
  const indexRef = useRef(index);
  const fadeTimer = useRef(null);
  const textTimer = useRef(null);
  const autoTimer = useRef(null);

  // keep ref in sync
  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  // changeSlide orchestrates fade and text animation with consistent timing
 // changeSlide orchestrates fade and text animation with consistent timing
const changeSlide = (newIndex) => {
  if (fadeTimer.current) clearTimeout(fadeTimer.current);
  if (textTimer.current) clearTimeout(textTimer.current);

  setFade(true);
  setTextAnim(false);

  // shorter fade (400ms)
  fadeTimer.current = setTimeout(() => {
    setIndex(newIndex);
    setFade(false);

    // shorter text delay (80ms)
    textTimer.current = setTimeout(() => {
      setTextAnim(true);
    }, 80);
  }, 400);
};

  const next = () => changeSlide((indexRef.current + 1) % slides.length);
  const prev = () =>
    changeSlide((indexRef.current - 1 + slides.length) % slides.length);

  // Auto slide (uses ref so no stale closures)
  useEffect(() => {
    // initial text animation on mount
    setTextAnim(true);

    autoTimer.current = setInterval(() => {
      next();
    }, 6000);

    return () => {
      if (autoTimer.current) clearInterval(autoTimer.current);
      if (fadeTimer.current) clearTimeout(fadeTimer.current);
      if (textTimer.current) clearTimeout(textTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once

  return (
    <>
    <div className="relative w-full h-screen overflow-hidden">

      {/* Background Image — fade + gentle zoom */}
      <div
        className={`absolute inset-0 transition-all duration-[500ms] ease-out will-change-transform ${
          fade ? "opacity-80 scale-103" : "opacity-100 scale-100"
        }`}
        aria-hidden
      >
        <img
          src={slides[index].image}
          alt="banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      {/* TEXT (fade-up staggered) */}
      <div className="absolute top-[30%] left-[12%] max-w-2xl text-white pointer-events-auto">
        {/* TITLE */}
        <h1
          className={`text-2xl md:text-5xl font-bold leading-tight mb-6 transform transition-all duration-[700ms] ${
            textAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {slides[index].title}
        </h1>

        {/* PARAGRAPH */}
        <p
          className={`text-lg mb-8 text-gray-200 transform transition-all duration-[800ms] delay-150 ${
            textAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {slides[index].text}
        </p>

        {/* BUTTON */}
        <button
          className={`bg-orange-500 px-7 py-3 rounded-full text-white font-semibold text-lg transform transition-all duration-[700ms] delay-300 ${
            textAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {slides[index].button}
        </button>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full text-white z-20"
        aria-label="previous slide"
      >
        <FiChevronLeft size={22} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full text-white z-20"
        aria-label="next slide"
      >
        <FiChevronRight size={22} />
      </button>
    </div>
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-10">

      {cards.map((item, index) => (
        <div
          key={index}
           className="
            group relative h-[420px] md:h-[500px] 
            rounded-3xl overflow-hidden 
            shadow-xl cursor-pointer
            transition-all duration-500 
            hover:shadow-2xl hover:-translate-y-2
          "
        >
          {/* Background Image */}
           <div className="absolute inset-0 overflow-hidden">
            <img
              src={item.image}
              alt="background"
              className="
                w-full h-full object-cover 
                transition-transform duration-700 
                group-hover:scale-110
              "
            />
          </div>

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

          {/* Text Content */}
          <div className="absolute bottom-6 left-6 right-6 text-white transition-all duration-500 
            group-hover:translate-y-[-6px]">

            {/* Number & Subtext (middle card only) */}
            {item.number && (
              <div className="mb-8">
                <h1 className="text-6xl font-bold leading-none">{item.number}</h1>
                <p className="text-lg font-medium mt-2">{item.sub}</p>
              </div>
            )}

            {/* Divider */}
            <div className="w-24 h-[2px] bg-white/60 mb-4 transition-all duration-500 group-hover:w-32"></div>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-semibold leading-tight mb-3  transition-all duration-500">
              {item.title}
            </h2>

            {/* Description */}
            <p className="text-sm opacity-90 transition-all duration-500">{item.desc}</p>
          </div>
        </div>
      ))}

    </div>
    <section className="w-full py-20 px-6 md:px-12 lg:px-24 text-center">
      
      {/* Small Header */}
      <p className="text-orange-500 font-semibold mb-3 text-lg">
        Our Services
      </p>

      {/* Main Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-16">
        Reliable Logistics Solutions<br />Built for Global Trade
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Service 1 */}
        <div className="flex flex-col items-center text-center">
          <FiTruck size={60} className="text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Express Road Transport</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Fast and secure trucking services across regional and national routes with guaranteed on-time delivery.
          </p>
        </div>

        {/* Service 2 */}
        <div className="flex flex-col items-center text-center">
          <FiAirplay size={60} className="text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold mb-3">International Air Cargo</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Rapid air freight solutions designed for time-critical shipments with global network coverage.
          </p>
        </div>

        {/* Service 3 */}
        <div className="flex flex-col items-center text-center">
          <FiAnchor size={60} className="text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Ocean Freight Management</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Cost-efficient container shipping services for bulk, FCL, and LCL cargo across major sea routes.
          </p>
        </div>

        {/* Service 4 */}
        <div className="flex flex-col items-center text-center">
          <FiTrendingUp size={60} className="text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Supply Chain Optimization</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Streamlined logistics planning, inventory management, and smarter routing for efficiency and savings.
          </p>
        </div>

      </div>
    </section>
    </>
    
  );
};

export default Home;