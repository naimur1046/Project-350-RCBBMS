import React from 'react'

import blog1 from '../../assets/bloodDonationBlog1.jpg'
import blog2 from '../../assets/bloodDonationBlog2.jpg'
import blog3 from '../../assets/bloodDonationBlog3.jpg'

export const Blog = () => {

const blogs=[
  {id:1,title:'About blood donation',description:'Our volunteers help their communities understand the need and importance of donating blood, mobilizing them to become blood donors.' ,image:blog1},
  {id:2,title:'Full blood service provision', description:'Around one quarter of National Societies are responsible for blood service delivery in their national blood programmes.' ,image:blog2},
  {id:3,title:'Systematic blood donor recruitment', description:'Blood is our common life-source. Donated blood should be available to all patients who need it, regardless of who they are, where they are or their ability to pay' ,image:blog3},
  {id:4,title:'Advocay',description:'One blood donation can save as many as three lives. Sustainable and quality blood services play a critical role in the health of a society and in preparing for, and responding to, disasters.',image:blog3},
]   

  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='faq'>
       <div className='text-center md:w-1/2 mx-auto '>

              <h2 className='text-4xl text-neutral-700 font-semibold mb-4 '>
                   National Society activities
               </h2>
               <p className='text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto'>
               The  Red Cross and Red Crescent Societies support Govt. to deliver and promote safe and 
               sustainable blood programmes in Bangladesh.we supported more than 2 million people to donate blood in 2023.
               </p>

       </div>


       {/* All Blogs */}

       <div className='gird gird-rows-3 gird-cols-3 gap-8 items-center justify-between'>
          {
            blogs.map(blog=> <div key={blog.id} className=' relative mb-12 cursor-pointer'>

                 <img className='w-60 shadow-lg hover:scale-95 transation-all duration-500' src={blog.image} alt="" />
                 <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md  mx-auto absolute left-0 right-0 -bottom-12 '>
                    <h1 className=''>
                      {blog.title}
                    </h1>
                   <h3 className=' mb-3 text-neutralGrey font-semibold'>
                     {blog.description}
                   </h3>
                   
                   <div className='flex items-center gap-8 justify-center'>
                                   <a href="#" className='font-bold text-brandPrimary hover:text-neutral-700'>
                                     Readmore
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none" className='inline-block ml-2 '>
                                           <path d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905" stroke="#4CAF4F"/>
                                        </svg>
                                   </a>
                   </div>
                 </div>
               </div>)
          }
       </div>
     </div>
  )
}
