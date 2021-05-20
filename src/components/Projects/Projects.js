import React, { useEffect } from 'react';
import { useState } from 'react';
import projectData from '../../fakeData/projects.json';
import Project from '../Project/Project';
import './Projects.css';
const Projects = () => {
    const [selectedProjectType, setSelectedProjectType] = useState("REACT");
    const [projects, setProjects] = useState([]);

    useEffect (() => {
          setProjects(projectData)
    });
    const selectedProject =  projects.filter(pd => pd.type == selectedProjectType);
    return (
        <div className="projects-dev p-5">
             <div className="container">
            <h1 className="text-center text-light">Projects</h1>
            <nav className="text-light">
                    <ul className="nav justify-content-center">
                        <li onClick={() => setSelectedProjectType("REACT")} className="nav-item">
                            <span  to="REACT" className={selectedProjectType === "REACT" ?  "active nav-link" : "nav-link"}>React</span>
                        </li>
                        <li onClick={() => setSelectedProjectType("JAVASCRIPT")} className="nav-item">
                            <span to="JAVASCRIPT" className={selectedProjectType === "JAVASCRIPT" ?  "active nav-link" : "nav-link"}>JavaScript</span>
                        </li>
                        <li onClick={() => setSelectedProjectType("HTML")} className="nav-item">
                            <span to="HTML" className={selectedProjectType === "HTML" ?  "active nav-link" : "nav-link"}>Html</span>
                        </li>
                    </ul>
                </nav>

            <div className="row my-4">
                {
                    selectedProject.map(project => <Project project={project} ></Project>)
                }
            </div>
        </div>
        </div>
       
    );
};

export default Projects;