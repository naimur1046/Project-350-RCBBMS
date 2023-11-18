import { useState } from "react";



const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const {  errorMessage ,onChange, id, ...inputProps } = props;
 

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="flex flex-col w-400">
      
      <input className="invalid:[focus:${true}]:border-red-500 border-2 border-slate-400 w-80 text-slate-800 bg-white-light py-2 px-12 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className="text-sm p-0 text-red-500 hidden">{errorMessage}</span>

    </div>
  );
};

export default FormInput;