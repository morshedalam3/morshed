import React, { useState } from 'react';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import './Project.css';

const Project = ({project}) => {
    const{image, name, id} = project;
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal(){
      setIsOpen(false);
    }
    return (
    
        <div className="col-md-4 mb-3">
        <div className="card">
            <img className="card-img-top" src={image}  alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <div className="text-center">
                <button onClick={openModal} className="btn btn-brand text-uppercase">view details</button>
                    <ProjectDetails modalIsOpen={modalIsOpen} closeModal={closeModal} name={name}></ProjectDetails>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Project;