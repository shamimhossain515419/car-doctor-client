import { Link } from "react-router-dom";
import logo from '../../src/assets/logo.svg'
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/Authprovider";

const Navbar = () => {

const { LogOut, user ,loader } = useContext(AuthContext);

 const handleLogout = () => {
          console.log("shamim");
          LogOut()
          .then(result=>{
             if(result){
               alert("LogOut success")
             }
             alert("LogOut success")
            
          })
          .catch(error=>{
                console.log(error.massage);
          })
     }


     const [isOpen, setIsOpen] = useState(false);
    if(loader){
      return <p> loading ....</p>
    }
     return (

          <div className="">
               <nav className=" flex items-center   justify-between      p-6">
                    <div className="flex items-center flex-shrink-0 text-white mr-6 md:mr-32">
                         <img src={logo} className="w-100 h-10 mr-2" alt="Logo" />
                    </div>
                    <div className="block md:hidden">
                         <button
                              onClick={() => setIsOpen(!isOpen)}
                              className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
                         >
                              <svg
                                   className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                                   viewBox="0 0 20 20"
                                   xmlns="http://www.w3.org/2000/svg"
                              >
                                   <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                              </svg>
                              <svg
                                   className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                                   viewBox="0 0 20 20"
                                   xmlns="http://www.w3.org/2000/svg"
                              >
                                   <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                              </svg>
                         </button>
                    </div>
                    <div
                         className={`w-full block flex-grow md:flex md:items-center ${isOpen ? "block" : "hidden"}`}
                    >
                         <div className=" text-xs md:flex-grow">
                              <Link to={'/'} className="block mt-4 font-semibold  text-sm  md:inline-block md:mt-0 text-white-200 mr-4">
                                   Home
                              </Link>
                              <Link to={'/about'} className="block font-semibold mt-4 md:inline-block  text-sm md:mt-0 text-white-200 mr-4">
                                   About
                              </Link>
                              <Link to={'/services'} className="block  text-sm font-semibold mt-4 md:inline-block md:mt-0 text-white-200 mr-4">
                                   Services
                              </Link>
                              <Link to={'/blog'} className="block mt-4 font-semibold  text-sm md:inline-block md:mt-0 text-white-200 mr-4">
                                   Blog
                              </Link>
                              <Link to={'/contact'} className="block mt-4   text-sm font-semibold md:inline-block md:mt-0 text-white-200 mr-4">
                                   Contact
                              </Link>
                         </div>
                         
                         <div>
                                   {
                                        user?.email ? <> <Link     to={'/booking'}className="block mt-4 font-semibold    text-sm md:inline-block md:mt-0 text-white-200 mr-4">
                                              bookings
                                        </Link> 
                                        <Link onClick={handleLogout} className="block mt-4 font-semibold  text-sm md:inline-block md:mt-0 text-white-200 mr-4">
                                             LogOut
                                        </Link> </> : <Link to={'/login'} className="block mt-4 font-semibold md:inline-block  text-sm  md:mt-0 text-white-200 mr-4">
                                             Login
                                        </Link>

                                   }
                              </div>
                         <div>

                              <button className="btn btn-outline py-1 text-[#FF3811]">Appointment</button>
                         </div>
                    </div>
               </nav>
          </div>
     );
};

export default Navbar;