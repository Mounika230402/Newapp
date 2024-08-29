// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWUwOKzCAFEP5g42TDKYrvybIHQ5i6XSc",
  authDomain: "country-details-3144b.firebaseapp.com",
  projectId: "country-details-3144b",
  storageBucket: "country-details-3144b.appspot.com",
  messagingSenderId: "625474815335",
  appId: "1:625474815335:web:b47d3dc0bfa7e28170dbc2"
};




initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
  

provider.setCustomParameters({   
    prompt : "select_account "
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
