import { useNavigate } from 'react-router-dom';
import {signInWithGooglePopup} from '../firebase'
import image from './google_icon.png'
import "./login.css"
import firebase from 'firebase/compat/app';
const SignIn = () => {
    const navigate=useNavigate()
    const logGoogleUser = async () => {
            const response = await signInWithGooglePopup();
            console.log(response);
            navigate("/Country")
        }
    return (
            <div className='sign-in-container'>
                <button onClick={logGoogleUser} className="sign-in-button"><img src={image} alt="Google" width={50}/>Continue With Google</button>
            </div>
        )
    }
    export default SignIn;


    export function googleSignout() {
        firebase.auth().signOut()
         
        .then(function() {
           console.log('Signout Succesfull')
        }, function(error) {
           console.log('Signout Failed')  
        });
      }
