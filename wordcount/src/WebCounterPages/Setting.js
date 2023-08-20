import  {useSettings} from './SettingContext';
import '../App.css';

const Settings=()=>{
    const {changeBackgroundColor}=useSettings();
    const handleColorChange=(event)=>{
        const newColor=event.target.value;
        changeBackgroundColor(newColor)
    }
    return(
        <div>
         <h1 className="heading">Welcome to settings Page</h1>
         <label className="content">
            BackgroundColor:
            <input  type="color" onChange={handleColorChange}/>
         </label>
        </div>

    )
}
export default Settings;