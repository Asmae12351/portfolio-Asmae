import React from 'react'
import icon from "./icon3.jpg"
 import './Project.css'
 import arinas from './ARINAS HOTEL.png'
 import img from './img.jpg'
const Project=()=> {
  return (
    <div>
        <div className='projecets' id='projects'>
            <h3>My Projects</h3>
            <div className='container' data-aos="fade-up">
                <div className='project'>
                    <h4>Parapharmacie</h4>
                    <p>
                    The cosmetic website presents a sleek, responsive design with interactive features to enhance user experience.<br></br>
                    It highlights products and services through dynamic content, ensuring accessibility across devices
                    <br></br>
                    Technologies used: HTML, CSS, JavaScript, Bootstrap,PHP 
                    </p><br></br>
                    <img  src={icon}/>
                    <a href='https://github.com/Asmae-elhadouchi/Para-pharmacie.git'><i class="fa-brands fa-github"></i> Code </a>
                </div>
                <div className='project'>
                    <h4>My Portfolio</h4>
                    <p>
                    I designed and developed my personal portfolio to showcase my skills and projects. The portfolio features a sleek, responsive design with interactive elements to enhance user experience and ensure accessibility across all devices
                    <br></br>
                    Technologies used: HTML, CSS, JavaScript, Bootstrap,REACT JS 
                    </p><br></br>
                    <img  src={img}/>
                    <a href='#home'>myportfolio </a>
                </div>


                <div className='project'>
                    <h4>hotel website</h4>
                    <p>
                    ARINAS is a modern hotel website showcasing its services, rooms, and facilities with a responsive design for all devices.<br/>
                     It features an intuitive navigation bar, image sliders, and interactive elements for enhanced user experience.
                     <br/>
                    Technologies used: HTML, CSS, JavaScript, Bootstrap
                    </p>
                    <img  src={arinas}/>
                    <a href='https://github.com/Asmae-elhadouchi/hotel.git'><i class="fa-brands fa-github"></i> Code </a>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Project