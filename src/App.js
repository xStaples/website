import React from 'react';
import {Switch, Route} from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';


import './App.css';


const App = () => {

  
  return (
    <div className="App">
      <div className="Main-Container">
        <div className="MainContent">
          <Switch>
            <Route exact path="/">
              <NavBar />
              <div>
                <HomePage />
              </div>
              <ProjectsPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
          </Switch>
        </div>
      </div>
      
    </div>
  );
}

export default App;
