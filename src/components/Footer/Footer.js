import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (

        <div className="footer-container">
          <div className="text-center p-5">
                            <a className="text-info" href={`https://www.linkedin.com/in/themorsehed/`}> <FontAwesomeIcon icon={faLinkedinIn} size="3x" /></a> 
                            <a className="p-5 text-light" href={`https://github.com/morshedalam3`}><FontAwesomeIcon icon={faGithub} size="3x" /> </a>
                            <a href={`https://www.facebook.com/morshed.hassan`}><FontAwesomeIcon icon={faFacebook} size="3x" /> </a>
                        </div>
            <div className="text-center text-light">
                &copy; All right reserved {new Date().getYear()}
            </div>
        </div>
    );
};

export default Footer;