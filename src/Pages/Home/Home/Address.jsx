import { FaCalendarAlt, FaLocationArrow, FaMapMarkerAlt } from "react-icons/fa";


const Address = () => {
     return (
          <div className="bg-[#151515]  rounded-lg  my-8 flex  justify-around items-center gap-3 text-white p-4">
                <div className=" flex items-center gap-3">
                    <FaCalendarAlt></FaCalendarAlt>
                    <div>
                         <h3> We are open monday-friday</h3>
                         <h1>7:00 am - 9:00 pm </h1>
                    </div>
                </div>
                <div className=" flex items-center gap-3">
                    <FaMapMarkerAlt></FaMapMarkerAlt>
                    <div>
                         <h3> Have a question?</h3>
                         <h1>+2546 251 2658 </h1>
                    </div>
                </div>
                <div className=" flex items-center gap-3">
                    <FaLocationArrow></FaLocationArrow>
                    <div>
                         <h3> Need a repair? our address</h3>
                         <h1>Liza Street, New York </h1>
                    </div>
                </div>
          </div>
     );
};

export default Address;