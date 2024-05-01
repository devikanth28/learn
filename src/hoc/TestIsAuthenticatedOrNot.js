import React from 'react'
import AuthenticationChecked from './AuthenticationChecked'
import User from './User'

const TestIsAuthenticatedOrNot = () => {
    const IsAuthenticated = AuthenticationChecked(User);
  return (
      <>
      <p>Authntication Checked</p>
      <IsAuthenticated name="Devikanth"/>
      </>
  )
}

export default TestIsAuthenticatedOrNot