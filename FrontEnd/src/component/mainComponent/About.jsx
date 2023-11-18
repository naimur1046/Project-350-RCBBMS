import React from 'react';

import redcrescent from '../../assets/bangladeshRCCS.svg'
import getBloodAbout from '../../assets/getBloodAbout.png'
import donateforAbout from '../../assets/donateforAbout.png'
import becomeavolunteer from '../../assets/becomeavolunteer.png'
import beamemberabout from '../../assets/beamemberabout.png'


export const About = () => {
  return (
    <div id='product'>
     <div>
     
     {/* about text */}
     <div className='px-4 max-h-screen lg:px-14 max-w-screen-2xl mx-auto my-8'>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-20'>
           <div>
             <img className='shadow-lg my-10 mx-10  rounded overflow-hidden' src={redcrescent} alt="" />
           </div>
           <div className='md:w-3/5 ml-10 mx-auto'>
             <h2 className='text-5xl text-red-500 font-semibold mb-4 md:w-4/5 '>
             Our Work
             </h2>
             <p className='md:w-3/4 text-lg  text-neutralGrey mb-8'>
             We are, the Bangladesh Red Crescent Society (BDRCS) – part of the world largest humanitarian
             non-governmental organization, The International Red Cross and Red Crescent Movement.
             We have stood beside the Bangladeshi population throughout history and have played a crucial 
             humane role in the relief, rescue and rehabilitation of hundreds and thousands of victims of flood, cyclone and other natural disasters in Bangladesh.
             </p>

           </div>
        </div>
      </div>

      {/* Company States */}

      <div className='px-4   max-w-screen-2xl mx-auto bg-neutralSilver py-16 ' id='testimonial'>
        <div className='flex flex-col  justify-between items-center gap-8'>
             <div className='md:w-1/3 '>
               
                <p className='text-6xl font-semibold text-center'> Our Services </p>
               
             </div>

             {/* States */}
             <div className='flex flex-row mx-5 gap-5'>

                  <div className='flex flex-col'>
                     <div className=' py-0'> 
                      <img className='my-5 max-w-xs  rounded-lg overflow-hidden shadow-lg' src={donateforAbout} alt="" />
                    
                      </div> 

                    <div className='flex flex-col'>
                      <h1 className='text-4xl font-semibold w-50 border-2 text-center px-0 py-1 rounded-lg border-red-500 hover:bg-red-600'>
                        Donate Us
                      </h1>
                      <p className='text-xl py-2 text-center max-w-sm'>
                         Your thoughtful donation of any amount would prevent and reduce
                         human sufferings and save lives of the most vulnerable and marginalized groups.
                      </p>
                    </div>

                  </div>
                  <div className='flex flex-col'>
                      <div className='py-0'> 
                       <img className='py-0 my-5 max-w-xs  rounded-lg overflow-hidden shadow-lg' src={getBloodAbout} alt="" />
                    
                      </div> 

                    <div className='flex flex-col'>
                         <h1 className='text-4xl font-semibold w-50 border-2 text-center px-0 py-1 rounded-lg border-red-500 hover:bg-red-600'>
                           Get Blood

                         </h1>
                         <p className='text-xl py-2 text-center max-w-sm'>
                           Giving blood is a simple thing to do, but it can make a big difference in the lives of others.
                          Make a life-saving blood donation appointment or request for Blood.

                          </p>
                    </div>

              </div>
              <div className='flex flex-col'>
                     <div className='py-0'> 
                      <img className='py-0 my-5 max-w-xs  rounded-lg overflow-hidden shadow-lg' src={beamemberabout} alt="" />
                    
                    </div> 

                    <div className='flex flex-col'>
                         <h1 className='text-4xl font-semibold w-50 border-2 text-center px-0 py-1 rounded-lg border-red-500 hover:bg-red-600'>
                           Be a Member
                         </h1>
                         <p className='text-xl py-2 text-center max-w-sm'>
                         Membership of Bangladesh Red Crescent Society is an easy and a 
                         fluent way to support valuable work done by the society and to speak out for humane values.

                          </p>
                    </div>

              </div>
              <div className='flex flex-col'>
                     <div className='py-0'> 
                      <img className='py-0 my-5 max-w-xs  rounded-lg overflow-hidden shadow-lg' src={becomeavolunteer} alt="" />
                    
                    </div> 

                    <div className='flex flex-col'>
                         <h1 className='text-4xl font-semibold w-50 border-2 text-center px-0 py-1 rounded-lg border-red-500 hover:bg-red-600'>
                          Be a Volunteer
                         </h1>
                         <p className='text-xl py-2 text-center max-w-sm'>
                         Volunteers are  the backbone of our Movement. You can make a difference
                          by volunteering with Bangladesh Red Crescent Society in tackling humanitarian challenges
                         

                          </p>
                    </div>

              </div>
              
             </div>
             
        </div>

      </div>

  </div>

    </div>
  )
}
