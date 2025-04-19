import { useState } from "react";

const Project2 = () => {
    const alphabatsGroup = 'abcdefghijklmnopqrstuvwxyz';
    const numbersGroup = '0123456789';

    const [password, setPassword] = useState('');
    const [numbers, setNumbers] = useState(false);
    const [allAlphabats, setAllAlphabats] = useState(false);
    const [upperCase, setUpperCase] = useState(false);
    const [message, setMessage] = useState('');
    

    const handlePasswordGenerater = (e) => {
        let chars = alphabatsGroup;
        
        if(numbers) {
            chars += numbersGroup;
        }
        if(upperCase) {
            chars += alphabatsGroup.toUpperCase();
        }

        let generatedPassword = '';
        let passwordLength = e.target.value;

        for(let i = 0; i < passwordLength; i++) {
            let randomNumber = Math.floor(Math.random() * chars.length);
            generatedPassword += chars[randomNumber];
        }
        
        setPassword(generatedPassword);
    }

    const handleCopy = () => {
        if(password.length === 0) {
            setMessage('Please generate a password first!');
            setTimeout(() => {
                setMessage('');
            }, 2000);
            return;
        }
        navigator.clipboard.writeText(password);
        setMessage('Password copied to clipboard!');
        setTimeout(() => {
            setMessage('');
        }, 2000);
    }

    return (
        <div>
            <h1>Project 2</h1>
            <h2>{message}</h2>
            <input value={password} type="text" readOnly />
            <button onClick={handleCopy}>Copy</button>
            <input onChange={(e) => handlePasswordGenerater(e)} type="range" min="4" max="20" />
            <div>
                <label htmlFor="number">Numbers</label>
                <input checked={numbers} onChange={() => setNumbers(!numbers)} type="checkbox" id="number" />
            </div>
            <div>
                <label htmlFor="alphabats">Alphabats</label>
                <input type="checkbox" checked={allAlphabats} onChange={() => setAllAlphabats(!allAlphabats)} id="alphabats"/>
            </div>
            <div>
                <label htmlFor="upperCase">Upper Case</label>
                <input type="checkbox" checked={upperCase} onChange={() => setUpperCase(!upperCase)} id="upperCase" />
            </div>
        </div>
    )
}

export default Project2;