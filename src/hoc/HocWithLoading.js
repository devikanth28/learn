import React, { useEffect, useState } from 'react'

const WithLoading = (WrappedCompoent) => {
    function WithLoadingComponent (props) {
        const [isLoading, setLoading] = useState(true);
        useEffect(()=>{
            const timeId = setTimeout(()=>{
                setLoading(false)
            },2000);
            return () => clearTimeout(timeId)
        }, [])
        if(isLoading){
            return <div>Loading....</div>
        }
        return <WrappedCompoent {...props}/>
    }
    return WithLoadingComponent

}

const ContentDisplay = () => {
    return(
        <div>
             <h2>Content Loaded</h2>
  <p>This content is displayed after loading.</p>
        </div>
    )
}

const DisplayContentLoading = WithLoading(ContentDisplay);
const HocWithLoading = () => {
  return (
    <div>
        HocWithLoading
        <DisplayContentLoading/>
    </div>
  )
}

export default HocWithLoading