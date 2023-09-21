import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAEuDo3MA0s2RlSt4J1Z7ArN6LuK306KJo",
  authDomain: "react-authentication-b1401.firebaseapp.com",
  projectId: "react-authentication-b1401",
  storageBucket: "react-authentication-b1401.appspot.com",
  messagingSenderId: "241034984861",
  appId: "1:241034984861:web:184735fae681124dba8374",
  measurementId: "G-5CG85BS3SC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;