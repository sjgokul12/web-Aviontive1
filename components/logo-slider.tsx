"use client";

import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

// Logos stored in the public folder
const logos = [
  { name: "Google", image: "/google.png" },
  { name: "TEDx", image: "/tedx.png" },
  { name: "StartupIndia", image: "/startupindia.png" },
  { name: "Red Bull", image: "/bull.png" },
  { name: "Ems Xperience India", image: "/ems xperience india.png" },
  { name: "Kurukshetra", image: "/kurukshetra.png" },
  { name: "Abstract", image: "/abstarct.png" },
];

export function LogoSlider() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <motion.div
        className="mx-auto max-w-7xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={true}
          className="space-x-24"
        >
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 px-6">
              <img
                src={logo.image}
                alt={`${logo.name} logo`}
                className="h-32 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}
