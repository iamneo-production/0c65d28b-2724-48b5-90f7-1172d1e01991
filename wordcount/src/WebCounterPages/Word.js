import axios from "axios";
import { useState,useEffect } from "react";


const Word=()=>{
    const [unique,setUnique]=useState()
    

    
    useEffect(()=>{
        axios.get("https://ide-efffdadfafcbfaafddfcbfaadefadbfbcbbabacefb.project.examly.io/proxy/8080/wordcount")
        .then((res)=>{
            const array=res.data.map(item=>item.uniqueWords);
          setUnique(array)
            
        })
    },[])
    
    return(
        <>
        <div>
            <h1 className="heading">List of Unique Words</h1>
            <p className="content-unique">{unique   +"   "}</p>
          </div>
        </>
    )
   
}
export default Word;