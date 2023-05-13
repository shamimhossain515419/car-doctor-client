 import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import team1 from '../../assets/images/team/1.jpg'
 import team2 from '../../assets/images/team/2.jpg'
 import team3 from '../../assets/images/team/3.jpg'

const Team = () => {
     return (
          <div className=" mt-3">
               <div className="text-center">
                    <h3 className="text-2xl font-bold text-orange-600"> Team</h3>
                    <h2 className="text-5xl">Meet Our Team</h2>
                    <p>the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which dont look even slightly believable.  </p>
               </div>

               <div className='  my-8  grid md:grid-cols-3 gap-5'>

                    <div className="card bg-base-100 shadow">
                         <figure className="px-5 pt-5">
                              <img src={team1} alt="Shoes" className="rounded-xl" />
                         </figure>
                         <div className="card-body   items-center text-center">
                              <h2 className="card-title">Car Engine Plug</h2>
                              <p>Engine Expert</p>
                              <div className="card-actions">
                                 <FaFacebook> </FaFacebook>
                                 <FaTwitter> </FaTwitter>
                                 <FaInstagram> </FaInstagram>
                                 <FaGoogle></FaGoogle>
                                 
                              </div>
                         </div>
                    </div>
                    <div className="card bg-base-100 shadow">
                         <figure className="px-5 pt-5">
                              <img src={team2} alt="Shoes" className="rounded-xl" />
                         </figure>
                         <div className="card-body items-center text-center">
                              <h2 className="card-title">Car Engine Plug</h2>
                              <p>Engine Expert</p>
                              <div className="card-actions">
                                 <FaFacebook> </FaFacebook>
                                 <FaTwitter> </FaTwitter>
                                 <FaInstagram> </FaInstagram>
                                 <FaGoogle></FaGoogle>
                                 
                              </div>
                         </div>
                    </div>
                    <div className="card bg-base-100 shadow">
                         <figure className="px-5 pt-5">
                              <img src={team3} alt="Shoes" className="rounded-xl" />
                         </figure>
                         <div className="card-body items-center text-center">
                              <h2 className="card-title">Car Engine Plug</h2>
                              <p>Engine Expert</p>
                              <div className="card-actions">
                                 <FaFacebook> </FaFacebook>
                                 <FaTwitter> </FaTwitter>
                                 <FaInstagram> </FaInstagram>
                                 <FaGoogle></FaGoogle>
                                 
                              </div>
                         </div>
                    </div>

               </div>
          </div>
     );
};

export default Team;