import {useState,useEffect} from 'react';
import axios from 'axios';

import TextInput from './TextInput';
import WordCountDisplay from './WordCountDisplay';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'reactstrap';
import { useSettings } from './SettingContext';
import "../App.css";


const WordCount=()=>{
  const {backgroundColor}=useSettings();
  const [text,setText]=useState('');


  const [wordCount,setWordCount]=useState(0);
  const ele=text.split(/\s+/);
  console.log(ele)
  const uniqueWordsSet=new Set(ele)
  const unique=Array.from(uniqueWordsSet)
  
  
  useEffect(()=>{
    axios.get("https://ide-efffdadfafcbfaafddfcbfaadefadbfbcbbabacefb.project.examly.io/proxy/8080/wordcount")
    .then(response=>{
      setWordCount(response.data.wordCount)
    })
    .catch(error=>{
      console.error("Error fetching word Count:",error);
    });
  },[])
 
 
  
  const handleTextChange=(text)=>{
    setText(text)
  }

  
  const handleSubmit=()=>{
    axios.post("https://ide-efffdadfafcbfaafddfcbfaadefadbfbcbbabacefb.project.examly.io/proxy/8080/wordcount",{text:text,wordCount:calculateWordCount(text),uniqueWords:unique })
    .then(response =>{
      setWordCount(response.data.wordCount);
    })
    .catch(error=>{
      console.error("Error submitting text",error)
    })
    

  }
  const calculateWordCount=(text)=>{
    const words=text.split(" ")
    let wordCount=0;
    words.forEach((word)=>{
      
      if(word.trim()!==""){
        wordCount++;
      }
    })
    return wordCount;

  }
  

  

    return(
        <div style={{backgroundColor}}>
          <TextInput onTextChange={handleTextChange}/>
          <WordCountDisplay  wordCount={wordCount}/>
          <Button  color="success"onClick={handleSubmit}>Calculate WordCount</Button>
          &nbsp;
          
    </div>
        
    )

}
export default WordCount;