import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Image.css';
const Image = () => {
    return (
        <div className="main-container">
            <div className="clip-each clip-solid d-flex justify-content-center">
            </div>
            <h1 className="text-light">Who's this guy?</h1>
            <p  className="text-light">I'm a Front-End Developer. <br />
            Building state-of-the-art, easy to use, user-friendly websites <br/> and applications is truly a passion of mine. <br/>
           In additions I actively seek out new technologies<br/> and stay up-to-date on industry trends and advancements.</p>
      <a className="d-block btn btn-outline-light" href="https://drive.google.com/uc?export=download&id=1LcGV_4ItRViS85k3v4IB9tPnsVRC0gbx" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFileDownload} size="2x" /> Download Resume </a>
        </div>
    );
};

export default Image;