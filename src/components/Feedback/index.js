// import {useState,useEffect} from 'react'
// import ReCAPTCHA from 'react-google-recaptcha';
// import axios from 'axios'
// import toast, { Toaster } from 'react-hot-toast';
// // import 'react-toastify/dist/ReactToastify.css';
// import { ClipLoader } from 'react-spinners';

// import './feedbackindex.css'

// const Feedback=()=>{
//     const [name,setName]=useState("")
//     const [email,setEmail]=useState("")
//     const [phoneno,setPhone]=useState("")
//     const [feedback,setFeedback]=useState("")
//     const [submit,setSubmit]=useState(false)
//     const [submitted,setSubmitted]=useState(false)
//     const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
//     const checked=()=>setIsCaptchaVerified(true)
//     const nAme=(e)=>setName(e.target.value)
//     const eMail=(e)=>{setEmail(e.target.value)
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}(?:\.[^\s@]+)?$/;
//       setIsValidEmail(emailRegex.test(email));
//     }
//     const check=(e)=>{
//       if(e.key==="Enter"){setEmail(e.target.value)
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}(?:\.[^\s@]+)?$/;

//       setIsValidEmail(emailRegex.test(email));}
//     }

//     const fEed=(e)=>setFeedback(e.target.value)

//     const [isValidEmail, setIsValidEmail] = useState(true);
  
//    //validating phone
//    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);

//    const pHone = (e) => {
//      const input = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
//      if (input.length <= 10) {
//        setPhone(input);
//        setIsValidPhoneNumber(true);
//      } else {
//        setIsValidPhoneNumber(false);
//      }
//    };
  
    

//     const handleSubmit=async()=>{
//        if(name.length<3){
//         toast.error('name is too short!',{
//           autoClose: 3000, // Close the notification after 3 seconds
//           hideProgressBar: false, // Show the progress bar
//           closeOnClick: true, // Close the notification when clicked
//           draggable: true, // Allow dragging the notificaton
//         });
//         return;
       
//        }
//        if(!isValidEmail){
//         toast.error('Enter valid mail');
//         return;
//       }
//        if(!email){
//         toast.error('Enter valid mail');
//         return;
//        }
//        if(phoneno.length<10 || phoneno.length>10){
//         toast.error('Enter valid mobile number');
//         return;
//        }
//        if(!feedback){
//         toast.error('Enter Feedback');
//         return;
//        }
//        if(!isCaptchaVerified){
//         toast.error('Please Complete Captcha')
//         return;
//        }
//        setSubmit(true)
//        setEmail("")
//         setName("")
//         setPhone("")
//         setFeedback("")
//        try {
//         const res = await axios.post(`https://project-2-nshd.onrender.com/api/v1/auth/feedback`, { name, email,phoneno,feedback });
//         console.log(res);
  
//         if (res.data.success) {
//             toast.success("Feedback submitted successfully");
//          setSubmit(false);
//         } else {
//           console.log('fail');
  
//           setSubmit(false)
//           toast.error(res.data.message);
//         }
//       } catch (error) {
//         console.error(error);
//         setSubmit(false)
//         toast.error('Something went wrong!');
//       }





//     }
    
    
    
//     return(


// <>{submitted?<h1>hi</h1>:
// <>


   
//     <div className="boxing">
//         <div className="boximg">
//           <img src="https://images.pexels.com/photos/6935187/pexels-photo-6935187.jpeg?auto=compress&cs=tinysrgb&w=600"/>
//         </div>
  
//          <div className="forms" id="forms">
//             <center><h1>Feedback</h1></center>
//     <input type="text" onChange={nAme} value={name} placeholder="Name"/>
//     <input
//         type="email"
//         id="email"
//         placeholder='Enter Your Mail'
//         value={email}
//         onKeyUp={check}
//         onChange={eMail}
//         style={{ borderColor: isValidEmail ? 'initial' : 'red' }} // Change border color based on validity
//       />
//       {!isValidEmail && <span className="validemail" style={{ color: 'red' }}>Please enter a valid email address.</span>}
  

//       <input
//         type="text"
//         id="phone"
//         value={phoneno}
//         placeholder='Enter Phone Number'
//         onChange={pHone}
//         maxLength={10} // Limit input to 10 characters
//         style={{ borderColor: isValidPhoneNumber ? 'initial' : 'red' }} // Change border color based on validity
//       />
//       {!isValidPhoneNumber && (
//         <p style={{ color: 'red' }}>Please enter a valid phone number with up to 10 digits.</p>

//       )}
//     <textarea id="textarea" onChange={fEed} value={feedback} placeholder="Your Message" name="textarea" rows="8" cols="50"></textarea>
 
