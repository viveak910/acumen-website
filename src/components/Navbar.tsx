"use client"

import React from "react"
import { Link, useLocation } from "react-router-dom" // Use React Router

export const Navbar: React.FC = () => {
  const location = useLocation() // Get the current path

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-[#00ff00] text-2xl font-bold tracking-wider">
          ACUMEN IT 2025
        </Link>

        <div className="flex space-x-6">
          <Link
            to="/"
            className={`text-white hover:text-[#00ff00] transition-colors ${
              location.pathname === "/" ? "border-b-2 border-[#00ff00]" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/events"
            className={`text-white hover:text-[#00ff00] transition-colors ${
              location.pathname === "/events" ? "border-b-2 border-[#00ff00]" : ""
            }`}
          >
            Events
          </Link>
          <Link
            to="/register"
            className="bg-[#00ff00] text-black px-4 py-1 rounded-md font-medium hover:bg-opacity-80 transition-colors"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  )
}


