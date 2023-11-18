import React from 'react'
import { Carousel } from 'flowbite-react'
import banner1 from '../../assets/banner1.jpg'

export const Home = () => {
  return (
    <div className='bg-neutralSilver' id='home'>
     <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen '>
     <Carousel className='w-full mx-auto'>
      <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div>
            <img className='max-w-lg rounded overflow-hidden shadow-lg' src={banner1} alt="HI" />
          </div>

          {/* Hero Text */}

         <div className="md:w-1/2">
           <h1 className='text-5xl font-semibold mb-4 text-red-500 md:w-3/4 leading-snug'>
               Donate Blood, Save Lives.
              
           </h1>
           <p className='text-neutral-700 text-lg mb-8'>
                Your donation can save the lives of many, make a difference or simply make you feel great about your contribution to humanity.
                Whatever your reason, whatever your motivation we welcome you to learn more about eligibility and benefits of donating blood 
                with a trusted organization like us.
           </p>
           
          </div>
      </div>


      <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div>
            <img className='max-w-lg rounded overflow-hidden shadow-lg' src={banner1} alt="" />
          </div>

          {/* Hero Text */}

         <div className="md:w-1/2">
           <h1 className='text-5xl font-semibold mb-4 text-red-500 md:w-3/4 leading-snug'>
             Find Out More About Local Blood Drives and BDRCS Campaigns Near You. 
        
           </h1>
           <p className='text-neutral-700 text-lg mb-8'>
           Across Bangladesh, every day there remains an urgent need for all types of blood groups. Especially donors with rare blood groups such as O Negative, B Negative and A Negative are in high demand. Your timely response is essential to the supply of healthy blood for the massive daily demand we face.
           </p>
           
           
          </div>
      </div>

      
    </Carousel>

     </div>
     </div>
  )
}
