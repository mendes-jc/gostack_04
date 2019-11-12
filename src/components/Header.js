import React from 'react';

import facebookLogo from '../assets/facebook.png';
import profilePhoto from '../assets/profilehq.jpg'
import './Header.css';

export default () => (
    <div style={{flexDirection: "row"}}>
        <img src={facebookLogo} width='200'></img>
        <img src={profilePhoto}/>
    </div>
)