import React,{createContext,useContext,useState} from 'react';
const SettingContext=createContext();

export const SettingsProvider=({children})=>{
    const [wordCountEnabled,setWordCountEnabled]=useState(true);
    const [backgroundColor,setBackgroundColor]=useState("#fffff");
    const toggleWordCount=()=>{
        setWordCountEnabled(!wordCountEnabled)
    }
    const changeBackgroundColor=(color)=>{
        setBackgroundColor(color);
    }
    return(
        <SettingContext.Provider 
        value={{wordCountEnabled,toggleWordCount,backgroundColor,changeBackgroundColor}}>
            {children}
            </SettingContext.Provider>
    )

}
export const useSettings=()=>{
    return useContext(SettingContext);
};