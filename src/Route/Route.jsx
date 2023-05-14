import { createBrowserRouter } from "react-router-dom";
import Main from "../Loyout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Login/Login";
import Ragister from "../Login/Ragister";
import Booking from "../Pages/Booking/Booking";
import Bookings from "../Pages/Bookings/Bookings";
import Private from "../PriveteRoute/Private";


const Route = createBrowserRouter([
     {
          path:'/',
          element:<Main></Main>,
          children:[
               {
                 path:'/',
                 element:<Home></Home>   
               },
               {
                 path:'/login',
                 element:<Login></Login>   
               },
               {
                 path:'/ragistation',
                 element:<Ragister></Ragister>   
               },
               {
                 path:'/booking',
                 element: <Private> <Bookings></Bookings>  </Private>  
               },
               {
                 path:'/book/:id',
                 element: <Private> <Booking></Booking> </Private>,
                 loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)   
               }
          ]
     }
])

export default Route;