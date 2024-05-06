import React from 'react';
import {Link} from 'react-router-dom'
import './index.css'; // Custom CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FaClock } from 'react-icons/fa';
import { PiBookmarkSimple } from "react-icons/pi";




const Careers = () => {
  return (

    <div className="mainss">
    <div className="careers">
      <div className='career'>
        <div className='career1'>
        <h3>MERN STACK DEVELOPER</h3>
      
        <p className="open">Open</p> <PiBookmarkSimple size={19} style={{ color: 'purple' }} />
        </div>
        <div className='career2'>
        <div className="location"><FontAwesomeIcon icon={faMapMarkerAlt} /><p>Remote</p></div>
        <div className='type'><FontAwesomeIcon icon={faBriefcase} /><p>Internship</p></div>
    
        </div>
      <div className="careertext">
        <p className="paragraph">A MERN stack developer is responsible for creating full-stack web applications using MongoDB, Express.js, React, and Node.js. They design and implement user interfaces with React for front-end functionality, ensuring scalability and responsiveness. Additionally, they build and manage server-side APIs and databases using Node.js and MongoDB, handling back-end functionality and data storage efficiently.</p>
      <Link className="careerlink" to="/career1"><p className="buttons">View Details</p></Link></div>
        
      </div>

      <div className='career'>
        <div className='career1'>
        <h3>FULL STACK DEVELOPER</h3>
    
        <p className="open">Open</p><PiBookmarkSimple size={19} style={{ color: 'purple' }} />        </div>
        <div className='career2'>
        <div className="location"><FontAwesomeIcon icon={faMapMarkerAlt} /><p>Remote</p></div>
        <div className='type'><FontAwesomeIcon icon={faBriefcase} /><p>Internship</p></div>
      
        </div>
      <div className="careertext">
        <p className="paragraph">A full-stack developer is a professional who possesses expertise in both front-end and back-end development. They are proficient in programming languages such as HTML, CSS, JavaScript for front-end development, and languages like Python, Java, or Ruby for back-end development. Full-stack developers are capable of handling database management, server-side logic, API integration, and user interface design. </p>
        <Link className="careerlink" to="/career2"><p className="buttons">View Details</p></Link></div>
        
      </div>

      <div className='career'>
        <div className='career1'>
        <h3>PYTHON DEVELOPER</h3>
     
        <p className="open">Open</p><PiBookmarkSimple size={19} style={{ color: 'purple' }} /> 
        </div>
        <div className='career2'>
        <div className="location"><FontAwesomeIcon icon={faMapMarkerAlt} /><p>Remote</p></div>
        <div className='type'><FontAwesomeIcon icon={faBriefcase} /><p>Internship</p></div>
       
        </div>
      <div className="careertext">
        <p className="paragraph">A Python developer is a professional who specializes in using the Python programming language to create software applications, websites, or automation scripts. They are proficient in writing clean, efficient, and maintainable code using Python libraries and frameworks such as Django, Flask, or PyQT. Python developers work on various projects, including web development, data analysis, machine learning, artificial intelligence, and scripting tasks. </p>
        <Link className="careerlink" to="/career3"><p className="buttons">View Details</p></Link></div>
        
      </div>

      <div className='career'>
        <div className='career1'>
        <h3>BUSINESS DEVELOPMENT EXECUTIVE (IT CONSULTING)</h3>
     
        <p className="open">Open</p> <PiBookmarkSimple size={19} style={{ color: 'purple' }} />
        </div>
        <div className='career2'>
        <div className="location"><FontAwesomeIcon icon={faMapMarkerAlt} /><p>Banglore</p></div>
        <div className='type'><FontAwesomeIcon icon={faBriefcase} /><p>Full-Time / Part-Time / Internship</p></div>
 
        </div>
      <div className="careertext">
        <p className="paragraph">A Business Development Executive (BDE) is a professional responsible for identifying new business opportunities, building client relationships, and expanding the company's market presence. They analyze market trends, conduct research on competitors, and develop strategies to increase sales and revenue. BDEs often collaborate with marketing, sales, and product teams to develop effective business plans and promotional campaigns. </p>
        <Link className="careerlink" to="/career4"><p className="buttons">View Details</p></Link></div>
        
      </div>

      <div className='career'>
        <div className='career1'>
        <h3>C# DEVELOPER</h3>
       
        <p className="open">Open</p> <PiBookmarkSimple size={19} style={{ color: 'purple' }} />
        </div>
        <div className='career2'>
        <div className="location"><FontAwesomeIcon icon={faMapMarkerAlt} /><p>Remote</p></div>
        <div className='type'><FontAwesomeIcon icon={faBriefcase} /><p>Internship</p></div>
        
        </div>
      <div className="careertext">
        <p className="paragraph">A C# developer is a software professional specializing in using the C# programming language for developing applications, software solutions, and systems. They have a strong understanding of object-oriented programming concepts, .NET framework, and development tools like Visual Studio. C# developers work on various projects such as web applications, desktop applications, mobile apps, and enterprise solutions.</p>
        <Link className="careerlink" to="/career5"><p className="buttons">View Details</p></Link></div>
        
      </div>

      <div className='career'>
        <div className='career1'>
        <h3>PHP DEVELOPER</h3>
      
        <p className="open">Open</p> <PiBookmarkSimple size={19} style={{ color: 'purple' }} />        </div>
        <div className='career2'>
        <div className="location"><FontAwesomeIcon icon={faMapMarkerAlt} /><p>Remote</p></div>
        <div className='type'><FontAwesomeIcon icon={faBriefcase} /><p>Internship</p></div>
       
        </div>
      <div className="careertext">
        <p className="paragraph">A PHP developer is a professional who specializes in using the PHP programming language to create dynamic websites, web applications, and backend systems. They have a deep understanding of PHP syntax, frameworks like Laravel, CodeIgniter, or Symfony, and database management systems such as MySQL or PostgreSQL. PHP developers work on various aspects of web development, including server-side logic, database integration, API development, and user authentication. They are proficient in HTML, CSS, JavaScript, and often work with front-end frameworks like Vue.js or React.js for building interactive user interfaces. </p>
        <Link className="careerlink" to="/career6"><p className="buttons">View Details</p></Link></div>
        
      </div>
     
    </div></div>
  );
};

export default Careers;