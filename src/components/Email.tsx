import React, { useState } from 'react';

const Email: React.FC = () => {
    const QRCode = require('qrcode.react');

    const [mail, setMail] = useState('');
    const [subject, setSubject] = useState('');
    const [bodyofthemail, setBodyofthemail] = useState('');


    const ShowMail = (event: any) => {
        setMail(event.target.value)
    }

    const ShowSubject = (event: any) => {
        setSubject(event.target.value)
    }

    const ShowBodyofthemail = (event: any) => {
        setBodyofthemail(event.target.value)
    }

    return (
        <div>
            <div className="field">
                <label className="label">Mail</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Input email address" onInput = {ShowMail}/>
                </div>
            </div>
            
            <div className="field">
                <label className="label">Subject</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Input subject" onInput = {ShowSubject}/>
                </div>
            </div>

            <div className="field">
                <label className="label">Bodyofthemail</label>
                <div className="control">
                    <textarea className="textarea"  placeholder="Input the contents of your mail" onInput = {ShowBodyofthemail}></textarea>
                </div>
            </div>

                <div>
                    <QRCode value= {`mailto:${mail}?subject=${subject}&body=${bodyofthemail}.`} size={256} />
                </div>

            
        </div>
    )
}
                      
export default Email;     

//Explanation of the codes

//The codes from line 46-48, shows the QR code for mail. So basically, when you run your codes, the QR code shows. 
//You are then required to input what you want to write in your mail. i.e the subject, the body and 
//the email address you are sending the mail to. Afterwards, when it is scanned, it takes you to your mail 
//and then you will see everything inputed.

