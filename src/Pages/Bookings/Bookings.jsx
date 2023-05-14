import { useContext, useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import { AuthContext } from "../../AuthProvider/Authprovider";
import BookingRow from "./BookingRow";
import { useNavigate } from "react-router-dom";


const Bookings = () => {

  const { user } = useContext(AuthContext);

  const [bookings, setbooking] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    const url = `http://localhost:5000/booking?email=${user?.email}`
    fetch(url, {
      method: 'GET', 
      headers: {
        authorization: `Bearer ${localStorage.getItem('car-token')}`
      },
      
  }).then(res => res.json()).then(data => {
    console.log(data.error);
    if(!data.error){
      setbooking(data);
     }
     else{
      navigate('/')
     }
      
      
    })

  }, [])

  const handleDelete=(id)=>{
    
     fetch(`http://localhost:5000/bookings/${id}`, {
       method:"DELETE",
     }).then(res=>res.json())
     .then(data=>{
        console.log(data);
      if(data.deletedCount >0){
         const fintbooking=bookings.filter(book=> book._id !==id);
         setbooking(fintbooking);
      }

     })
     

}




const hanleConfirm=(id)=>{

   

   fetch(`http://localhost:5000/bookings/${id}`, {
    method:"PATCH",
     headers:{
      'content-type':'application/json'
     },
     body:JSON.stringify({statue:"confirm"})
   }).then(res=>res.json())
   .then(data=>{
     
      if(data.modifiedCount >0){
         const remening=bookings.filter(booking=> booking._id !==id);
         const updatedata=bookings.find(booking=> booking._id ==id);
         updatedata.statue="confirm";
         const newbooking=[updatedata, ...remening];
         setbooking(newbooking)
      }
   })

}

  return (
    <div>


      <div>

        <div>
        


          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    Delete
                  </th>
                  <th>Image</th>

                  <th>Services</th>
                  <th>Date</th>
                  <th>Price</th>
                  <th>State</th>

                </tr>
              </thead>
              <tbody>

                {
                  bookings.map(book => <BookingRow key={book._id} 
                    handleDelete ={handleDelete} hanleConfirm={hanleConfirm} bookings={book}></BookingRow>)
                }


              </tbody>



            </table>
          </div>




        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Bookings;