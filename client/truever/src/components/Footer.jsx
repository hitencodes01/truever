import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand Info */}
        <div>
          <Link to="/" className="text-2xl font-bold text-white">
            YourLogo
          </Link>
          <p className="mt-4 text-gray-400 text-sm">
            Empowering your digital journey with innovation and excellence.
          </p>
        </div>

        {/* Sitemap */}
        <div>
          <h4 className="text-white text-lg mb-4 font-semibold">Site Map</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 transition">About</Link></li>
            <li><Link to="/gallery" className="hover:text-blue-400 transition">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            <li><Link to="/login" className="hover:text-blue-400 transition">Login</Link></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="text-white text-lg mb-4 font-semibold">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Terms of Service</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-white text-lg mb-4 font-semibold">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400 transition">Facebook</a>
            <a href="#" className="hover:text-blue-400 transition">Twitter</a>
            <a href="#" className="hover:text-blue-400 transition">Instagram</a>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} YourWebsiteName. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
