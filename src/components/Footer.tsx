import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Fresh Bites</h3>
            <p>Delicious, healthy food delivered to your doorstep.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/menu" className="hover:underline">Menu</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-300 transition duration-300"><Facebook /></a>
              <a href="#" className="hover:text-green-300 transition duration-300"><Instagram /></a>
              <a href="#" className="hover:text-green-300 transition duration-300"><Twitter /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Fresh Bites. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;