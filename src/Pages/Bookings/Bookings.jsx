import { useContext, useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import { AuthContext } from "../../AuthProvider/Authprovider";
import BookingRow from "./BookingRow";


const Bookings = () => {

  const { user } = useContext(AuthContext);

  const [bookings, serbookings] = useState([]);
  
  useEffect(() => {
    const Url = `http://localhost:5000/booking?email=${user?.email}`
    fetch(Url).then(res => res.json()).then(data => {
      serbookings(data);
      console.log(data);
    })

  }, [])

  const handleDelete=(id)=>{
    console.log(id);
     fetch(`http://localhost:5000/bookings/${id}`, {
       method:"DELETE",
     }).then(res=>res.json())
     .then(data=>{
        console.log(data);
      if(data.deletedCount >0){
         const fintbooking=bookings.filter(book=> book._id !==id);
         serbookings(fintbooking);
      }

     })
     

}




const hanleConfirm=(id)=>{

   console.log(id);

   fetch(`http://localhost:5000/bookings/${id}`, {
    method:"PATCH",
     headers:{
      'content-type':'application/json'
     },
     body:JSON.stringify({statue:"confirm"})
   }).then(res=>res.json())
   .then(data=>{
     console.log(data)
      if(data.modifiedCount >0){
         const remening=bookings.filter(booking=> booking._id !==id);
         const updatedata=bookings.find(booking=> booking._id ==id);
         updatedata.statue="confirm";
         const newbooking=[updatedata, ...remening];
         serbookings(newbooking)
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