
import { useContext } from 'react';
import {  FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/Authprovider';
import { useNavigate } from 'react-router-dom';
const Socalloginpage = () => {

const {googleSing}=useContext(AuthContext);
const navigate=useNavigate();
     const handleGooglesing=()=>{
          googleSing().then(result=>{
                console.log(result.user);
                if(result.user){
                    navigate('/')
                }
          }).then(error=>{
                console.log(error);
          })
     }


     return (
          <div className=" text-center mx-auto">
          <div className="divider">OR</div>
           
            <div className='  flex gap-5 my-1'>
               <FaGoogle onClick={handleGooglesing} className=' text-[#FBBD00]  cursor-pointer'></FaGoogle>
               <FaGithub className=' cursor-pointer'></FaGithub>
               <FaFacebook className=' text-[#1540ff]  cursor-pointer'></FaFacebook>
            </div>
          </div>
     );
};

export default Socalloginpage;