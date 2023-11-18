import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";


export const HandleUser = () => {
  

  return (
    <div className="bg-gradient-to-r from-[#F28383] from-10% via-[#9D6CD2] via-30% to-[#481EDC] to-90% flex items-center justify-center h-screen">
      <div className="max-w-[960px] bg-black-dark flex flex-col items-center gap-10 p-20 rounded-2xl">
        
        <h1 className='text-center text-5xl  font-bold text-white'> Choose an Option <br/>  to Insert Data </h1>
        <NavLink to='donorregistration'  className="text-center text-white text-2xl bg-gradient-to-r m-0 hover:bg-neutral-800 transition-all duration-300 hover:-translate-y-1 from-deepRed to-lightRed w-80 font-semibold rounded-lg  py-2">Insert Data for Blood Collection</NavLink>
        <NavLink to='patientinfo' className="text-center text-white text-2xl bg-gradient-to-r m-0 hover:bg-neutral-800 transition-all duration-300 hover:-translate-y-1 from-deepRed to-lightRed w-80 font-semibold rounded-lg  py-2">Insert Data for Blood Distribution</NavLink>
        <NavLink to='monthlyreport' className="text-center text-white text-2xl bg-gradient-to-r m-0 hover:bg-neutral-800 transition-all duration-300 hover:-translate-y-1 from-deepRed to-lightRed w-80 font-semibold rounded-lg  py-2">Monthly Report </NavLink>
    
      


      </div>
      
      
      <Outlet/>
    </div>
  )
}
