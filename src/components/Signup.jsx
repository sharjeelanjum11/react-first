import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link ,useNavigate} from "react-router-dom";
import { message } from 'antd';
import "./Signup.css"
import logo from "./logo.png";

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop:"80px",
    display: 'flex',
    flexDirection: 'column',
    width:'100vw',
    maxWidth: '25vw',
    margin: 'auto',
    backgroundColor:'lightyellow',
    // border:"1PX SOLID gray",
    borderRadius:"10px",
    padding:"10px",
  

 
    '& > *': {
      margin: theme.spacing(1),
    },
    "& .MuiInputBase-input": {
      color: "black",
      fontSize:"12pt",
    },
    "& .MuiInputLabel-root": {
      color: "black",
      fontSize:"12pt",
    },
  },
  input:{
    borderBottom:"1px solid skyblue",
   
    '&::focused': {
    
  }

  },
  button: {
    width:"30%",
    margin:"auto",
    marginTop: theme.spacing(1.5),
    borderRadius:"2px",
    fontWeight:"bolder",
    backgroundColor: 'rgb(255, 123, 0)',
    color:"black",  '&:hover': {
      backgroundColor: 'rgb(51, 51, 50);',
      color:"white",
    },
     
    
  }, 
}));

const Signup = () => {
  document.title=("Signup")
  const classes = useStyles();
  const [_id, setCnic] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [dob, setDob] = useState('04/04/2004');
  const balance = 0;
  const account_type= "current";


  const handleCnicChange = (event) => {
    setCnic(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

 

  const handlePassChange = (event) => {
    setPass(event.target.value);
  };
  const handleDobChange = (event) => {
    setDob(event.target.value);
  };

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleRegister = () => {
    const age = calculateAge();
    if (age > 18) {
      const data = { _id, name, email,password, dob,accountDetail:{balance,account_type},amount:20 };
      axios.post('http://localhost:8000/signup', data)
        .then((res) => {
          // Handle success
          message.success(res.data.message);
        })
        .catch((error) => {
          // Handle error
          message.error('Registration failed');
        });
    } else {
      message.warning('User must be 18 or older to register');
    }
  };

  return (
    <>
    <h1>PayLux</h1>
    <div className="formd">
    <form className={classes.form}>
  <img src={logo} alt="logo" height="90px" width="90px" style={{margin:"auto"}}/>
      <h1>Open Account</h1>
         <TextField className={classes.input}  label="Phone" value={_id} color="secondary" onChange={handleCnicChange} />
     
      <TextField className={classes.input} label="Name" value={name} onChange={handleNameChange} />
      <TextField className={classes.input} label="Email" value={email} onChange={handleEmailChange} />
      <TextField className={classes.input} label="Password" value={password} type="password" onChange={handlePassChange} />
      <TextField className={classes.input} type="date" placeholder='DOB'  value={dob} onChange={handleDobChange} />
      <Button className={classes.button} variant="contained"  onClick={handleRegister}>Register</Button>
      <Link to="/login">Already Signup? Login</Link>
    </form>
    </div>
   </>
  );
};

export default Signup;
