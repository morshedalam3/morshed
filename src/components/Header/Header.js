import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faLightbulb, faRocket, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import Image from '../Image/Image';
import BarChart from '../BarChart/BarChart';

const Header = () => {
    return (
        <div className="main-header">
            <h1 id="about">About</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="align-items-center">
                        <div className="hexagon-wrapper">
                            <div className="hexagon">
                                <p> <FontAwesomeIcon icon={faTachometerAlt} /></p>
                            </div>
                        </div>
                        <h1 className="text-center">Fast</h1>
                        <p className="text-light text-center">Fast load times and lag free  interaction, my highest priority.</p>
                        </div>
                     
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="hexagon-wrapper">
                            <div className="hexagon">
                                <p> <FontAwesomeIcon icon={faDesktop} /></p>
                            </div>
                        </div>
                        <h1 className="text-center">Responsive</h1>
                        <p className="text-center text-light">My layouts will work on any  device, big or small.</p>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="hexagon-wrapper">
                            <div className="hexagon">
                                <p> <FontAwesomeIcon icon={faLightbulb} /></p>
                            </div>
                        </div>
                        <h1 className="text-center">Intuitive</h1>
                        <p className="text-center text-light">Strong preference for easy to  use, intuitive UX/UI.</p>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="hexagon-wrapper">
                            <div className="hexagon">
                                <p> <FontAwesomeIcon icon={faRocket} /></p>
                            </div>
                        </div>
                        <h1 className="text-center">Dynamic</h1>
                        <p className="text-center text-light">Websites don't have to be static, I love making pages come to life.</p>
                    </div>
                </div>
            </div>
           
                <div className="row p-5 ">
                <div className="col-md-6 img-part">
                <div className="d-flex justify-content-center mt-5">
                <Image/>
               
                </div>
            </div>
            <div className="col-md-6">
                <BarChart/>
                
            </div>
                </div>
            </div>

    );
};

export default Header;