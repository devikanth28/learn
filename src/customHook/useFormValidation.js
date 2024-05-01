import React, { useState } from "react";

const useFormValidation = (initialState, validate) =>{
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e;
        setValues({
            ...values,
            [name] : value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validateErrors = validate(values);
        setErrors(validateErrors);
        if(Object.keys(validateErrors).length == 0){
            console.log("Form Submitted Successfully", values);
        }
        else{
            console.log("Form has Some Errors", errors);
        }
    }

    return {values, handleChange, handleSubmit, errors}
}

export default useFormValidation;