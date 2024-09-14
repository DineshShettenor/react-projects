import React, { useState } from 'react'
import './styles.css';
import QRCode from 'react-qr-code';

export const QRCodeGenerator = () => {
    const [qrCode, setQrCode] = useState('')
    const [userInput, setUserInput] = useState('')

    const hndleQrCodeGenerate = () => {
        setQrCode(userInput);
        setUserInput('');
    }

  return (
    <div>
        <h1>QR Code Generator</h1>
        <div>
            <input type='text' placeholder='Enter Your Name' name='qr-code' value={userInput} onChange={(e) => setUserInput(e.target.value)}></input>
            <button onClick={hndleQrCodeGenerate} disabled={userInput && userInput.trim() !== '' ? false : true}>Generate</button>
        </div>
        <div>
            <QRCode 
            id='qr-code-value'
            value={qrCode}
            size={400}
            bgColor='#fff'
            />
        </div>
    </div>
  )
}
