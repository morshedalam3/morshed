import React from 'react';
import Modal from 'react-modal'
import works from '../../fakeData/projects.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faCode, faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')
const ProjectDetails = ({modalIsOpen, closeModal,name}) => {
    const work = works.find(work => work.name == name)
    const {image, description, live, technology} = work || {};


    if(!work){
        return <h1 className="my-5 text-center">Work not found!</h1>
    }
    return (
        <div>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        >
        <div className="container my-5">
    <div className="row">
        <div className="col-md-6">
            <img className="img-fluid" src={image} alt=""/> 
            <h1 className="text-dark">Uses Technology: <p><strong>{technology}</strong></p></h1>
         
        </div>
        <div className="col-md-6"> 
            <h4>{name}</h4>
            <p className="border-top pt-5"><strong>Description:</strong> {description}</p>
            <a className="p-5 text-dark" href={live} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faExternalLinkSquareAlt} size="2x" /> </a>
         </div>
    </div>          
</div>
<button className="btn btn-btn-primary bg-primary" onClick={closeModal}>go home</button>
        </Modal>
    </div>
    );
};

export default ProjectDetails;