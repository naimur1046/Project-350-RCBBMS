import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AvailableBloodBag = () => {

     const [data,setData] = useState([])
     useEffect(()=>{
          axios.get('http://localhost:8081/availablebloodbag').then((res)=>{
               setData(res.data)
               console.log(res.data)
               

          }).catch((err)=>{   console.log(err)  })
     },[])
  
     return (
    <div className='bg-gradient-to-r from-[#F28383] from-10% via-[#9D6CD2] via-30% to-[#481EDC] to-90% flex items-center justify-center min-h-screen'>
        
        <div className='max-w-[1000px] bg-black-dark flex flex-col items-center gap-10 p-5 rounded-2xl' >
          <h3 className='text-5xl font-semibold text-white mt-10 text-center'>
               Total Blood Bag in Storage
          </h3>
          <table className=''>
               <thead>
                    <tr className=''>
                         <th className='text-3xl font-semibold text-white p-5 '>
                              Blood Group
                         </th>
                         <th className='text-3xl font-semibold text-white p-5 '>
                              No. of Bags
                         </th>

                    </tr>

               </thead>
               <tbody>
                    {
                                  
                            data.map((value,key)=> <tr  key={key}>
                                 <td className='p-5 text-white text-xl text-center font-semibold'>
                                   {value.blood_group}
                                 </td>
                                 <td className='p-5 text-white text-xl text-center font-semibold' >
                                   {value.total_stored_bags}
                                 </td>
                            </tr>)       

                         
                    }
               </tbody>
          </table>

        </div>

    </div>
  )
}

export default AvailableBloodBag