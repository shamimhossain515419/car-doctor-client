
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ServicesCard = ({ services }) => {
     const { price, img, title,_id } = services
     return (
          <div>
               <div className="card  bg-base-100  shadow">
                    <figure className=' px-3 mt-3 rounded-md'><img  src={img} className=" h-48  rounded" alt="Shoes" /></figure>
                    <div className="card-body items-center ">
                         <div>
                         <h2 className="card-title">{title}</h2>
                         <div className=" flex justify-between items-center">
                         <p className=" text-[#FF3811] font-semibold  text-base"> Price: ${price}</p>

                         <Link to={`/book/${_id}`} className='  cursor-pointer text-[#FF3811]'> <FaArrowRight ></FaArrowRight> </Link>
                     </div>
                         </div>
                    </div>
                   
               </div>
              
          </div>
     );
};

export default ServicesCard;