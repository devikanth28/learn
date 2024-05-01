import React, { useState } from 'react'

const CheckoutStepper = ({stepsConfig = []}) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isComplete, setIsComplete] = useState(false)
    console.log("stepper", stepsConfig)
    if(!stepsConfig.length){
        return<></>
    }
    const handleNxt = () =>{
        setCurrentStep(prevStep=>{
            if(prevStep === stepsConfig.length){
                setIsComplete(true);
                return prevStep;
            }
            else{
                return prevStep + 1;
            }
        })
    }

    const ActiveComponent = stepsConfig[currentStep - 1].Component;

    const calculateProgressBarWidth = () => {
        return((currentStep - 1) / (stepsConfig.length - 1)) * 100
    }
  return (
      <>
      
    <div className='stepper'>
        {stepsConfig && stepsConfig.map((step, index)=>{
            return(
                <div className={`step ${currentStep > index + 1 || isComplete ? "complete" :""} ${currentStep === index + 1?" active":""}`}>
                    <div className='step-number'>{currentStep > index + 1 || isComplete? <span>&#10003;</span>:index + 1}</div>
                    <div className="step-name">{step.name}</div>
                </div>
            )
        })}
        <div className='progress-bar' style={{"width":`${calculateProgressBarWidth()}px`}}>
            <div className='progress'></div>
        </div>
    </div>
          <div className='text-center'>
              <ActiveComponent />
              {!isComplete &&
                  <button className='btn btn-danger' onClick={() => handleNxt()}>{currentStep === stepsConfig.length ? "Finish" : "Next"}</button>}
          </div>
      </>
  )
}

export default CheckoutStepper