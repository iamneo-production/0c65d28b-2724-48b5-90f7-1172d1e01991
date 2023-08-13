import axios from "axios"
import { useState,useEffect } from "react"
import "../App.css";
const Statistics=()=>{
    const initialValue={
        requests:0,
        averageWordCount:0
    }
    const [stats,setSats]=useState(initialValue)
    useEffect(()=>{
     axios.get("https://ide-efffdadfafcbfaafddfcbfaadefadbfbcbbabacefb.project.examly.io/proxy/8080/wordcount")
     .then((response)=>{
        const res=response.data.length;
        const avg=res/2;
        setSats({
            requests:res,
            averageWordCount:avg
        })
     })
     
    },[])

    
    return(
        <div>
        <h1 className="headings">Welcome to the Statistics page</h1>
        <p className="content">Total Requests:{stats.requests}</p>
        <p className="content">averageWordCount:{stats.averageWordCount}</p>
        </div>
        
        
    )
}
export default Statistics;