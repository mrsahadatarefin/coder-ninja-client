import React from "react";
import { createContext } from "react";
import{createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
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
const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password )
}
const singIN = (email,password)=>{
return signInWithEmailAndPassword(auth,email,password);
} 

  
  const logOut =()=>{
    return  signOut(auth);
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
  
    const authInfo = { user ,providerLogin,logOut,createUser,singIN};

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
