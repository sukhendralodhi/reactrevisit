import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-center text-indigo-900 mb-12">About Us</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-8">
                    
                    {/* Sidebar */}
                    <div className="col-span-1">
                        <div className="w-64 bg-white rounded-xl shadow-xl p-6 h-fit backdrop-blur-lg bg-opacity-90 transform hover:scale-105 transition-transform duration-300">
                            <nav className="space-y-4 flex gap-5">
                                <NavLink
                                    to="blog"
                                    className={({ isActive }) =>
                                        `block font-medium text-lg transition-colors duration-200 ${isActive ? 'text-indigo-600 font-semibold' : 'text-gray-600 hover:text-indigo-500'}`
                                    }
                                >
                                    Blogs
                                </NavLink>
                                <NavLink
                                    to="newsletter"
                                    className={({ isActive }) =>
                                        `block font-medium text-lg transition-colors duration-200 ${isActive ? 'text-indigo-600 font-semibold' : 'text-gray-600 hover:text-indigo-500'}`
                                    }
                                >
                                    Newsletter
                                </NavLink>
                            </nav>
                        </div>
                        <div className="bg-white rounded-xl shadow-xl p-6 mt-6 backdrop-blur-lg bg-opacity-90">
                            <Outlet />
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="col-span-2 space-y-12">
                        {/* Main About Content */}
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300 backdrop-blur-lg bg-opacity-90">
                                <div className="text-indigo-600 text-4xl mb-4">🎯</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We strive to deliver exceptional value to our customers through innovative solutions and outstanding service.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300 backdrop-blur-lg bg-opacity-90">
                                <div className="text-indigo-600 text-4xl mb-4">👁️</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    To become the leading provider of cutting-edge solutions in our industry while maintaining the highest standards of quality.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300 backdrop-blur-lg bg-opacity-90">
                                <div className="text-indigo-600 text-4xl mb-4">⭐</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Integrity, innovation, customer focus, and continuous improvement form the foundation of everything we do.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-xl p-10 backdrop-blur-lg bg-opacity-90 transform hover:shadow-2xl transition-all duration-300">
                            <h3 className="text-3xl font-bold text-indigo-900 mb-6">Our Story</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Founded with a passion for excellence, our company has grown from humble beginnings to become a trusted name in the industry. We believe in building lasting relationships with our clients and delivering solutions that make a real difference.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About