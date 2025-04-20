
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap">Logo</span>
          </Link>
          <div className="flex items-center lg:order-2">
            <NavLink
              to="/login"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 lg:px-5 lg:py-2.5 mr-2"
            >
              Log in
            </NavLink>
            <Link
              to="/get-started"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 lg:px-5 lg:py-2.5"
            >
              Get started
            </Link>
          </div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink 
                  to="/"
                  className={({isActive}) => `block py-2 pr-4 pl-3 text-gray-700 hover:text-orange-700 lg:p-0 ${isActive ? 'text-orange-700' : ''}`}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about"
                  className={({isActive}) => `block py-2 pr-4 pl-3 text-gray-700 hover:text-orange-700 lg:p-0 ${isActive ? 'text-orange-700' : ''}`}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact"
                  className={({isActive}) => `block py-2 pr-4 pl-3 text-gray-700 hover:text-orange-700 lg:p-0 ${isActive ? 'text-orange-700' : ''}`}
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/github"
                  className={({isActive}) => `block py-2 pr-4 pl-3 text-gray-700 hover:text-orange-700 lg:p-0 ${isActive ? 'text-orange-700' : ''}`}
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
