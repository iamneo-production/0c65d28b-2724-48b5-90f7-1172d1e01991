import React from 'react';
const TextInput=({onTextChange})=>{
    const changeText=(event)=>{
        const text=event.target.value;
        onTextChange(text)
    };
    return(
        <>
        
        <div>
          <textarea  rows='15' cols='40' className='textArea' 
          onChange={changeText} 
          placeholder="Please Enter the Text">
    
          </textarea>
        </div>
    </>
         
    )
}
export default TextInput;