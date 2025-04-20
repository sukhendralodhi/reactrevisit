
import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Welcome Home</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Modern Home"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Modern Living</h2>
              <p className="text-gray-600">Discover contemporary living spaces designed for comfort.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
              alt="Luxury Home"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Luxury Spaces</h2>
              <p className="text-gray-600">Experience the epitome of luxury living.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09"
              alt="Family Home"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Family Homes</h2>
              <p className="text-gray-600">Perfect spaces for growing families.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
