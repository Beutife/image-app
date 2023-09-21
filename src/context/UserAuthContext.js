import { createContext, useEffect, useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { auth } from "../FireBase";

const UserAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(null); 

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  

  
//  function logIn(email, password) {
//      return signInWithEmailAndPassword(auth, email, password);
//    }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

   
    return () => {
      unsubscribe();
    };
  }, []);


  return (
    <UserAuthContext.Provider value={{ user, signUp }}>
      {children}
    </UserAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(UserAuthContext);
}
