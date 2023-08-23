
import './App.css';
import Login from './WebCounterPages/Login';
import WordCount from './WebCounterPages/WordCount';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'; 
import PrivateRoute from './Component/PrivateRoute';
import Statistics from './WebCounterPages/Statistics';
import Word from './WebCounterPages/Word';
import Settings from './WebCounterPages/Setting';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SettingsProvider } from './WebCounterPages/SettingContext';


function App() {
  const handleLogout=()=>{
    localStorage.removeItem('authToken')
  }
  
  return (
   
    <div className='App'>
    
      <SettingsProvider>

      <BrowserRouter>
    
      
          <nav class="navbar navbar-expand-lg navbar-info bg-info">
             
              <h3 className="title">
                WordCount
              </h3>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
              
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
        <button class="nav-link btn btn-success" type="button">

               
                <Link to="/api/wordcount" class="text-light text-decoration-none m-0.5">
                  WordCount
                </Link>
                </button>
            
                <button class="nav-link btn btn-success m-1" type="button">
                <Link to="/api/stats" class="text-light text-decoration-none">
                 Statistics
                </Link>
                </button>
              
                <button class="nav-link btn btn-success m-1" type="button">
                <Link to="/api/word" class="text-light text-decoration-none">
                  Words
                </Link>  
                </button>

                <button class="nav-link btn btn-success m-1" type="button">
                
                <Link to="/api/settings" class="text-light text-decoration-none">
                  Settings
                </Link>
              
                </button>

                
                <button class="nav-link btn btn-success p-1 m-1" type="button"onClick={handleLogout}>
                <Link to="/login" class="text-light text-decoration-none">
                  Logout
                </Link>
              </button>
            
              
              </div>
          
          </div>
        
          </nav>
          
        
    
      <Routes>

        <Route  path="/login" element={<Login/>}/>
        <Route path="/api" element={<PrivateRoute/>}>
          
          <Route path="wordcount" element={<WordCount/>}/>
          <Route path="settings" element={<Settings/>}/>

        <Route path="stats" element={<Statistics/>}/>
        <Route path="word" element={<Word/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
      </SettingsProvider>
      

    </div> 
  
  );
}

export default App;
