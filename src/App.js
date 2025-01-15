import React from "react";
import Header from "./compenents/Header";
import Home from "./compenents/Home";
import About from "./compenents/About";
import Skills from "./compenents/Skills";
import Project from "./compenents/Project";
import Contact from "./compenents/Contact";
import Footer from "./compenents/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      once: true,     
    });
  }, []);
  return (
    <div>
      <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&family=Sofadi+One&display=swap" rel="stylesheet" />
      </div>
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;
