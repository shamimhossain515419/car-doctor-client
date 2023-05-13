import { useContext } from "react";
import { AuthContext } from "../AuthProvider/Authprovider";


const Private = ({children}) => {

 const {user,loader}=useContext(AuthContext);
 
 if(loader==true){
      return  <div className=" h-screen w-full  flex justify-center items-center">
          <button className="btn loading">loading</button> 
      </div>
      
 }

  
 if(user){
      return children
 }
     return (
          <div>
              {children} 
          </div>
     );
};

export default Private;