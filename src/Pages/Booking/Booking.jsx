import { useLoaderData } from "react-router-dom";
import Footer from "../../Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/Authprovider";


const Booking = () => {
     const { user } = useContext(AuthContext);
     

     const loadData = useLoaderData();
    
     const { title, price,_id ,img} = loadData
     const handleBookService = (event) => {
          event.preventDefault();
          const form=event.target;
          const name = form.name.value;
          const date = form.date.value;
          const email = user?.email;
          
          const booking={
               coustomarName:name,
               email,
               date,
               img,
               title,
               services_id:_id,
               price:price
               
          }
          console.log(booking);
          fetch('http://localhost:5000/bookings', {
               method: 'POST', 
               headers: {
                   'content-type': 'application/json'
               }, 
               body: JSON.stringify(booking)
           })
           .then(res => res.json())
           .then(data => {
               console.log(data);
               if(data.insertedId){
                   alert('service book successfully')
               }
           })
       }

     return (
          <div>
               <div>
                    <h2 className='text-center text-3xl'>Book Service: {title} </h2>
                    <form onSubmit={handleBookService}>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Name</span>
                                   </label>
                                   <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Date</span>
                                   </label>
                                   <input type="date" name="date" className="input input-bordered" />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Email</span>
                                   </label>
                                   <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Due amount</span>
                                   </label>
                                   <input type="text" defaultValue={'$' + price} className="input input-bordered" />
                              </div>
                         </div>
                         <div className="form-control mt-6">
                              <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                         </div>
                    </form>
                    <div className="card-body">

                    </div>
               </div>



               <Footer></Footer>
          </div>
     );
};

export default Booking;