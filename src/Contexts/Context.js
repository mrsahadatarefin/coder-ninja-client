
import React from "react";
import { createContext } from "react";
import { getAuth, signInWithPopup } from "firebase/auth";
import App from "../App";

export const authContext = createContext();
const auth =getAuth(App)
const Context = ({ children }) => {
    const user = {display:"shuvo"}
    const ProviderLogin =(Provider)=>{
    return signInWithPopup(auth,Provider);    
    }

    const authInfo={user,ProviderLogin}
  return <authContext.Provider>
    {children}
    </authContext.Provider>;
};

export default Context;
