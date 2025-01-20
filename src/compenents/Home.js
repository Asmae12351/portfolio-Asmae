import React from 'react'
import asmaeImage from './img.jpg'
import CV from './cv.pdf'
import Typed from "typed.js";
import { useEffect } from 'react'
import './Home.css'
const Home=()=> {
    useEffect(() => {
        const typed = new Typed(".auto-type", {
            strings: ["Fullstack developer", "Frontend developer", "Backend developer"],
            typeSpeed: 300,
            backSpeed: 200,
            loop: true,
        });
    }, []);
    return (
        <section className="home" id="home">
            <div className="home-content" data-aos="fade-left">
                <h1>Hi, It's <span>ASMAE</span></h1>
                <h3 className="text-animation">I'm a <span className="auto-type"></span></h3>
                <p>
                    With a strong foundation in front-end and back-end development, I create responsive, user-friendly websites using modern technologies like PHP, JavaScript, HTML, CSS, and Bootstrap. I love solving complex problems and building efficient digital solutions.<br/> <br/><span> Let’s work together to bring your ideas to life!</span>
                </p>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/asmae-elhaddouchi-a9a611301" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/Asmae-elhadouchi" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.instagram.com/asmae_.elhaddouchi/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </div>
                <div className="btn-group">
                    <a href={CV} className="btn" download="Asmae_CV.pdf">Resume</a>
                    <a href="#contact" className="btn" >Contact</a>
                </div>
            </div>
            <div className="home-img">
                <img src={asmaeImage} alt="Portrait of Asmae" />
            </div>
        </section>
    );
}
export default Home;
