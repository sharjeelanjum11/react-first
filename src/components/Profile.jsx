import React,{useEffect,useState} from 'react';
import "./Profile.css";
import { BrowserRouter as Router, Routes, Link, Route,useNavigate } from "react-router-dom";
import { AiOutlineHome,AiOutlineSetting,AiOutlineTransaction,AiOutlineLogout } from 'react-icons/ai';

import { MdPayments,MdHelpCenter } from "react-icons/md";
import axios from 'axios';
import { message } from 'antd';
import { blue } from '@material-ui/core/colors';



const Profile = () => {






  function handlelogout () {
    // Delete the token from local storage
    localStorage.removeItem('token');
  
    // Perform any other necessary sign out actions, such as redirecting to the sign in page
    window.location.href = '/';
  }






  const [Amount,setAmount]=useState(0)
  const [Name,setName]=useState("name")
  const [Account,setAccount]=useState("number")
  const[auth,setAuth]=useState(false)
  const getUserdata= async()=>{
  try {
    const res= await axios.post('http://localhost:8000/profile',{},{headers:{Authorization: "Bearer " + localStorage.getItem("token"),},})
    message.success(res.data.message)




    console.log(res.data.message)
    setAmount( res.data.data.amount);
    setName( res.data.data.name);
    setAccount( res.data.data._id);
    setAuth(true)
  
    
  } catch (error) {
    console.log(error);
  }
  }
  
  
  useEffect(()=>{
    getUserdata();
  
  },[])
  
    const navigate= useNavigate;













  return (
    <>
<div className="maind">

<div className="leftdiv" >
  
  <ul>
    <li><Link to="/"><AiOutlineHome color="red" className='icony' />  Home</Link></li>
    <li><Link to="smoney"><MdPayments color="red"className='icony' />    Payment</Link></li>
    <li><Link to="trans"><AiOutlineTransaction color="green"className='icony' />    Transactions</Link></li>
    <li><Link to="setting"><AiOutlineSetting color="#00A36C" className='icony'/>    Setting</Link></li>
  </ul>
  <ul className="botlist">
   
    
   { auth && <li onClick={handlelogout}><Link to="#"><AiOutlineLogout  color="red" className='icony'/>   Logout</Link></li>}
   { !auth && <li ><Link to="/login"><AiOutlineLogout  color="red" className='icony'/>   Login</Link></li>}
    <li><Link to="setting"><MdHelpCenter color="red" className='icony'/>    Help</Link></li>
  </ul>
</div>
<div className="rightdiv">

<div className="inerright">{auth && <h1>current balanac is : {Amount}</h1>}</div>

 

</div>


</div>
    </>
  );
};

export default Profile;



















{/* <div className="maind">
      <div className="sidediva">
        <div className="logo">
          <h1>PayLux</h1>
        </div>
        <div className="profavat">.....................</div>
        <div className="navs">
          <Link to="/">Home</Link>
          <Link to="/signup">Transactions</Link>
          <Link to="/payments">Payments</Link>
          <Link to="/payments">Settings</Link>
        </div>
        <div className="botlinks">
          <Link to="/help">Help</Link>
          <Link to="#">Logout</Link>
        </div>
      </div>

      <div className="areaprof">
        <div className="balance">
          <h3>Total balnce</h3>
          <h1>67888$</h1>
        </div>
      </div>
    </div> */}