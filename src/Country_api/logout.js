import React from "react"
import image from './google_icon.png'
// import { googleSignout } from "./login";
import { useNavigate } from "react-router-dom";
import "./login.css"
const Logout = (props) => {
    const navigate=useNavigate()
    const out=()=>{
        // googleSignout()
        navigate("/")
    }
  return (
    <div className='sign-in-container'>
        <button onClick = {out} className="sign-in-button" style={{border:"1px solid ",width:"30vw"}}><img src={image} alt="Google" width={50}/>Google Signout</button>
    </div>
    
  )
};

export default Logout;
