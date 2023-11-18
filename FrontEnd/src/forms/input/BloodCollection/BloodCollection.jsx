import { useState } from "react";
import FormInput from "../../forminput/FormInput";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const BloodCollection = () => {
  const [values, setValues] = useState({
    bloodcollectionid: "",
    bloodcollectiondate: "",
    blooddonationtype: "",
    testreportid: "",
    donorregno: "",
    donorbloodpressure: "",
    donorweight: "",
  });
   
  const navigate= useNavigate();
  



  const inputs = [
    {
      id: 1,
      name: "bloodcollectionid",
      type: "number",
      placeholder: "Blood Collection Id",
      errorMessage:
        "Blood Collection Id should be maximum eight digit",
      label: "bloodcollectionid",
      pattern: "[0-9]{0,8}",
      required: true,
    },
    {
      id: 2,
      name: "bloodcollectiondate",
      type: "date",
      placeholder: "Blood Collection Date",
      errorMessage: "It should be a valid value!",
      label: "bloodcollectiondate",
      pattern: "[A-Za-z]{0,30}",
      required: true,
    },
    {
      id: 3,
      name: "blooddonationtype",
      type: "text",
      placeholder: "Blood Donation Type",
      errorMessage:
        "You should provide valid value",
      label: "blooddonationtype",
      pattern: "[A-Za-z]{0,30}",
      required: true,
    },
    {
     id: 4,
     name: "testreportid",
     type: "number",
     placeholder: "Test Report Id",
     errorMessage:
       "Test Report Id should be maximum eight digit",
     label: "testreportid",
     pattern: "[0-9]{0,8}$",
     required: true,
   },
    {
     id: 5,
     name: "donorregno",
     type: "text",
     placeholder: "Donor Reg no.",
     errorMessage:
       "Text should be maximum 30 digit",
     label: "donorregno.",
     pattern: "[0-9]{0,8}",
     required: true,
   },
    {
     id: 6,
     name: "donorbloodpressure",
     type: "text",
     placeholder: "Donor Blood Pressure",
     errorMessage:
       "You should provide valid value",
     label: "donorbloodpressure",
     pattern: "^[A-Za-z0-9\\s\\-.,'#()]{0,30}$",
     required: true,
   },
    
   {
     id: 7,
     name: "donorweight",
     type: "number",
     placeholder: "Donor Weight",
     errorMessage:
       "You should provide valid value",
     label: "donorweight",
     pattern: "[0-9]{0,3}",
     required: true,
   },
    
    
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/bloodcollection',values).then((res)=>{
          console.log("Result is"+res)
          navigate('bloodstorage')
          
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
      <h1 className="text-5xl font-bold text-white">Blood Collection </h1>
      <form className="text-center bg-white px-10 py-50 rounded-l-xl flex flex-col gap-4 mt-5" onSubmit={handleSubmit}>
        
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
        
       
        <button className="h-[50px] font-bold cursor-pointer hover:translate-y-1 duration-100 ml-10 w-60 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-lg px-5 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default BloodCollection;