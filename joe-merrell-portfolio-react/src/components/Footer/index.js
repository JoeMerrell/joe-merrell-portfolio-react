import React from 'react';
import instagram from '../../assets/images/instagram.png';
import linkedin from '../../assets/images/linkedin.png';
import selfie from '../../assets/images/selfie.png';

function Footer() {
return(
    <div className='mt-4 mb-5 container-fluid'>
        <a href="http://cargocollective.com/joemerrell/" target="_blank">
        <img src={selfie} className='image-space'  width="40"></img>
        </a>
        <a href="https://www.instagram.com/joe.merrell/" target="_blank">
        <img src={instagram} className='image-space' width="40"></img>
        </a>
        <a href="https://www.linkedin.com/in/joe-merrell-590101209/" target="_blank">
        <img src={linkedin} width="40"></img>
        </a>
    </div>
);

}

export default Footer;