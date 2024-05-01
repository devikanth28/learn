import React from 'react'

const HocWithData = () => {
    const WrappedDataComponent = (WrappedComponent) => {
        const AddDataComponent = (props) => {
            const Data = {
                message :"Added some Data"
            }
           return <WrappedComponent {...props} data={Data}/>
        }
       return AddDataComponent
    }
    const FetchingData = ({data})=>{
        return(
            <div>
                <h2>Display message</h2>
                <p>{data.message}</p>
            </div>
        )
    }
    const DisplayTheFetachingData = WrappedDataComponent(FetchingData);
  return (
    <div>
        HocWithData
        <DisplayTheFetachingData/>
        </div>
  )
}

export default HocWithData