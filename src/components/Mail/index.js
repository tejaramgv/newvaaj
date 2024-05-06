import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { css } from '@emotion/react';
import {  GridLoader } from 'react-spinners';
import { TextField, Button, Typography, Grid } from '@mui/material';

function Mail({onNext,job}) {
  
  const [otp, setOTP] = useState(['', '', '', '']);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}(?:\.[^\s@]+)?$/;
  const [isValidEmail, setIsValidEmail] = useState(null);
  const [mail,setMail]=useState("")
  const[submit,setSubmit]=useState(false)
  const [gotp,setOtp]=useState()

  const email=(e)=>{setMail(e.target.value)
setIsValidEmail(emailRegex.test(mail));}
  const handleOTPChange = (index) => (event) => {
    const { value } = event.target;
    // Accept only digits
    if (/^\d*$/.test(value)) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);
      // Move focus to next box on filling current box
      if (value !== '' && index < 3) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };


//OTP
const sendotp=async()=>{
    setSubmit(true)
  
    const generatedotp = Math.floor(1000 + Math.random() * 9000);

    setOtp(generatedotp)
    try{
    
        const res = await axios.post(`http://localhost:8081/api/v1/auth/send-otp`, { generatedotp,mail });
        console.log(res)
        if(res.data.success){
            toast.success(`OTP sent to ${mail}` )
            setSubmit(false)
            setIsValidEmail(null)
           
        
        }
        else{
            toast.error("OTP not Send!")
         
            
        }


    }
    catch(e){
 toast.error("Something Went Wrong!")
 setIsValidEmail(null)
    }
}
const handleSubmit = async() => {
  
    const enteredOtp=otp.join('');
  setOTP(["","","",""])
    if (gotp === parseInt(enteredOtp)) {
      try{
      const response=await axios.post('http://localhost:8081/api/v1/auth/applied',{mail,job})
     
      if(!response.data.success){
        onNext({"Email":mail})
        
      }
      else{
        toast.success("Already Applied!")
      }
    
    
    }
    catch(e){
console.log(e)
    }}
    else{
        toast.error("Enter a Valid OTP!")
     
    }
   

  }
 
  
  

  return (
    <Grid container justifyContent="center">

      <Grid item xs={12} sm={6}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Enter Email"
                variant="outlined"
                value={mail}
                onChange={email}
                onKeyUp={email}
              />
              {isValidEmail===false && <Typography color={"red"} variant={1}>Enter a valid Email</Typography>}
            </Grid>
            <Grid item xs={12}>
          {!submit?(  <center> <Button onClick={sendotp} disabled={isValidEmail===null || isValidEmail===false}  variant="outlined" color="warning">
                Get OTP
              </Button></center>):(<center><GridLoader color={"blue"} size={8}/></center>)}
            </Grid>
            <Grid item xs={12}>
              <Typography>Enter Otp</Typography>
              <Grid container spacing={1}>
                {otp.map((digit, index) => (
                  <Grid key={index} item xs={3}>
                    <TextField
                      fullWidth
                      id={`otp-${index}`}
                      variant="outlined"
                      value={digit}
                      onChange={handleOTPChange(index)}
                      inputProps={{ maxLength: 1 }}
                      type="tel" // For mobile keyboard to show digits
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12}>
         <center> <Button  disabled={otp[0]===""} onClick={handleSubmit} variant="contained" color="primary">
                Next
              </Button></center>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Toaster/>
    </Grid>
  );
}

export default Mail;
