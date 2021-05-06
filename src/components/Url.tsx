import React, { useState } from 'react';
//import QRCode from 'qrcode-react'; //This declaration could have been used if qrcode-react is ES6 module feature compliant

const Url: React.FC = () => {
    const QRCode = require('qrcode.react'); //qrcode-react is not yet ES6 module feature compliant, hence this approach to declaration.

    const [url, setUrl] = useState('');
    


    const ShowUrl = (event: any) => {
        setUrl(event.target.value)
    }


    return (
        <div>

            <div className="field">
                <label className="label">Url</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Put in your url" onInput = {ShowUrl}/>
                </div>
            </div>


                <div>
                    <QRCode value = {url} size={256} fgColor="black"/> 
                </div>


            
        </div>
    )
}                                      
        
export default Url;

//Explanation of the codes

//The codes from line 27-29, shows the QR code for url. 
//So basically, when you run your codes, the QR code shows, 
//you are then required to input the url you want to scan and when it is scanned, 
//it takes you to the url you inputed on any browser.

