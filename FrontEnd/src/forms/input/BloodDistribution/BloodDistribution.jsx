import { useState } from "react";
import FormInput from "../../forminput/FormInput";
import axios from 'axios'


const BloodDistribution = () => {
  const [values, setValues] = useState({
    distributionid: "",
    distributiondate: "",
    patientid: "",
    bloodbagno: "",
  });


  const inputs = [
    {
      id: 1,
      name: "distributionid",
      type: "number",
      placeholder: "Distribution Id",
      errorMessage:
        "Distribution Id should be maximum eight digit",
      label: "distributionid",
      pattern: "[0-9]{0,8}",
      required: true,
    },
    {
     id: 2,
     name: "distributiondate",
     type: "date",
     placeholder: "Distribution Date",
     errorMessage:
       "You Should Provide a Valid Blood Group ",
     label: "distributionid",
     pattern: "^(A\\+|B\\+|O\\+|AB\\+|A-|B-|O-|AB-)$",
     required: true,
   },
   {
     id: 3,
     name: "patientid",
     type: "number",
     placeholder: "Patient Id",
     errorMessage:
       "Patient Id should be maximum eight digit",
     label: "patientid",
     pattern: "[0-9]{0,8}",
     required: true,
   },
   {
     id: 4,
     name: "bloodbagno",
     type: "number",
     placeholder: "Blood Bag No",
     errorMessage:
       "Blood Bag No should be maximum eight digit",
     label: "bloodbagno",
     pattern: "[0-9]{0,8}",
     required: true,
   },
    
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/blooddistribution',values).then((res)=>{
          console.log("Result is"+res)
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
      <h1 className="text-center text-5xl font-bold text-white">Blood Distribution </h1>
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

export default BloodDistribution;