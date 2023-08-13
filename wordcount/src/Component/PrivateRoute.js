import { Outlet,Navigate } from 'react-router-dom';

const PrivateRoute=()=>{
    const isLoggedIn=!!localStorage.getItem('authToken')

    return  isLoggedIn?<Outlet/>:<Navigate to={"/login"}/>

    // return(
    //     <div>
    //         <h1>User Logged In</h1>
    //         <Outlet/>
    //     </div>
    // )
}
export default PrivateRoute;