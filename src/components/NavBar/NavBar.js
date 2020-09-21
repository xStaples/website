import React from 'react';
import {Link, Route} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    // return (
    //     <nav className="navBar">
    //         <button className="navMenuBtn"> // </button>
    //         <div className="navButtonsList">
    //             <li className="navButtons"><Link to="/">Home</Link></li>
    //             <li className="navButtons"><Link to="/projects">Projects</Link></li>
    //             <li className="navButtons"><Link to="/about">About</Link></li>
    //             <li className="navButtons"><Link to="/contact">Contact</Link></li>
    //         </div>
            
    //     </nav>
    // )

    return (
        <ul className="navBar">
            <li><button className="aboutNavBtn"><Link to="/about">About</Link></button></li>
            <li><button className="contactNavBtn"><Link to="/contact">Contact</Link></button></li>
        </ul>
    )
}

export default NavBar
