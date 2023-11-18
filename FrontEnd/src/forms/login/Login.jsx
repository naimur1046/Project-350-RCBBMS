//  Title: Uptime Monitoring Application
//  Description: T
//  Author: Naimur Rahman
//  Date: 13/6/23


// Dependencies

import { useState } from "react";
import FormInput from "../forminput/FormInput";
import teamwork from '../../assets/teamwork.svg'
import signupBackground from '../../assets/signupBackground.svg'
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import axios from 'axios'


export const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  
  const navigate = useNavigate();

  const inputs = [
      {
        id: 1,
        name: "email",
        type: "email",
        placeholder: "Email",
        errorMessage:
          "Enter a Valid Email!",
        pattern: "^[A-Za-z0-9\\s\\-.,'#()]{0,30}$",
        required: true,
      },
      {
        id: 2,
        name: "password",
        type: "password",
        placeholder: "Password",
        errorMessage: "Your Password is not valid",
        pattern: "^[A-Za-z0-9\\s\\-.,'#()]{0,30}$",
        required: true,
      },
        
    ];
  const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:8081/login',values).then((res)=>{

          if(res.data.Status=='Success')
          {
            navigate('handleuser')
            console.log("Result is"+res)
          }
          else
          {
            console.log("Not Successful")
          }
          
      }).then((err)=>{
          console.log("Here Error is"+err)
      })

    };
  
  const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };


  return (
    <div className="bg-gradient-to-r from-[#F28383] from-10% via-[#9D6CD2] via-30% to-[#481EDC] to-90% flex items-center justify-center h-screen">
      <div className="max-w-[960px] bg-black-dark grid grid-cols-2 items-center gap-20 p-5 rounded-2xl">

         <div>
           <img src={signupBackground} alt=""/>
          <img src={teamwork} alt="" class="absolute top-36"/>

         </div>

          <div className="max-w-80 grid gap-5">
              <h1 className='text-5xl font-bold text-white'> Authority Login </h1>
              <form className=" flex flex-col items-center space-y-6 text-white p-5" onSubmit={handleSubmit}>
        
               <div className="flex flex-col gap-4 mt-5">
                   {inputs.map((input) => (
                    <FormInput
                    key={input.id}
                    {...input}
                   value={values[input.name]}
                   onChange={onChange}
             />
            ))}
        
               </div>
        <button className=" bg-gradient-to-r m-0 hover:bg-neutral-800 transition-all duration-300 hover:-translate-y-1 from-deepRed to-lightRed w-20 font-semibold rounded-lg px-2  py-2">
        Submit
        </button>
        
        
      </form>
       
      

      </div>

      
      </div>
      
      
      
    </div>
  )
}
