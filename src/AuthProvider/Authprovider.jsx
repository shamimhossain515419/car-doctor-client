import { createContext, useEffect, useState } from "react";

export const AuthContext =createContext(null);

import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const Authprovider = ({children}) => {
 const [user,setUser]=useState()
 const [loader,serloader]=useState(true)
const auth=getAuth(app)
const googleProvider= new GoogleAuthProvider();
   const creactsingup=(email,password)=>{
           
      return createUserWithEmailAndPassword(auth,email,password); 
   }   
   const singup=(email,password)=>{
           
      return signInWithEmailAndPassword(auth,email,password); 
   }  

   const googleSing=()=>{
      return signInWithPopup(auth,googleProvider);
   }
   const LogOut=()=>{
      return signOut(auth);
   }
   
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
          setUser(currentUser);
          console.log('current user', currentUser);
          serloader(false);
          if( currentUser && currentUser.email){
            
            const loggedUser = {
                email: currentUser.email
            }
            fetch('http://localhost:5000/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(loggedUser)
            })

                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    localStorage.setItem("car-token", data.token)
                })
            }else{
                localStorage.removeItem("car-token")
            }
          
      });
      return () => {
          return unsubscribe();
      }
  }, [])

  
 const userinfo={
     creactsingup,
     singup,
     user,
     LogOut,
     loader,
     googleSing
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