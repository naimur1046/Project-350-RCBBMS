import  { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'

const MonthlyReport = () => {
   
     const [dataforcollection,setDatafocollection] = useState([])
     const [datafordistribution,setDatafordistibution] = useState([]);

     useEffect(()=>{
          axios.get('http://localhost:8081/monthlyreportforcollection').then((res)=>{
               setDatafocollection(res.data)
               console.log(res.data)
               

          }).catch((err)=>{   console.log(err)  })

          axios.get('http://localhost:8081/monthlyreportfordistribution').then((res)=>{
               setDatafordistibution(res.data)
               console.log(res.data)
               

          }).catch((err)=>{   console.log(err)  })
     },[])



  return (
    <div className='bg-gradient-to-r from-[#F28383] from-10% via-[#9D6CD2] via-30% to-[#481EDC] to-90% flex items-center justify-center min-h-screen'>
       <div className='max-w-[1000px] bg-black-dark flex flex-col items-center gap-10 p-5 rounded-2xl'>
          <h1 className='text-white text-center py-5 px-10 font-semibold text-5xl'>
               Monthly Report
          </h1>
          <div className=''>
               <h1 className='text-white text-center py-5 text-3xl'>
                    Total Collected Blood Last Month
               </h1>
               <table className='content-center'>
                  <thead>
                    <th className='text-center font-medium text-white px-3'>
                        Blood Group 

                    </th>
                    <th className='text-center font-medium text-white px-3'>
                         Total Number  of Blood Bag

                    </th>
                  </thead>

                  <tbody>

                         {
                                  
                              dataforcollection.map((value,key)=> <tr  key={key}>
                                   <td className='p-5 text-white text-xl text-center font-semibold'>
                                        {value.blood_group}
                                   </td>
                                   <td className='p-5 text-white text-xl text-center font-semibold' >
                                        {value.total_blood_bags}
                                   </td>
                                  </tr>)       
      
                               
                          }

                  </tbody>

               
          </table>
          </div>

          <div>
               <h1 className='text-white text-center py-5 text-3xl'>
                    Total Distributed Blood Last Month
               </h1>
               <table>
                  <thead>
                    <th className='text-center font-medium text-white px-3'>
                        Blood Group 

                    </th>
                    <th className='text-center font-medium text-white px-3'>
                         Total Number of Blood Bag

                    </th>
                  </thead>

                  <tbody>

                         {
                                  
                                  datafordistribution.map((value,key)=> <tr  key={key}>
                                   <td className='p-5 text-white text-xl text-center font-semibold'>
                                        {value.blood_group}
                                   </td>
                                   <td className='p-5 text-white text-xl text-center font-semibold' >
                                        {value.total_distributed_bags}
                                   </td>
                                  </tr>)       
      
                               
                          }

                  </tbody>

               
          </table>
          </div>

       </div>

     </div>
  )
}

export default MonthlyReport