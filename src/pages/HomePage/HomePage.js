import React from 'react';
import './HomePage.css';
import websiteLogo from '../../Images/websiteLogo.png'

const HomePage = () => {


    return (
        <div className="homeContainer">
            <div className="homeLogo">
                <img className="websiteLogo" src={websiteLogo}></img>
            </div>
            <div className="homeHeader">
                <div className="homeText">
                    <h1 className="homeWelcome">{"<WELCOME />"}</h1>
                    <h3>HELLO, I'M DALTON!</h3>
                    <h3>FRONT-END DEVELOPER</h3>
                </div>
            </div>
            <div className="homeFooter">
                <h5>LEARN MORE ABOUT ME</h5>
            </div>
            <div className="continueArrow">
                <h2>&#10225;</h2>
            </div>
        </div>
    )
}

export default HomePage;



// css animation scrolling slides
// aws route
// githubpages
