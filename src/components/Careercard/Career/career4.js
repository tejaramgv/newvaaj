import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import './indexs.css'; // Custom CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FaClock } from 'react-icons/fa';

const Career4 = () => {
  const [jobname,setName]=useState("Business Development Executive")

  return (<div className="con">
    <div className="cardmain">
        <div className='row1'>
        <div className='title'><p>BUSINESS DEVELOPMENT EXECUTIVE (IT CONSULTING)</p></div>
        <div className='date'>
  
        <p className="open">Open</p>
        </div>
        </div>
        <div className='row2'>
        <div className="location"><FontAwesomeIcon className="sizeicon" icon={faMapMarkerAlt} /><p>Banglore</p></div>
        <div className='type'><FontAwesomeIcon className="sizeicon"  icon={faBriefcase} /><p>Full-Time / Part-Time / Internship</p></div>
      
        </div>
        <div className='description'>
        <h3>Business Development Officer Requirements:</h3>
          <p>
Bachelor's degree in business management or administration, finance, accounting, marketing, or related field.<br/>
Proven experience working as a business development officer or similar role.<br/>
Proficiency in all Microsoft Office applications.<br/>
The ability to travel as needed.<br/>
The ability to work in a fast-paced environment.<br/>
Excellent analytical, problem-solving and management skills.<br/>
Exceptional negotiation and decision-making skills.<br/>
Effective communication skills.<br/>
Strong business acumen.<br/>
Detail-oriented.</p>
        </div>
        <div className='role'>
          <h3>ROLE</h3>
          <p>As a Business Development Executive, your primary responsibility will be to identify new business opportunities and drive sales growth for the company. You will be expected to research and analyze market trends, generate leads, and build strong relationships with potential clients. This role involves developing and implementing effective business development strategies, including sales presentations, negotiations, and follow-ups to secure new contracts and partnerships.</p>
        </div>
        <center><Link to={`/apply/${jobname}`}><button>APPLY NOW</button></Link></center>
    </div>
</div>);
};

export default Career4;