import { useState } from "react";

const colors = ['red', 'green', 'blue', 'purple', 'orange', 'pink', 'yellow', 'cyan', 'magenta', 'lime'];

const Project1 = () => {
    const [bgColor, setBgColor] = useState('');


    const handleColorChange = (color) => {
        setBgColor(color);
    }

    return (
        <div style={
            {
                backgroundColor: bgColor,
                height: '100vh',
            }
        }>
           
        {
            colors.map((color, index) => {
                return <button key={index} onClick={() => handleColorChange(color)} style={{backgroundColor: color, marginLeft: '10px'}}>{color}</button>
            })
        }
        </div>
    )
}

export default Project1;