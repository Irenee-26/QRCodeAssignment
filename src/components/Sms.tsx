import React, { useState } from 'react';

const Sms: React.FC =() => {
    const QRCode = require('qrcode.react');

    const [number, setNumber] = useState('');
    const [message, setMessage]= useState('');

    const ShowNumber = (event: any) => {
        setNumber(event.target.value)
    }

    const ShowMessage = (event: any) => {
        setMessage(event.target.value)
    }

    return(
        <div>
             <div className="field">
                <label className="label">Number</label>
                <div className="control">
                    <input className="input" type="text" placeholder="input digits" onInput = {ShowNumber}/>
                </div>
            </div>

            <div className="field">
                <label className="label">Message</label>
                <div className="control">
                    <input className="input" type="text" placeholder="write a message" onInput = {ShowMessage}/>
                </div>
            </div>

            <div>
                 <QRCode value= {`SMSto:${number}:${message}`} size={256}/>
            </div>

        </div>
    )
}

//The codes from line 33-37, shows the QR codes for SMS. 
//So basically, when you run your codes, you will be required to put 
//in your number and the message you want to send. 
//Afterwards, your QR code will be generated and when you scan youir code, it will 
//take you to your sms showing the number you want to send your message to and the message you trying to send.

export default Sms;