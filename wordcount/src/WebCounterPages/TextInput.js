import React from 'react';
import '../App.css';
const TextInput=({onTextChange})=>{
    const changeText=(event)=>{
        const text=event.target.value;
        onTextChange(text)
    };
    return(
        <>
        
        <div className=''>
          <textarea  className='textArea'
          onChange={changeText} 
          placeholder="Please Enter the Text">
    
          </textarea>
        </div>
    </>
         
    )
}
export default TextInput;