import React from 'react';
import './index.css'; // Make sure Tailwind & your utilities are imported

function App() {
  return (
    <div className="relative min-h-screen hero-background flex items-center justify-center overflow-hidden">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10" />

      {/* Hero Content */}
      <div className="relative z-20 text-white text-center px-4 animate-fadeIn">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Welcome to Aviontive Web</h1>
        <p className="text-lg max-w-xl mx-auto drop-shadow">
          Your one-stop solution for stylish and modern web experiences. Let’s build something amazing together.
        </p>
        <div className="mt-6">
          <button className="cta-button primary-cta">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default App;
