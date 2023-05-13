import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {

     const [services, setServices] = useState([]);

     useEffect(() => {
          fetch("http://localhost:5000/services").then(res => res.json())
               .then(data => setServices(data));

     }, [])

     
     return (
          <div className=" mt-4">
               <div className="text-center">
                    <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
                    <h2 className="text-5xl">Our Service Area</h2>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
               </div>
               <div className=" grid md:grid-cols-3 gap-4  mt-10">
                    
                    {
                         services.map(service=> <ServicesCard key={service._id} services={service}></ServicesCard>)
                    }
               </div>
               <button className="btn mt-7 block mx-auto btn-outline btn-secondary">More Services</button>
          </div>
     );
};

export default Services;