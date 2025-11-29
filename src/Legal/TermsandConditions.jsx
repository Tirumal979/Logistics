import React from "react";
import "../App.css";

export default function TermsandConditions() {

  const termsData = [
    {
      number: 1,
      title: "Services Overview",
      desc: "Our logistics company provides shipping, transportation, and delivery services. All shipments must be properly packaged, labeled, and documented.",
      image: "/8.jpg",
    },
    {
      number: 2,
      title: "User Responsibilities",
      desc: "User must provide accurate shipment information, follow packaging guidelines, ensure legal compliance, and cooperate during delivery.",
      image: "/9.webp",
    },
    {
      number: 3,
      title: "Payment & COD Policy",
      desc: "All payments must be settled before dispatch unless COD is selected. COD shipments carry an additional handling fee.",
      image: "/10.webp",
    },
    {
      number: 4,
      title: "Liability & Limitations",
      desc: "We are not liable for damages caused by improper packing, natural disasters, or prohibited items. Compensation limits apply.",
      image: "/11.png",
    },
    {
      number: 5,
      title: "Privacy & Data Usage",
      desc: "Customer data is used strictly for service purposes. We do not sell or misuse customer information.",
      image: "/12.jpg",
    },
    {
      number: 6,
      title: "Termination of Services",
      desc: "We may terminate services for fraud, abuse, or compliance violations without prior notice.",
      image: "/13.jpg",
    },
    {
      number: 7,
      title: "Governing Law",
      desc: "All disputes will be governed by Indian law and resolved in Karnataka jurisdiction.",
      image: "/14.webp",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-10">

      {/* ================= HERO BANNER ================= */}
      <div
        className="h-[360px] bg-cover bg-center relative"
        style={{ backgroundImage: "url('/1.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-3xl md:text-4xl font-extrabold tracking-wide">
            Terms <span className="text-orange-400">& Conditions</span>
          </h1>
          <p className="text-gray-200 mt-2 text-sm md:text-base max-w-xl">
            Clear and transparent guidelines for using our logistics services.
          </p>
        </div>
      </div>

      {/* ================= TERMS CONTENT ================= */}
      <div className="max-w-5xl mx-auto px-6 md:px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-400 mb-10 text-center">
          Our Service Policies
        </h2>

        <div className="space-y-8">
          {termsData.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition border-l-4 border-orange-400 md:flex gap-6"
            >
              {/* Number Badge */}
              <div className="flex-shrink-0 flex items-start">
                <div className="bg-orange-400 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow">
                  {item.number}
                </div>
              </div>

              {/* Text Section */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-orange-400">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:w-40 h-28 object-cover rounded-lg shadow-md mt-4 md:mt-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
