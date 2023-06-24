import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from '@firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyABh52-gI4OYupkQDJ6tTWeJbhsguw43Cc",
    authDomain: "fir-tutorial-30174.firebaseapp.com",
    projectId: "fir-tutorial-30174",
    storageBucket: "fir-tutorial-30174.appspot.com",
    messagingSenderId: "1017466645176",
    appId: "1:1017466645176:web:30848f587ddce8264e224d",
    measurementId: "G-XN1H9PRH00"
  };

const app = initializeApp( firebaseConfig );
export const provider = new GoogleAuthProvider();
export const auth = getAuth (app);