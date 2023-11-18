import React from 'react'

import { Layout } from './Layout'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../component/mainComponent/Home'

import Contact from '../component/mainComponent/Contact'
import { Login } from '../forms/login/Login'
import { HandleUser } from '../component/HandleUser/HandleUser'
import Registration from '../forms/input/BloodCollection/Registration'
import DonorTestReport from '../forms/input/BloodCollection/DonorTestReport'
import BloodCollection from '../forms/input/BloodCollection/BloodCollection'
import PatientInfo from '../forms/input/BloodDistribution/PatientInfo'
import { PatientCrossMatchReport } from '../forms/input/BloodDistribution/PatientCrossMatchReport'
import { About } from '../component/mainComponent/About'
import { Blog } from '../component/mainComponent/Blog'
import BloodStorage from '../forms/input/BloodCollection/BloodStorage'
import BloodDistribution from '../forms/input/BloodDistribution/BloodDistribution'
import AvailableBloodBag from '../component/mainComponent/AvailableBloodBag'
import MonthlyReport from '../component/mainComponent/MonthlyReport'


const HandlePage = () => {
  return (
    <div>

      
     
     
     <Routes>
          <Route path='/' element={<Layout/>}>
             <Route path='' element={<Home/>}/>
             <Route path='about' element={<About/>}/>
             <Route path='blog' element={<Blog/>}/>
              <Route path='wantablood' element={<AvailableBloodBag/>}/>
             <Route path='contact' element={<Contact/>}/>
             <Route path='login' >
                 <Route path='' element={<Login/>}/>

                 <Route path='handleuser'>
                   <Route path='' element={<HandleUser/>}/>

                   {/* Collection Part */}


                   <Route path='donorregistration'>
                       <Route path='' element={<Registration/>}/>
                       <Route path='donortestreport'>
                            <Route path='' element={<DonorTestReport/>}/>

                            <Route path='bloodcollection'>

                                <Route path='' element={<BloodCollection/>}/>
                                <Route path='bloodstorage'>

                                <Route path='' element={<BloodStorage/>}/>

                                </Route>
                                
                            </Route>

                        </Route>

                   </Route>


                   {/* Distribution Part */}

                   <Route path='patientinfo'>
                       <Route path='' element={<PatientInfo/>}/>

                       <Route path='crossmatchreport'>
                          <Route path='' element={<PatientCrossMatchReport/>}/>
                          <Route path='blooddistribution'>
                          <Route path='' element={<BloodDistribution/>}/>


                          </Route>

                       </Route>

                   </Route>

                   {/* Monthly Report  */}

                   <Route path='monthlyreport'>
                   <Route path='' element={<MonthlyReport/>}/>

                   </Route>

                     

                 </Route>
              </Route>
          </Route>
          
           
     </Routes>
     </div>
  )
}

export default HandlePage