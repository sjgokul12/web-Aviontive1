"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { LogoSlider } from "@/components/logo-slider";
import { ServicesSection } from "@/components/services-section";
import { SocialSidebar } from "@/components/social-sidebar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative">
      <Navbar />
      <div className="container mx-auto px-4 relative">
        <SocialSidebar />
        <HeroSection />
        {/* Insert logo slider directly after Hero section */}
        <LogoSlider />
        <ServicesSection />
      </div>
    </main>
  );
}
