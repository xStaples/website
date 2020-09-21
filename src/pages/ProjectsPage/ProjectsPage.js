import React, {useState} from 'react';
import Projects from '../../components/Projects/Projects';

import './ProjectsPage.css'

const ProjectsPage = () => {

    const [activeProject, setActiveProject] = useState(0);

    const handleTabChange = (index) => {
        setActiveProject(index);
    }
    
    const renderProject = () => {
        switch(activeProject) {
            case 0: return <h3>Project 1</h3>
            case 1: return <h3>Project 2</h3>
            case 2: return <h3>Project 3</h3>
            default: return null
        }
    }
    return (
        
        <div className="projectsContainer">
            <h1 className="projectsTitle">Projects Page</h1>
            <div className="projectsContent">
                <Projects activeProject={activeProject} onTabChange={handleTabChange} />
                <div className="renderedProject">
                    {renderProject()}
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage;
