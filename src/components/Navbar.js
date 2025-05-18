'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // icon package (lucide-react)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-transparent absolute shadow-sm z-20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-red-600 z-50 relative">
          OTA<span className="text-gray-900">Wall</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link href="#" className="cursor-pointer text-white font-medium hover:text-gray-900 hover:underline">Product</Link>
          <Link href="#" className="cursor-pointer text-white font-medium hover:text-gray-900">About Us</Link>
          <Link href="#" className="cursor-pointer text-white font-medium hover:text-gray-900">Pricing</Link>
          <span className="h-6 w-px bg-gray-300 mx-2"></span>
          <Link href="#" className="cursor-pointer px-5 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-md transition">
            Get in Touch
          </Link>
          <Link href="#" className="cursor-pointer bg-white px-5 py-2 border border-gray-300 text-gray-800 rounded-md hover:bg-gray-100 transition">
            Sign In
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4 z-50">
          <div className="flex flex-col space-y-4">
            <Link href="#" className="text-gray-700 font-medium hover:text-gray-900">Product</Link>
            <Link href="#" className="text-gray-700 font-medium hover:text-gray-900">About Us</Link>
            <Link href="#" className="text-gray-700 font-medium hover:text-gray-900">Pricing</Link>
            <Link href="#" className="px-5 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
              Get in Touch
            </Link>
            <Link href="#" className="px-5 py-2 border border-gray-300 text-gray-800 rounded-md hover:bg-gray-100 transition">
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
