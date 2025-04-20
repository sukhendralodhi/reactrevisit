const Blog = () => {
    return (
        <div className="container mx-auto p-4 h-screen">
            <h1 className="text-3xl font-bold mb-6">Latest Blog</h1>
            <div className="grid grid-cols-1 gap-6 overflow-y-auto h-50x]">
                <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-semibold mb-2">New Feature Release</h2>
                    <p className="text-gray-600 mb-4">We've just launched our latest feature update with improved performance and user experience.</p>
                    <span className="text-sm text-gray-500">Posted on: June 15, 2023</span>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-semibold mb-2">Company Milestone</h2>
                    <p className="text-gray-600 mb-4">Celebrating our 5th year anniversary with special announcements and events.</p>
                    <span className="text-sm text-gray-500">Posted on: June 10, 2023</span>
                </div>                
                <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-semibold mb-2">Community Update</h2>
                    <p className="text-gray-600 mb-4">Join us in our growing community and participate in upcoming events.</p>
                    <span className="text-sm text-gray-500">Posted on: June 5, 2023</span>
                </div>
            </div>
        </div>
    )
}

export default Blog;