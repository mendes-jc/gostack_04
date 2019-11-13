import React from 'react';

import facebookLogo from '../assets/facebook.png';
import profilePhoto from '../assets/julio.jpg'
import './Header.css';

export default () => (
    <div id="container">
        <div><img id="facebookLogo" src={facebookLogo}/></div>
        <div id="myProfile">
            <p>Meu Perfil</p>
            <img src={profilePhoto} id="profilePhoto"/>
        </div>
    </div>
)