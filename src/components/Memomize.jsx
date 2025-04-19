import { useCallback, useEffect, useRef, useState } from "react";

const Memomize = () => {
    // variables to store the password length, number allowed, char allowed and the password itself
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const passwordRef = useRef(null);

    const hanldeGeneratePassword = useCallback(() => {
        let pass = "";
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if (numberAllowed) chars += "0123456789";
        if (charAllowed) chars += "!@#$%^&*()_+[]{}|;:,.<>?";

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * chars.length + 1);
            pass += chars.charAt(char);
        }

        setPassword(pass);

    }, [length, numberAllowed, charAllowed, setPassword]);

    const handleCopyPassword = useCallback(() => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 99);
        window.navigator.clipboard.writeText(password);
        setMessage("Password copied to clipboard!");
        setTimeout(() => {
            setMessage("");
        }, 2000);
    }, [password]);


    useEffect(() => {
        hanldeGeneratePassword();
    }, [length, numberAllowed, charAllowed, setPassword]);

    return (
        <div className="container flex flex-col items-center justify-center min-h-screen w-full ">
            <div className="bg-blue-50 p-8 rounded-xl shadow-lg w-full max-w-xl">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Password Generator</h2>
                <div className="flex mb-4">
                    <input
                        type="text"
                        value={password}
                        ref={passwordRef}
                        readOnly
                        className="flex-1 border border-gray-300 rounded-l-lg px-4 py-3 text-lg font-mono bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <button
                        onClick={handleCopyPassword}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-lg transition duration-200 ease-in-out font-semibold">
                        Copy
                    </button>
                </div>
                    <p className="pt-2 pb-5">{message}</p>
                <div className="space-y-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="length" className="text-gray-700 font-medium">Password Length: {length}</label>
                        <input
                            type="range"
                            id="length"
                            min="4"
                            max="1000"
                            value={length}
                            onChange={(e) => setLength(e.target.value)}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                        />
                    </div>
                    <div className="flex items-center space-x-3">
                        <input
                            type="checkbox"
                            id="numberAllowed"
                            defaultChecked={numberAllowed}
                            onChange={() => setNumberAllowed((prev) => !prev)}
                            className="w-5 h-5 accent-blue-600 rounded cursor-pointer"
                        />
                        <label htmlFor="numberAllowed" className="text-gray-700 font-medium cursor-pointer">Include Numbers</label>
                    </div>
                    <div className="flex items-center space-x-3">
                        <input
                            type="checkbox"
                            id="charAllowed"
                            defaultChecked={charAllowed}
                            onChange={() => setCharAllowed((prev) => !prev)}
                            className="w-5 h-5 accent-blue-600 rounded cursor-pointer"
                        />
                        <label htmlFor="charAllowed" className="text-gray-700 font-medium cursor-pointer">Include Special Characters</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Memomize;