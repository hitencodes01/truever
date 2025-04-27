import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import { useState } from 'react';


function Header() {
  const [showSignUp, setShowSignUp] = useState(false); // State to toggle forms

  const handleToggleForm = () => {
    setShowSignUp(!showSignUp);  // Toggle the form (sign up <-> login)
  };
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/">Truever</Link>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-8 hidden md:flex">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"
            }
          >
            Home
          </NavLink>

          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"
            }
          >
            About
          </NavLink>

          <NavLink 
            to="/gallery" 
            className={({ isActive }) => 
              isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"
            }
          >
            Gallery
          </NavLink>

          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Login Button */}
        <NavLink 
            to="/login" 
            className={({ isActive }) => 
              isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"
            }
          >
            LogIn
          </NavLink>

    </div>
    </header>
  );
}

export default Header;
