import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import './indexs.css'; // Custom CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FaClock } from 'react-icons/fa';

const Career6 = () => {
  const [jobname,setName]=useState("PHP Developer")


  return (<div className="con">
    <div className="cardmain">
        <div className='row1'>
        <div className='title'><p>PHP DEVELOPER</p></div>
        <div className='date'>
    
        <p className="open">Open</p>
        </div>
        </div>
        <div className='row2'>
        <div className="location"><FontAwesomeIcon className="sizeicon" icon={faMapMarkerAlt} /><p>Remote</p></div>
        <div className='type'><FontAwesomeIcon className="sizeicon"  icon={faBriefcase} /><p>Internship</p></div>
  
        </div>
        <div className='description'>
        <h3>DESCRIPTION</h3>
          <p>
          We are looking for a skilled PHP Developer to join our team. As a PHP Developer, you will be responsible for designing, developing, and maintaining web applications and solutions using PHP programming language. You will collaborate with cross-functional teams to deliver high-quality, scalable solutions that meet our clients' needs.      </p>
        </div>
        <div className='role'>
          <h3>ROLE</h3>
          <p>As a PHP Developer, your primary responsibility will be to design, develop, and maintain web applications and solutions using PHP programming language. You will work closely with a team of developers and collaborate with stakeholders to analyze requirements, implement features, and ensure software quality. Your role will also involve integrating databases, optimizing application performance, staying updated with PHP frameworks and industry trends, and participating in code reviews. The ideal candidate will have strong PHP programming skills, experience with web development technologies, and the ability to work in a collaborative team environment.</p>
        </div>
        <center><Link to={`/apply/${jobname}`}><button>APPLY NOW</button></Link></center>
    </div>
</div>);
};

export default Career6;