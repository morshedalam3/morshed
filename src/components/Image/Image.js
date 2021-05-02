import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Image.css';
const Image = () => {
    return (
        <div className="main-container">
            <div className="clip-each clip-solid">
            </div>
            <div>

            </div>
            <h1>Who's this guy?</h1>
            <p>I'm a Front-End Developer. <br />
      I have serious passion for explore new features or learn something new.</p>
      <a className="text-primary" href="https://drive.google.com/uc?export=download&id=1LcGV_4ItRViS85k3v4IB9tPnsVRC0gbx" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFileAlt} size="2x" /> Resume </a>
        </div>
    );
};

export default Image;