import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import './indexs.css'; // Custom CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FaClock } from 'react-icons/fa';

const Career3 = () => {
 const [jobname,setName]=useState("Python Developer")

  return (<div className="con">
    <div className="cardmain">
        <div className='row1'>
        <div className='title'><p>PYTHON DEVELOPER</p></div>
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
         <p>We are seeking a skilled Python Developer to join our team. As a Python Developer, you will be responsible for designing, implementing, and maintaining Python-based applications and solutions. You will collaborate with cross-functional teams to develop efficient and scalable software solutions that meet our clients' needs.</p>
        </div>
        <div className='role'>
          <h3>ROLE</h3>
          <p>As a Python Developer, your primary role will be to design, develop, and maintain Python-based applications and software solutions. This includes writing clean and efficient code using Python programming language and collaborating with team members to translate business requirements into technical specifications. You will be responsible for conducting thorough testing and debugging to ensure software quality, optimizing application performance and scalability, and integrating data storage solutions such as SQL or NoSQL databases.</p>
        </div>
        <center><Link to={`/apply/${jobname}`}><button>APPLY NOW</button></Link></center>
    </div>
</div>);
};

export default Career3;