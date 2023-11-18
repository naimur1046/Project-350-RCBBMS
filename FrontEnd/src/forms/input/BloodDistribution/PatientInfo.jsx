import { useState } from "react";
import FormInput from "../../forminput/FormInput";
import { useNavigate } from "react-router-dom";
import axios from 'axios'


const PatientInfo = () => {
  const [values, setValues] = useState({
    patientname: "",
    patientmobileno: "",
    patientaddress: "",
    patientbloodgroup: "",
    patientage: "",
    patientid:"",
    hospitalnamereferredby:"",
    patientgender:""

  });
  const navigate = useNavigate()



  const inputs = [
    {
      id: 1,
      name: "patientname",
      type: "text",
      placeholder: "Patient Name",
      errorMessage:
        "Name should be 3-16 characters and shouldn't include any special character!",
      label: "patientname",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "patientmobileno",
      type: "tel",
      placeholder: "Patient Mobile No.",
      errorMessage: "It should be a valid mobile number!",
      label: "patientmobileno",
      pattern: "[0]{1}[1]{1}[0-9]{9}",
      required: true,
    },
    {
      id: 3,
      name: "patientaddress",
      type: "text",
      placeholder: "Patient Address",
      errorMessage:
        "Patient Address should be maximum 30 characters ",
      label: "patientaddress",
      pattern: "^[A-Za-z0-9\\s\\-.,'#()]{0,30}$",
      required: true,
    },
    {
      id: 4,
      name: "patientbloodgroup",
      type: "text",
      placeholder: "Patient Blood Group",
      errorMessage:
        "You Should Provide a Valid Blood Group ",
      label: "patientbloodgroup",
      pattern: "^(A\\+|B\\+|O\\+|AB\\+|A-|B-|O-|AB-)$",
      required: true,
    },
    {
      id: 5,
      name: "patientage",
      type: "text",
      placeholder: "Patient Age",
      errorMessage:
        "Your age should contain maximum 3 digit",
      label: "patientage",
      pattern: "[0-9]{0,3}",
      required: true,
    },
    {
      id: 6,
      name: "patientgender",
      type: "text",
      placeholder: "Patient Gender",
      errorMessage:
        "Your Gender Should be Valid Value",
      label: "patientage",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 7,
      name: "patientid",
      type: "text",
      placeholder: "Patient Id",
      errorMessage:
        "Text should be maximum 30 digit",
      label: "patientid",
      pattern: "[0-9]{0,8}",
      required: true,
    },
    {
      id: 8,
      name: "hospitalnamereferredby",
      type: "text",
      placeholder: "Hospital Name(Ref By)",
      errorMessage:
        "Text should be maximum 30 digit",
      label: "hospitalnamereferredby",
      pattern: "^[A-Za-z0-9\\s\\-.,'#()]{0,30}$",
      required: true,
    },
    
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    

    axios.post('http://localhost:8081/patientinfo',values).then((res)=>{
          console.log("Result is"+res)
          navigate('crossmatchreport')
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
      <h1 className="text-center text-5xl font-bold text-white">Patient Information</h1>
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
        
       
        <button className="h-[50px] font-bold cursor-pointer hover:translate-y-1 duration-100 ml-10 w-60 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-lg px-5 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default PatientInfo;