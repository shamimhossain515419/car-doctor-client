import { createContext, useEffect, useState } from "react";

export const AuthContext =createContext(null);

import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
const Authprovider = ({children}) => {
 const [user,setUser]=useState(null)
 const [loader,serloader]=useState(true)
const auth=getAuth(app)

   const creactsingup=(email,password)=>{
           
      return createUserWithEmailAndPassword(auth,email,password); 
   }   
   const singup=(email,password)=>{
           
      return signInWithEmailAndPassword(auth,email,password); 
   }  

   const LogOut=()=>{
      return signOut(auth);
   }
   
  useEffect(()=>{
    const unsubcript=onAuthStateChanged(auth,currentusr=>{
      setUser(currentusr)
      serloader(false)

    }) 
   return unsubcript();
  },  [])

  
 const userinfo={
     creactsingup,
     singup,
     user,
     LogOut,
     loader
 }

     return (
          <div>
            <AuthContext.Provider value={userinfo}>
            {children}     
          </AuthContext.Provider>  
          </div>
     );
};

export default Authprovider;