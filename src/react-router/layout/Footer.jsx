
import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are dedicated to providing the best service to our customers.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <NavLink to="/" className={({isActive}) => `hover:text-orange-500 ${isActive ? 'text-orange-700' : 'text-white'}`}>Home</NavLink>
              </li>
              <li className="mb-2">
              <NavLink to="/about" className={({isActive}) => `hover:text-orange-500 ${isActive ? 'text-orange-700' : 'text-white'}`}>About</NavLink>
              </li>
              <li className="mb-2">
              <NavLink to="/contact" className={({isActive}) => `hover:text-orange-500 ${isActive ? 'text-orange-700' : 'text-white'}`}>Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p className="text-gray-400">
              Email: info@example.com<br />
              Phone: (123) 456-7890<br />
              Address: 123 Street, City, Country
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
