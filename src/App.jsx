import logo from './logo.svg';
import './App.css';
import React from 'react';
import Nav from './component/Nav';
import Home from './component/Home';
import Aboutme from './component/Aboutme';
import Skills from'./component/Skills';
import Project from './component/Project';
import ContactUs from './component/ContactUs';
import Footer from './component/Footer';





const App = () => {
  return (
    
    <div>
      <Nav/>
       <div id="home"></div>
       <Home></Home>
       <div id="about"></div>
       <Aboutme></Aboutme>
       <div id="skills"></div>
       <Skills></Skills>
       <div id="project"></div>
        <Project></Project>
        <div id="contactUs"></div>
       <ContactUs></ContactUs>
        <Footer></Footer>

    </div>
      
  );
};

export default App;
