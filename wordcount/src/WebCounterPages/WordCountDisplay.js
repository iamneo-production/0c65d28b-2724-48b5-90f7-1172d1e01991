import React from 'react';
import "../App.css";
const  WordCountDisplay=({wordCount})=>{
    return(
        <>
        <p className='wordCount'>Word Count:{wordCount}</p>

        </>
    )
}
export default WordCountDisplay;