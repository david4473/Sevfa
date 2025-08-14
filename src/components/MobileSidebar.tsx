"use client";

import { X, Search, ShoppingCart } from "lucide-react";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  return (
    <div
      className={`fixed inset-0 z-40 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out md:hidden`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>

      <div className="absolute right-0 w-80 max-w-sm bg-white h-full shadow-xl">
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-bold tracking-[0.2em] text-gray-900">
            PATTEIA
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Close mobile menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 border-b">
          <div className="flex items-center space-x-4">
            <button className="flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg">
              <Search size={20} className="text-gray-600" />
            </button>
            <button className="flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg relative">
              <ShoppingCart size={20} className="text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <div className="p-6">
          <nav className="space-y-6">
            <div>
              <h3 className="font-serif text-lg italic mb-4 text-gray-900">
                Menu
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors block py-2"
                    onClick={onClose}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors block py-2"
                    onClick={onClose}
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors block py-2"
                    onClick={onClose}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors block py-2"
                    onClick={onClose}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-lg italic mb-4 text-gray-900">
                Categories
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors block py-2"
                    onClick={onClose}
                  >
                    Casual
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors block py-2"
                    onClick={onClose}
                  >
                    Work & Office
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors block py-2"
                    onClick={onClose}
                  >
                    Activewear
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors block py-2"
                    onClick={onClose}
                  >
                    Evening Dresses
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
