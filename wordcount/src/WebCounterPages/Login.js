import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {Button} from 'reactstrap';
import axios from "axios";
import '../App.css';


import "../App.css"

const Login=()=>{
    const intialValues={
        email:"",
        password:""
    }
      
    const navigate=useNavigate();
    const [user,setUser]=useState(intialValues)
    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
   
    
    const [emailError,setEmailError]=useState("");
    const [passwordError,setPasswordError]=useState("")
    const [error,setError]=useState("")

    useEffect(()=>{

        const emailPattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        console.log(user.email)
        if(!emailPattern.test(user.email)){
            console.log("error")
            setEmailError("please Enter a valid Email address")
        }
        else{
            setEmailError("");
        }



        if(user.password<8){
            setPasswordError("Password Must be atleast 8 characters")
        }
        else{
            setPasswordError("");
        }


},[user.email,user.password])

    
    
   
    
    const handleLoginSubmit=(e)=>{
        e.preventDefault();
        if(!user.email&&!user.password) return ; 
        
        
        
         
        
        
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("submit clicked")
        console.log(user.email)
        console.log(user.password)
        if(user.email.includes("@")&&user.password.length>8){
            const userData={
                "email":user.email,
                "password":user.password
             }
               
             
             
             axios.post("https://ide-efffdadfafcbfaafddfcbfaadefadbfbcbbabacefb.project.examly.io/proxy/8080/User",userData)
             .then((res)=>{
                 console.log(res)
             
             })
             .catch((error)=>{
                 console.log(error)
     
             })
            
            localStorage.setItem('authToken','yourAuthToken Is Here') 

            navigate('/api/wordcount')      
            setUser(intialValues)
            setEmailError("");
            setPasswordError("")
            setError("")

        }
        else{
            setError("Please Enter Valid Email and Password ")
        }

    }
    

    return(
        <>
            <h1 class="fs-3 m-3 fw-semibold"> Get Started</h1>  
            <form  className="form" onSubmit={handleLoginSubmit}>
            <input  className="input" type="text"  name="email"  required placeholder="Enter the Email" onChange={handleChange} />
            {emailError&&<p class="text-danger">{emailError}</p>}
              <br/> 
                <input className="input" type="password"  name="password" required placeholder="Enter the Password" onChange={handleChange} />
                {passwordError&&<p class="text-danger">{passwordError}</p>}
              <br/>
                <Button  class="btn" color="success" type="submit" onClick={handleSubmit}>Login</Button>
                {error&&<p class="text-danger">{error}</p>}

             </form>
        
        </>
    )

}
export default Login;

