import React from 'react';
// import './Project.css'
import projects from '../../fakeData/projects.json';
import Project from '../Project/Project';
// import './Projects.css';
const Projects = () => {
    return (
        <div className="projects-dev p-5">
             <div className="container">
            <h1 className="text-center">Projects</h1>
            <div className="row my-4">
                {
                    projects.map(project => <Project project={project} ></Project>)
                }
            </div>
        </div>
        </div>
       
    );
};

export default Projects;