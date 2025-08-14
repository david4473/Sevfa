"use client";

import { Menu, Search, ShoppingCart } from "lucide-react";

interface HeaderProps {
  onToggleMobileMenu: () => void;
}

export default function Header({ onToggleMobileMenu }: HeaderProps) {
  return (
    <nav className="absolute top-0 z-50 flex justify-around px-4 w-full md:px-40 py-4">
      {/* Desktop Left Navigation - Hidden on Mobile */}
      <div className="hidden md:flex items-center space-x-8 flex-1/2">
        <a
          href="#"
          className="text-white hover:text-white/80 transition-colors font-medium"
        >
          Home
        </a>
        <a
          href="#"
          className="text-white hover:text-white/80 transition-colors font-medium"
        >
          Shop
        </a>
        <a
          href="#"
          className="text-white hover:text-white/80 transition-colors font-medium"
        >
          About Us
        </a>
        <a
          href="#"
          className="text-white hover:text-white/80 transition-colors font-medium"
        >
          Contact Us
        </a>
      </div>

      {/* Center Brand */}
      <div className="flex-1/2">
        <h1 className="text-white text-xl md:text-2xl font-bold tracking-[0.3em]">
          SAVFA
        </h1>
      </div>

      {/* Right Icons */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="text-white hover:text-white/80 transition-colors cursor-pointer">
          <Search size={20} />
        </button>
        <button className="text-white hover:text-white/80 transition-colors relative cursor-pointer">
          <ShoppingCart size={20} />
          <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
            0
          </span>
        </button>
      </div>

      <button
        onClick={onToggleMobileMenu}
        className="md:hidden text-white hover:text-white/80 transition-colors ml-auto"
        aria-label="Toggle mobile menu"
      >
        <Menu size={24} />
      </button>

      <div className="hidden md:block w-16"></div>
    </nav>
  );
}
