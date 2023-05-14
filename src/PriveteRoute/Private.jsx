import { useContext } from "react";
import { AuthContext } from "../AuthProvider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";


const Private = ({children}) => {

const location=useLocation();
 const {user,loader}=useContext(AuthContext);

 if(loader==true){
      return  <div className=" h-screen w-full  flex justify-center items-center">
          <button className="btn loading">loading</button> 
      </div>
      
 }

  
 if(user){
      return children
 }

 return <Navigate to={'/login'}  state={{ from: location }} replace></Navigate> 
};

export default Private;