//     <ReCAPTCHA className="captcha"
//           sitekey="6LdKDaopAAAAAIGW8tU1LRki2djXvZzM5e77JxLY"
//           onChange={checked}
       
//         />
//            <center>
//     {submit?<ClipLoader color="green"  size={17} />: <button id="button" onClick={handleSubmit}>
//           SUBMIT
//         </button>}



//     </center>
//     </div>
  



// </div>   <Toaster/>
//  </>}
// </>
// )
// }


// export default Feedback





import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import Flag from 'react-country-flag';
import 'react-phone-number-input/style.css';
import { ClipLoader } from 'react-spinners';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import './feedbackindex.css';

const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneno, setPhone] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submit, setSubmit] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);

  const checked = () => setIsCaptchaVerified(true);
  const nAme = (e) => setName(e.target.value);
  const eMail = (e) => {
    setEmail(e.target.value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}(?:\.[^\s@]+)?$/;
    setIsValidEmail(emailRegex.test(email));
  };
  const check = (e) => {
    if (e.key === 'Enter') {
      setEmail(e.target.value);
      const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}(?:\.[^\s@]+)?$/;
      setIsValidEmail(emailRegex.test(email));
    }
  };

  const fEed = (e) => setFeedback(e.target.value);

  const pHone = (e) => {
    const input = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (/^[6789]\d{0,9}$/.test(input)) { // Validate that phone number starts with 6, 7, 8, or 9 and has maximum length of 10
      setPhone(input);
      setIsValidPhoneNumber(true);
    } else {
      setIsValidPhoneNumber(false);
    }
  };

  const handleSubmit = async () => {
    if (name.length < 3) {
      toast.error('Name is too short!', { autoClose: 3000 });
      return;
    }
    if (!isValidEmail) {
      toast.error('Enter a valid email');
      return;
    }
    if (!email) {
      toast.error('Enter valid email');
      return;
    }
    if (phoneno.length < 10 || phoneno.length > 10) {
      toast.error('Enter valid mobile number');
      return;
    }
    if (!feedback) {
      toast.error('Enter Feedback');
      return;
    }
    if (!isCaptchaVerified) {
      toast.error('Please complete Captcha');
      return;
    }

    setSubmit(true);
    setEmail('');
    setName('');
    setPhone('');
    setFeedback('');
    try {
      const res = await axios.post(`http://localhost:8081/api/v1/auth/feedback`, {
        name,
        email,
        phoneno,
        feedback,
      });
      console.log(res);

      if (res.data.success) {
        toast.success('Feedback submitted successfully');
        setSubmit(false);
      } else {
        console.log('fail');

        setSubmit(false);
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      setSubmit(false);
      toast.error('Something went wrong!');
    }
  };

  return (
    <>
      {submitted ? (
        <h1>hi</h1>
      ) : (
        <>
          <div className="boxing">
            <div className="boximg">
              <img src="https://images.pexels.com/photos/6935187/pexels-photo-6935187.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </div>

            <div className="forms" id="forms">
              <center>
                <h1>Feedback</h1>
              </center>
              <input type="text" onChange={nAme} value={name} placeholder="Name" />
              <input
                type="email"
                id="email"
                placeholder="Enter Your Mail"
                value={email}
                onKeyUp={check}
                onChange={eMail}
                style={{ borderColor: isValidEmail ? 'initial' : 'red' }}
              />
              {!isValidEmail && (
                <span className="validemail" style={{ color: 'red' }}>
                  Please enter a valid email address.
                </span>
              )}

              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Flag countryCode="IN" style={{ marginRight: '8px' }} /> {/* Change country code as needed */}
                <PhoneInput
                  type="text"
                  id="phone"
                  value={phoneno}
                  placeholder="Enter Phone Number"
                  onChange={pHone}
                  maxLength={10}
                  country="IN"
                  style={{ borderColor: isValidPhoneNumber ? 'initial' : 'red' }}
                />
              </div>
              {!isValidPhoneNumber && (
                <p style={{ color: 'red' }}>Please enter a valid phone number with up to 10 digits.</p>
              )}
              <textarea
                id="textarea"
                onChange={fEed}
                value={feedback}
                placeholder="Your Message"
                name="textarea"
                rows="8"
                cols="50"
              ></textarea>

              <ReCAPTCHA className="captcha" sitekey="6Lcewa4pAAAAAAU17wtRvHROv0COVcLCFircmr4z" onChange={checked} />

              <center>
                {submit ? (
                  <ClipLoader color="green" size={17} />
                ) : (
                  <button id="button" onClick={handleSubmit}>
                    SUBMIT
                  </button>
                )}
              </center>
            </div>
          </div>
          <Toaster />
        </>
      )}
    </>
  );
};

export default Feedback;
