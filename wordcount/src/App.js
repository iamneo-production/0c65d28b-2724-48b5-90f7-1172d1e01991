
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
    <div className="App">
    
      <SettingsProvider>

      <BrowserRouter>
    
        <div>
          <nav class="navbar navbar-expand-lg bg-info ">
            <div class="container-fluid">
              <a class="navbar-brand text-danger"  href="WordCount">
                WordCount
              </a>
            </div>
            <form class="d-flex">
              <button class="btn btn-success  me-2 " type="button">
                <Link to="/api/wordcount" class="text-light text-decoration-none">
                  WordCount
                </Link>
              </button>
              &nbsp;
              <button class="btn btn-success  me-2" type="button">
                <Link to="/api/stats" class="text-light text-decoration-none">
                 Statistics
                </Link>
              </button>
              &nbsp;
              <button class="btn btn-success  me-2" type="button">
                <Link to="/api/word" class="text-light text-decoration-none">
                  Words
                </Link>
                </button>
                &nbsp;
                <button class="btn btn-success  me-2" type="button">
                <Link to="/api/settings" class="text-light text-decoration-none">
                  Settings
                </Link>
                &nbsp;

              </button>
              <button class="btn btn-success  me-2" type="button"onClick={handleLogout}>
                <Link to="/login" class="text-light text-decoration-none">
                  Logout
                </Link>
                &nbsp;

              </button>

            </form>
          </nav>
          </div>
    
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
