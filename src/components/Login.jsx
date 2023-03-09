import React, { useState } from 'react';
import axios from 'axios';
import { Link ,useNavigate} from "react-router-dom";
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { message } from 'antd';
import "./Signup.css"
import { AiOutlineUser } from 'react-icons/ai';

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
    backgroundColor: 'ORANGE',
    color:"black",  '&:hover': {
      backgroundColor: 'LIGHTBLUE',
    },
     
    
  }, 
}));

const Login = () => {
  document.title=("Login")
  const navigate=useNavigate()
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');





  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

 

  const handlePassChange = (event) => {
    setPass(event.target.value);
  };


  const handleRegister = () => {
    const data = {email,password};
    axios.post('http://localhost:8000/login', data)
    .then((res)=>{
        message.success(res.data.message);
        if(res.data.success){
          localStorage.setItem("token",res.data.token);
          message.success("Login successfully");
          navigate('/');}
    }).catch((err)=>{
        message.error('Login failed');
    })
  };

  return (
    <>
    <h1>PayLux</h1>

    <div className="formd">  <form className={classes.form}>
    <AiOutlineUser size={80}  style={{margin:"auto",color:'green'}}/>
      <h1>Login Account Holder</h1>
    
      
      <TextField className={classes.input} label="Email" value={email} onChange={handleEmailChange} />
      <TextField className={classes.input} label="Password" value={password} type="password" onChange={handlePassChange} />

      <Button     className={classes.button}      onClick={handleRegister}>Login</Button>
      <Link to="/signup">Not Have An Account? Signup</Link>
    </form></div>
  </>
  );
};

export default Login;
