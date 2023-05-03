/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from  '../../assets/logo.png'
import { AuthContext } from "../../contexts/AuthProvider";



const Header = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleLogOut=()=>{
    logOut().then().catch((error) => {
      console.log(error)
    })
  }
  return (
    <div className="bg-gray-800 sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between text-white">
        <img className="h-16" src={logo} />
        <ul className="font-semibold flex gap-8">
            <Link to='/'>Home</Link>
            <Link to='/blog'>Blog</Link>
        </ul>
        <div className="flex gap-4 items-center">
        {user?.photoURL ? <img className="rounded-full h-12"  src={user?.photoURL} alt="" title={user?.displayName}/> : <span>{user?.email}</span>}
        
       { user ? <div>
        <button onClick={handleLogOut} className="btn normal-case">LogOut</button>
      </div> :  <Link to='/login'><button className="btn normal-case">Login</button></Link>
       }
       </div>
        

       
      </div>
    </div>
    
  );
};

export default Header;
 