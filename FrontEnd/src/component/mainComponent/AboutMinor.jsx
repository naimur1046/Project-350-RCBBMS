import React from 'react'

import about1 from '../assets/about1.png'
import members1 from '../assets/members1.png'
import club1 from '../assets/club1.png'
import eventBooking1 from '../assets/eventBooking1.png'
import payment1 from '../assets/payment1.png'

export const AboutMinor = () => {
  return (
    <div id='about'>
     
       {/* about text */}
       <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
          <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
             <div>
               <img className='shadow-lg rounded overflow-hidden' src={about1} alt="" />
             </div>
             <div className='md:w-3/5 mx-auto'>
               <h2 className='text-4xl text-neutral-700 font-semibold mb-4 md:w-4/5 '>
               The unseen of spending three years at Pixelgrade
               </h2>
               <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>
                 orem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. 
                 Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
               </p>
               <button className='btn-primary'>
                    Learn More
               </button>

             </div>
          </div>
        </div>

        {/* Company States */}

        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16 '>
          <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
               <div className='md:w-1/2 '>
                 <h2 className='text-4xl text-neutral-700 font-semibold mb-4 md:w-4/5 '>
                 Helping a local <br/> <span className='text-brandPrimary'>business reinvent itself</span>
                 </h2>
                 <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>
                 We reached here with our hard work and dedication
                 </p>
               </div>

               {/* States */}
               <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                    <div  className='space-y-8'>
                         <div className='flex items-center gap-4'>
                              <img src={members1} alt="" />
                              <div>
                                  <h4 className='text-2xl text-neutral-700 font-semibold '>
                                   2,245,341
                                  </h4>
                                  <p>
                                  Members
                                 </p>
                               </div>
                         </div> 
                         <div className='flex items-center gap-4'>
                              <img src={eventBooking1} alt="" />
                              <div>
                                  <h4 className='text-2xl text-neutral-700 font-semibold '>
                                   828,867
                                  </h4>
                                  <p>
                                   Event Bookings
                                 </p>
                               </div>
                         </div>                  
                    </div>
                    <div  className='space-y-8'>
                         <div className='flex items-center gap-4'>
                              <img src={club1} alt="" />
                              <div>
                                  <h4 className='text-2xl text-neutral-700 font-semibold '>
                                  46,328
                                  </h4>
                                  <p>
                                   Clubs
                                 </p>
                               </div>
                         </div> 
                         <div className='flex items-center gap-4'>
                              <img src={payment1} alt="" />
                              <div>
                                  <h4 className='text-2xl text-neutral-700 font-semibold '>
                                  1,926,436
                                  </h4>
                                  <p>
                                  Payments
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
