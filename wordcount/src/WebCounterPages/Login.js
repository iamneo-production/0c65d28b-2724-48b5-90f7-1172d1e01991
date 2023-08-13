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
        
        
    },[])
   
    
    const handleLoginSubmit=(e)=>{
        e.preventDefault();
        
    
        
        
        if(!user.email&&!user.password) return ; 
        if(!emailError && !passwordError){
            alert("Login Successful");
        }

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
    }
    
    

    return(
        <div>
            <h1 class="fs-3 m-3 fw-semibold"> Get Started</h1>
            
            
        
            
            <form  className="form" onSubmit={handleLoginSubmit}>
            <input  className="input" type="text"  name="email"  required placeholder="Enter the EMail" onChange={handleChange}/>
                <span class="text-danger">{emailError}</span>
                <br/>
                <input className="input" type="password"  name="password" required placeholder="Enter the Password" onChange={handleChange} />
                <span class="text-danger">{passwordError}</span>
                <br/>
                <Button color="success" type="submit">Login</Button>
             </form>
        
        </div>
    )

}
export default Login;