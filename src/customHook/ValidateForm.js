import React from 'react'
import useFormValidation from './useFormValidation'

const ValidateForm = () => {
    const initialState = {
        userName : '',
        email : '',
        password : ''

    }
    const validate = (values) => {
        let errors = {};
    
        if (!values.username) {
          errors.username = 'Username is required';
        }
    
        if (!values.email) {
          errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
          errors.email = 'Email is invalid';
        }
    
        if (!values.password) {
          errors.password = 'Password is required';
        } else if (values.password.length < 6) {
          errors.password = 'Password must be at least 6 characters';
        }
    
        return errors;
      };
    const {values, handleChange, handleSubmit, errors} = useFormValidation(initialState, validate);
  return (
    <div>
        <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
        {errors.username && <p>{errors.username}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default ValidateForm