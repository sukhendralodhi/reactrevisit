import useWidth from "../custom-hooks/useWidth";

const GetWidth = () => {
    const width = useWidth();

    const getBackgroundColor = () => {
        if (width < 640) {
            return "from-red-500 to-orange-600";
        } else if (width < 768) {
            return "from-yellow-500 to-green-600";
        } else if (width < 1024) {
            return "from-green-500 to-blue-600";
        } else {
            return "from-blue-500 to-purple-600";
        }
    };

    return (
        <div className={`flex justify-center items-center h-screen flex-col bg-gradient-to-r ${getBackgroundColor()} transition-all duration-500`}>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300 hover:bg-white/20">
                <h1 className="text-white text-3xl font-bold mb-6 tracking-wider animate-fade-in hover:text-4xl transition-all duration-300">Window Width Monitor</h1>
                <div className="flex items-center gap-2 animate-bounce-slow">
                    <span className="text-white text-5xl font-bold transition-all duration-300 hover:text-6xl hover:text-yellow-300">{width}</span>
                    <span className="text-white/80 text-2xl transition-all duration-300 hover:text-3xl">pixels</span>
                </div>
            </div>
        </div>
    )
}

export default GetWidth;