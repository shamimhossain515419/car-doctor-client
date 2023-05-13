
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'
const About = () => {
     return (
          <div>
               <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content gap-7 flex-col md:flex-row">
                         <div className=' w-1/2 relative'>
                          <img src={person} className="   relative w-3/4 h-full rounded-lg shadow-2xl" />
                         <img className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl" src={parts} alt="" />
                         </div>
                         <div className='  w-1/2  space-y-5'>
                              <h3 className=" text-xl font-medium text-[#FF3811]"> About</h3>
                              <h1 className="text-2xl text-black font-bold">We are qualified & of experience in this field</h1>
                              <p className=" text-sm font-normal">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                              <p className=" text-sm font-normal">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                              <button className=" py-2 px-4 rounded-lg  bg-[#FF3811] text-white">Get More Info</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default About;