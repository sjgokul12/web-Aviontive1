"use client";

import { Button } from "./ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="pt-40 pb-20 md:py-48 flex flex-col items-center justify-center text-center">
      <motion.h1 
        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Scale up your digital
        <br /> journey with us !
      </motion.h1>

      <motion.p 
        className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        We have a team of experts who are ready to help you with your business. Take a look at the two major services we offer which could make your business grow digitally :)
      </motion.p>

      <motion.div 
        className="flex flex-col sm:flex-row gap-4 mt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-12 py-7 text-xl font-semibold">
          Get Started
        </Button>
        <Button variant="outline" className="rounded-full px-12 py-7 text-xl font-semibold">
          Know more
        </Button>
      </motion.div>
    </section>
  );
}
