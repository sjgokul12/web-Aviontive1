"use client";

import { motion } from "framer-motion";

export function ServicesSection() {
  return (
    <section className="py-16">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
          Transform your Business with our Service
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-12">
          We have a team of experts who are ready to help you with your business. Take a look at the two major services we offer which could make your business grow digitally :)
        </p>
        <div className="w-full h-1 bg-black rounded-full max-w-xl mx-auto"></div>
      </motion.div>
    </section>
  );
}
