import React, { useEffect, useState } from 'react'

export const RandomColor = () => {
    const [color, setColor] = useState('#000000');
    const [typeOfColor, setTypeOfColor] = useState('hex');

    const randomColorUtility = (length) =>{
        return Math.floor(Math.random() * length)
    } 

    const handleCreateRandomColor = (typeOfColor) => {
        if(typeOfColor === 'hex'){
            const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
            let hexLength = hex.length;
            let hexColor = '#';
            for (let i = 0; i < 6; i++) {
                hexColor += hex[randomColorUtility(hexLength)];
            }
            setColor(hexColor);
            console.log(hexColor);
        }else{
            const r = randomColorUtility(255);
            const g = randomColorUtility(255);
            const b = randomColorUtility(255);
            let rgbColor = `rgb(${r}, ${g}, ${b})`
            console.log(rgbColor);
            setColor(rgbColor)
        }

    }

    useEffect(() => {
      handleCreateRandomColor(typeOfColor);
    }, [typeOfColor])
    

  return (
    <div style={{
        width:'100vw',
        height:'100vh',
        background: color
    }}>
        <button onClick={() => setTypeOfColor('hex')}>Create Hex Color</button>
        <button onClick={() => setTypeOfColor('rgb')}>Create rgb Color</button>
        <button onClick={() => handleCreateRandomColor(typeOfColor)}>Generate random Color</button>
        <div style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            color:'#fff',
            fontSize:'32px',
            marginTop:'50px'
        }}>
            <h1>{typeOfColor === 'hex' ? "Hex" : "RGB"}</h1>
            <h2>{color}</h2>
        </div>
    </div>
  )
}
