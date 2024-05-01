import React, { useState } from 'react'

const FormValidation = () => {
    const [formInput, setFormInputs]=useState({
        name:'',
        mobile:'',
        email:'',
        blogUrl:''
    })
    const [errors, setErrors]=useState({});
    const validateForm = () => {
        const newErrors = {};

          // Regular expressions for validation
    const nameRegex = /^[A-Za-z\s]+$/;
    const mobileRegex = /^[0-9]{10}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const blogUrlRegex = /^(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/.*)?$/;

    if(!formInput.name.match(nameRegex)){
        newErrors.name = "name is invalid";
    }
    if(!formInput.mobile.match(mobileRegex)){
        newErrors.mobile = "mobile number is invalid";
    }

    if(!formInput.email.match(emailRegex)){
        newErrors.email = "email is invalid";
    }
    if(!formInput.blogUrl.match(blogUrlRegex)){
        newErrors.blogUrl = "blog url is invalid";
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
    }

    const handleChange = (e) =>{
        const {name, value}=e.target;
        setFormInputs({
            ...formInput,
            [name]:value,
        })
    }
    const handlSubmit = ()=>{
        if(validateForm()){
            alert("form submitted")
        }
        else{
            alert("form is not submiied")
        }
    }
  return (
    <div>
        <div>
            <label>
                Name:
            </label>
            <input type="text" name="name"  value={formInput.name} onChange={handleChange}/>
            {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
            <label>
                mobile number
            </label>
            <input type="text" name="mobile" value={formInput.mobile} onChange={handleChange}/>
            {errors.mobile && <span>{errors.mobile}</span>}
        </div>
        <div>
            <label>email:</label>
            <input type="email" name='email' value={formInput.email} onChange={handleChange}/>
            {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
            <label>
                blogUrl:
                <input type="text" name="blogUrl" value={formInput.blogUrl} onChange={handleChange}/>
                {errors.blogUrl && <span>{errors.blogUrl}</span>}
            </label>
        </div>
        <button onClick={handlSubmit}>submit</button>
    </div>
  )
}

export default FormValidation




