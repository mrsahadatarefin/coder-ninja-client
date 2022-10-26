import React from "react";
import { createContext } from "react";
import{getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth'
import app from "../../Firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";
export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
  const [user,setuser]= useState(null)
    
  const providerLogin =(Provider)=>{

    return signInWithPopup(auth,Provider);
  }
  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
     console.log('user inside state change',currentUser);
     setuser(currentUser)
    })
    return()=>{
        unsubscribe() 
    }
  },[])
  
    const authInfo = { user ,providerLogin};

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
