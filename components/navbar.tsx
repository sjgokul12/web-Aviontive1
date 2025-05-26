"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-2 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div
        className={cn(
          "pointer-events-auto w-full max-w-6xl mx-auto flex items-center justify-between px-6 py-3 transition-all duration-300 rounded-full shadow-sm bg-white border border-gray-200",
          isScrolled ? "shadow-md" : ""
        )}
      >
        {/* Logo with Aviontive styled (Avion bold, tive normal, no space) */}
        <Link href="/" className="flex items-center">
          <span className="flex items-center text-xl leading-none text-black">
            <Image
              src="/logo.png"
              alt="Aviontive Logo"
              width={58}
              height={58}
              className="w-14 h-14 object-contain"
              priority
            />
            <span className="text-xl text-black leading-none">
              <span className="font-bold">Avion</span>
              <span className="font-normal">tive</span>
            </span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-gray-600 hover:text-black transition-colors text-base"
          >
            Home
          </Link>
          <Link
            href="/service"
            className="text-gray-600 hover:text-black transition-colors text-base"
          >
            Service
          </Link>
          <Link
            href="/products"
            className="text-gray-600 hover:text-black transition-colors text-base"
          >
            Products
          </Link>
          <button className="text-gray-600 hover:text-black transition-colors text-base">
            More
          </button>

          {/* Contact Button */}
          <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-5 py-2 text-base">
            Contact Us
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-black"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}
