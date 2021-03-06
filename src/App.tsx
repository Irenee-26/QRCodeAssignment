import React from 'react';
import './App.css';

import Url from './components/Url';
import Email from './components/Email';
import Sms from './components/Sms'

const App: React.FC = () => {
  return (
    <div className="Container">

      <div className="Column1">
        <Url/>
      </div>

      <div className="Column2">
        <Email />
      </div>

      <div className="Column3">
        <Sms/>
      </div>
    </div>
  );
}

export default App;