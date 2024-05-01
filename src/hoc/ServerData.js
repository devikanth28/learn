import React, { useEffect, useState } from 'react'

const ServerData = () => {
    const WithServerData = (WrappedCompnent) =>{
        const ServerDataComponent = (props) =>{
            const [data, setData] =useState(null);
            useEffect(()=>{
                setTimeout(()=>{
                    const featchData = "This is Server Data";
                    setData(featchData)
                },2000)
            },[]);
            return <WrappedCompnent {...props} data={data}/>
        }
        return ServerDataComponent;
    }
    const MyComponent = ({data}) =>{
        return(
            <div>
                <h1>this is my component </h1>
                <p>{data}</p>
            </div>
        )
    }
    const EnhancedComponent = WithServerData(MyComponent)
  return (
    <div>
        ServerData
        {<EnhancedComponent/>}
    </div>
  )
}

export default ServerData