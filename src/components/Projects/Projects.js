import React from 'react';
import './Projects.css';
const Projects = ({activeProject, onTabChange}) => (
    <nav className="Project-Nav">
        <ul>
            <li className={`Project-Nav-item ${activeProject === 0 && 'selected'}`}><a onClick={()=>onTabChange(0)}>Project 1</a></li>
            <li className={`Project-Nav-item ${activeProject === 1 && 'selected'}`}><a onClick={()=>onTabChange(1)}>Project 2</a></li>
            <li className={`Project-Nav-item ${activeProject === 2 && 'selected'}`}><a onClick={()=>onTabChange(2)}>Project 3</a></li>
        </ul>
    </nav>
)

export default Projects
