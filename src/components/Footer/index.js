import {Link} from 'react-router-dom'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import { RiProductHuntFill } from 'react-icons/ri';
import { FaCode } from 'react-icons/fa'; 
import { FaShieldAlt } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';


import './index.css'

const Footer=({count})=>(


    <>
  <div className="footer">
<div className="items">
  <h1>Address</h1>
  <div className="icon"> <FaMapMarkerAlt color=" #48ad61"/><span>Hebbal, Banglore</span></div>
  <div  className="icon"><AiOutlineMail color="#48ad61"/><span>services@vaajlabs.com</span></div>
 
<div className="icon">
 <Link to="https://www.instagram.com/vaajlabs?igsh=MzRlODBiNWFlZA==" target="_blank"><FaInstagram color="#833AB4" size={18} /></Link>
  <span><Link to="https://www.linkedin.com/in/vaaj-labs-a842a0230/" target="_blank"><FaLinkedin color="#0077B5" size={18} /></Link></span>
  </div>
</div>
 

<div className="items">
  <h1>Our Services</h1>
  <div className='icon'><FaCode/><span>App Fabrication</span></div>
  <div className='icon'><FaShieldAlt/><span>Cyber Defence</span></div>
  <div className="icon"><RiProductHuntFill/><span>Product Development
</span></div>
<div className="icon"><FaCheckCircle/><span>Software Testing Services</span></div>
  <div className="icon"><FaGlobe/><span>Web Development Activities</span></div>


 
  <div className='icon'><FaBriefcase/><span>IT Consulting</span>
  
</div><div className='icon'><FaBriefcase/><span>Digital Marketing and Other Services</span>


</div>
</div>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsOtRJRIVSyw-13H9-yUHnGH-M_t378M-HvQ&usqp=CAU"/>
  </div>
  <div className="rights"><p>Copyright &copy; Vaajlabs.All Rights Reserved </p>
  <p>Visitors Count:{count}</p>
  </div>
    </>
)
export default Footer