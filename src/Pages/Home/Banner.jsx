
import img1 from '../../assets/images/homeCarousel/1.jpg'
import img2 from '../../assets/images/homeCarousel/2.jpg'
import img3 from '../../assets/images/homeCarousel/3.jpg'
import img4 from '../../assets/images/homeCarousel/4.jpg'

const Banner = () => {
     return (
          <div>

               <div className="carousel w-full  h-[70vh]">
                    <div id="slide1" className="carousel-item rounded-xl  relative w-full">
                         <img src={img1} className="w-full rounded-xl " />
                         <div className="absolute flex justify-between h-full transform  p-2 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                              <div className=' text-white space-y-5 pl-12 w-1/2'>
                              <h1 className=' text-4xl font-semibold'> Affordable Price For Car Servicing</h1>
                              <p className=' text-lg'> There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                              <div className=' flex gap-3'>
                                   <button className="btn btn-secondary">Discover More</button>
                                   <button className="btn btn-accent">Discover More</button>
                              </div>
                              </div>
                         </div>
                         <div className="absolute flex justify-between transform -translate-y-1/2  bottom-1 right-1">
                              <a href="#slide4" className="btn btn-circle  mr-4">❮</a>
                              <a href="#slide2" className="btn btn-circle">❯</a>
                         </div>
                    </div>
                    <div id="slide2" className="carousel-item rounded-xl  relative w-full">
                         <img src={img2} className="w-full rounded-xl " />
                         <div className="absolute flex justify-between h-full transform  p-2 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                              <div className=' text-white space-y-5 pl-12 w-1/2'>
                              <h1 className=' text-4xl font-semibold'> Affordable Price For Car Servicing</h1>
                              <p className=' text-lg'> There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                              <div className=' flex gap-3'>
                                   <button className="btn btn-secondary">Discover More</button>
                                   <button className="btn btn-accent">Discover More</button>
                              </div>
                              </div>
                         </div>
                         <div className="absolute flex justify-between transform -translate-y-1/2  bottom-1 right-1">
                              <a href="#slide1" className="btn btn-circle  mr-4">❮</a>
                              <a href="#slide3" className="btn btn-circle">❯</a>
                         </div>
                    </div>
                    <div id="slide3" className="carousel-item rounded-xl  relative w-full">
                         <img src={img3} className="w-full rounded-xl " />
                         <div className="absolute flex justify-between h-full transform  p-2 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                              <div className=' text-white space-y-5 pl-12 w-1/2'>
                              <h1 className=' text-4xl font-semibold'> Affordable Price For Car Servicing</h1>
                              <p className=' text-lg'> There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                              <div className=' flex gap-3'>
                                   <button className="btn btn-secondary">Discover More</button>
                                   <button className="btn btn-accent">Discover More</button>
                              </div>
                              </div>
                         </div>
                         <div className="absolute flex justify-between transform -translate-y-1/2  bottom-1 right-1">
                              <a href="#slide2" className="btn btn-circle  mr-4">❮</a>
                              <a href="#slide4" className="btn btn-circle">❯</a>
                         </div>
                    </div>
                    <div id="slide4" className="carousel-item rounded-xl  relative w-full">
                         <img src={img4} className="w-full rounded-xl " />
                         <div className="absolute flex justify-between h-full transform  p-2 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                              <div className=' text-white space-y-5 pl-12 w-1/2'>
                              <h1 className=' text-4xl font-semibold'> Affordable Price For Car Servicing</h1>
                              <p className=' text-lg'> There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                              <div className=' flex gap-3'>
                                   <button className="btn btn-secondary">Discover More</button>
                                   <button className="btn btn-accent">Discover More</button>
                              </div>
                              </div>
                         </div>
                         <div className="absolute flex justify-between transform -translate-y-1/2  bottom-1 right-1">
                              <a href="#slide3" className="btn btn-circle  mr-4">❮</a>
                              <a href="#slide1" className="btn btn-circle">❯</a>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Banner;