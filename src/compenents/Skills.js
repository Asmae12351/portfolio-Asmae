import React from 'react';
import './Skills.css';
import Certificat1 from './certificat1.png';
import certificat from './Certificat1.pdf';
import certificat2 from './image.png'
import C1 from './C1.pdf'

const Skills = () => {
  return (
    <div>
      <div className='skills' >
        <h2 id='skills' data-aos="fade-up">Skills & Certificates</h2>
        <div className='skill'>
          <h3><i>Programming Languages</i></h3>
          <div className='container' data-aos="fade-right">
            <div className='cont'>
              <h4><i className="fa-brands fa-php"></i></h4>
            </div>
            <div className='cont'>
              <h4><i className="fa-brands fa-js"></i></h4>
            </div>
            <div className='cont'>
              <h4><i className="fa-solid fa-database"></i></h4>
            </div>
            <div className='cont'>
              <h4><i className="fa-brands fa-html5"></i></h4>
            </div>
            <div className='cont'>
              <h4><i className="fa-brands fa-css3"></i></h4>
            </div>
          </div>
        </div>

        <div className='Frameworks'>
          <h3><i>Frameworks</i></h3>
          <div className='container' data-aos="fade-left">
            <div className='cont'>
              <h4><i className="fa-brands fa-react"></i></h4>
            </div>
            <div className='cont'>
              <h4><i className="fa-brands fa-laravel"></i></h4>
            </div>
            <div className='cont'>
              <h4><i className="fa-brands fa-node"></i></h4>
            </div>
          </div>
        </div>
        <div className='Frameworks'>
          <h3><i>Otils</i></h3>
          <div className='container' data-aos="fade-right">
            <div className='cont'>
              <h4><i class="fa-brands fa-github"></i></h4>
            </div>
            <div className='cont'>
              <h4><i class="fa-brands fa-gitlab"></i></h4>
            </div>
            <div className='cont'>
              <h4><i class="fa-brands fa-jira"></i></h4>
            </div>
            <div className='cont'>
              <h4><i class="fa-brands fa-figma"></i></h4>
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className='certificats'>
          <h3><i>Certificates</i></h3>
          <div className='contcertificat'data-aos="fade-down">
            <div className='certificat'>
              <h4>Prepare for the Role of Developer</h4>
              <p>
                The "Prepare for the Role of Developer" course (Microsoft and LinkedIn) was awarded in December 2024.
                <br />
                It covers key skills in programming and development, providing a strong foundation for a career in software development.
              </p>
              <div className='certificat-img'>
                <img src={Certificat1} alt="Prepare for the Role of Developer" />
              </div>
              <a href={certificat} target="_blank" rel="noopener noreferrer" className="view-certificat">
                View Certificate
              </a>
            </div>
            <div className='certificat'>
              <h4>Prepare Your Career in System Administration</h4>
              <p>
              The "Prepare Your Career in System Administration" course (Microsoft and LinkedIn) was awarded in January 2025.<br/>
               It provides essential skills in network administration, network security,<br>
               </br> and system administration, offering a solid foundation for a career in this field.

              </p>
              <div className='certificat-img'>
                <img src={certificat2} alt="Prepare for the Role of Developer" />
              </div>
              <a href={C1} target="_blank" rel="noopener noreferrer" className="view-certificat">
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
