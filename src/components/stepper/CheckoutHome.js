import React from 'react'
import CheckoutStepper from './CheckoutStepper'

const CheckoutHome = () => {
    const CHECKOUT_STEPS = [
        {
            name: "Customer Info",
            Component : () => <div>Please Provide The Contact Details</div>
        },
        {
            name: "Shipping Info",
            Component: () => <div>Enter Your Shipping Address</div>
        },
        {
            name: "Payment",
            Component: () => <div>Complete Payment for your order</div>
        },
        {
            name: "Delivered",
            Component: () => <div>Your Order has been delivered</div>
        }
    ]
  return (
    <div>
        <h2>Check out</h2>
        <CheckoutStepper stepsConfig={CHECKOUT_STEPS}/>
    </div>
  )
}

export default CheckoutHome