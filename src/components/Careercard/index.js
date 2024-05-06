import React,{useState} from 'react';
import {Link} from 'react-router-dom'

import './indexs.css'; // Custom CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FaClock } from 'react-icons/fa';

const Careercard = () => {
 const [jobname,setName]=useState("Mern Stack Developer")

  return (<div className="con">
    <div className="cardmain">
        <div className='row1'>
        <div className='title'><p>MERN STACK DEVELOPER</p></div>
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
          A MERN stack developer specializes in using MongoDB, Express.js, React, and Node.js to build dynamic web applications. They are responsible for developing, maintaining, and deploying web applications using these technologies. MERN stack developers should have a strong understanding of JavaScript and experience with the MERN stack components. They are in high demand due to the popularity of the stack and the need for web developers who can work with these technologies.       </p>
        </div>
        <div className='role'>
          <h3>ROLE</h3>
          <p>A MERN stack developer is responsible for developing and maintaining web applications using the MongoDB, Express.js, React, and Node.js technologies. They collaborate with other team members to design and implement features, ensuring the application is responsive, efficient, and scalable. MERN stack developers also troubleshoot and debug issues, optimize performance, and stay updated with the latest trends and technologies in web development.</p>
        </div>
        <center><Link to={`/apply/${jobname}`}><button>APPLY NOW</button></Link></center>
    </div>
</div>);
};

export default Careercard;