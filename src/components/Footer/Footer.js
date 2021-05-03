import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (

        <div className="footer bg-light pt-5">
             <a className="btn-btn-outline mx-1 d-flex justify-content-center" href="#About">Know more</a>
            <div className="container">
            <div className="row">
                    <div className="col-md-4">
                        <h5 className="text-light pb-3">Explore</h5>
                        <a href="#header">Animation</a><br />
                        <a href="##">design</a><br />
                        <a href="##">BarChart</a><br />
                        <a href="##">Hexagon</a><br />
                        <a href="##">Blog</a><br />
                        <a href="##">Email Implement</a>

                    </div>
                    <div className="col-md-4">
                        <h5 className="text-light pb-3">Category</h5>

                        <a href="##">Html5</a><br />
                        <a href="##">Css3</a><br />
                        <a href="##">JavaScript</a><br />
                        <a href="##">Es6</a><br />
                        <a href="##">OOP</a><br />
                        <a href="##">Data Structure</a>

                    </div>
                    <div className="col-md-4 text-light">
                        <h5 className="text-light pb-3">Contact</h5>
                        <p>Phone: +8801825484275</p>
                        <p>Email: morshedhasan1969@gmail.com</p>
                        <p>Junior MERN Developer</p>
                    </div>
                </div>
            </div>
          <div className="text-center p-5">
                            <a className="text-info" href={`https://www.linkedin.com/in/themorsehed/`}> <FontAwesomeIcon icon={faLinkedinIn} size="3x" /></a> 
                            <a className="p-5 text-light" href={`https://github.com/morshedalam3`}><FontAwesomeIcon icon={faGithub} size="3x" /> </a>
                            <a href={`https://www.facebook.com/morshed.hassan`}><FontAwesomeIcon icon={faFacebook} size="3x" /> </a>
                        </div>
            <div className="text-center text-light">
                &copy; All right reserved Morshed {new Date().getFullYear()}
            </div>
        </div>
    );
};

export default Footer;