import React,{createContext,useContext,useState} from 'react';
const SettingContext=createContext();

export const SettingsProvider=({children})=>{
    
    const [backgroundColor,setBackgroundColor]=useState("#fffff");
    const changeBackgroundColor=(color)=>{
        setBackgroundColor(color);
    }
    return(
        <SettingContext.Provider 
        value={{backgroundColor,changeBackgroundColor}}>
            {children}
            </SettingContext.Provider>
    )

}
export const useSettings=()=>{
    return useContext(SettingContext);
};