// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbSCGa5LfHmcJfq2oRZPd9o8mZJpwouVU",
  authDomain: "prueba-con-react-1f5b8.firebaseapp.com",
  projectId: "prueba-con-react-1f5b8",
  storageBucket: "prueba-con-react-1f5b8.appspot.com",
  messagingSenderId: "1056991506327",
  appId: "1:1056991506327:web:8fe23a589539695a7c9ed2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
