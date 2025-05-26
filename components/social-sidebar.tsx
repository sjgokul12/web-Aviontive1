"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Link2 } from "lucide-react";

export function SocialSidebar() {
  return (
    <motion.div
      className="fixed left-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-8 z-40 hidden md:flex"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <Facebook className="w-6 h-6 text-black" />
      </Link>
      <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <Twitter className="w-6 h-6 text-black" />
      </Link>
      <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <Linkedin className="w-6 h-6 text-black" />
      </Link>
      <Link href="https://link.com" target="_blank" rel="noopener noreferrer">
        <Link2 className="w-6 h-6 text-black" />
      </Link>
    </motion.div>
  );
}
