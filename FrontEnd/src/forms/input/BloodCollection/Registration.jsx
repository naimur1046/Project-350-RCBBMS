import { useState } from "react";
import  FormInput  from "../../forminput/FormInput";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import axios from 'axios'

const Registration = () => {
  const [values, setValues] = useState({
    donorname: "",
    donormobileno:"",
    donoraddress:"",
    donorbloodgroup:"",
    donoroccupation:"",
    donorage:"",
    donorhusbandorfather:"",
    donorregno:"",
    donorgender:""
  });
  const navigate = useNavigate();


  const inputs = [
    {
      id: 1,
      name: "donorname",
      type: "text",
      placeholder: "Donor Name",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Donor Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "donormobileno",
      type: "tel",
      placeholder: "Donor Mobile No.",
      errorMessage: "It should be a valid mobile number!",
      label: "Mobile Number",
      pattern: "[0]{1}[1]{1}[0-9]{9}",
      required: true,
    },
    {
      id: 3,
      name: "donoraddress",
      type: "text",
      placeholder: "Donor Address",
      errorMessage:
        "Donor Address should be maximum 30 characters ",
      label: "Donor Address",
      pattern: "^[A-Za-z0-9\\s\\-.,'#()]{0,30}$",
      required: true,
    },
    {
      id: 4,
      name: "donorbloodgroup",
      type: "text",
      placeholder: "Donor Blood Group",
      errorMessage:
        "You Should Provide a Valid Blood Group ",
      label: "bloodgroup",
      pattern: "^(A\\+|B\\+|O\\+|AB\\+|A-|B-|O-|AB-)$",
      required: true,
    },
    {
      id: 5,
      name: "donoroccupation",
      type: "text",
      placeholder: "Donor Occupation",
      errorMessage:
        "Your text should be maximum 30 characters",
      label: "occupation",
      pattern: "[A-Za-z]{0,30}",
      required: true,
    },
    
    {
      id: 6,
      name: "donorage",
      type: "text",
      placeholder: "Donor Age",
      errorMessage:
        "Your age should contain maximum 3 digit",
      label: "age",
      pattern: "[0-9]{0,3}",
      required: true,
    },
    {
      id: 7,
      name: "donorgender",
      type: "text",
      placeholder: "Donor Gender",
      errorMessage:
        "Your Gender should Valid Value",
      label: "Gender",
      pattern: "[A-Za-z]{0,30}",
      required: true,
    },
    {
      id: 8,
      name: "donorhusbandorfather",
      type: "text",
      placeholder: "Husband/Father Name",
      errorMessage:
        "Text should be maximum 30 digit",
      label: "husbandorfather'sname",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 9,
      name: "donorregno",
      type: "text",
      placeholder: "Donor Reg no.",
      errorMessage:
        "Text should be maximum 30 digit",
      label: "donorregno.",
      pattern: "[0-9]{0,8}",
      required: true,
    },
    
  ];

 



  const handleSubmit = (e) => {
    e.preventDefault();
    

    
    axios.post('http://localhost:8081/register',values).then((res)=>{
          console.log("Result is"+res)
          navigate('donortestreport')
      }).then((err)=>{
          console.log("Here Error is"+err)
      });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gradient-to-r from-[#F28383] from-10% via-[#9D6CD2] via-30% to-[#481EDC] to-90% flex items-center justify-center min-h-screen">
      <div className="max-w-[1000px] bg-black-dark grid grid-cols-2 items-center gap-10 p-5 rounded-2xl">
      <h1 className="text-5xl text-center font-bold text-white">Registration <br/> for Blood Donor </h1>
      <form className="bg-white px-10 py-50 rounded-l-xl flex flex-col gap-4 mt-5" onSubmit={handleSubmit}>
        
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
        
         
         <button className=" text-center h-[50px] font-bold cursor-pointer hover:translate-y-1 duration-100 ml-10 w-60 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-lg  py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
      </form>
      </div>
      <Outlet/>
    </div>
  );
};

export default Registration;