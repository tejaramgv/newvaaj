import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import './indexs.css'; // Custom CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FaClock } from 'react-icons/fa';

const Career5 = () => {
 const [jobname,setName]=useState("C# Developer")

  return (<div className="con">
    <div className="cardmain">
        <div className='row1'>
        <div className='title'><p>C# DEVELOPER</p></div>
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
        <p>We are seeking a talented and experienced C# Developer to join our team. As a C# Developer, you will be responsible for designing, developing, and maintaining software applications using the C# programming language and the .NET framework. You will collaborate with cross-functional teams to deliver high-quality, scalable solutions that meet our clients' needs.</p>
        </div>
        <div className='role'>
          <h3>ROLE</h3>
       <p>As a C# Developer, your role will involve designing, developing, and maintaining software applications using the C# programming language and the .NET framework. You will collaborate with cross-functional teams to analyze requirements, implement features, conduct testing, and optimize application performance. Your responsibilities will also include integrating databases, staying updated with industry trends, participating in code reviews, and documenting technical specifications. The ideal candidate will have a strong background in C# programming, software development principles, and problem-solving skills, along with effective communication and teamwork abilities.  </p>
        </div>
        <center><Link to={`/apply/${jobname}`}><button>APPLY NOW</button></Link></center>
    </div>
</div>);
};

export default Career5;