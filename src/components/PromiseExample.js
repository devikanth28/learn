import React, { useEffect } from 'react'

const PromiseExample = () => {
    useEffect(() => {

      //consuming the promise
        const fetach = fetch("https://dummyjson.com/products");
        fetach.then(function(data){
            console.log(data)
        }).catch(err => console.log(err))
    },[])

    useEffect(()=>{
      handleTheAPI()
    },[])
    const cart = ["p1, p2, p3"]

    const validateCart = () => {return true};

    //producing the promise
    const pr = new Promise((resolve, reject)=>{
      if(!validateCart(cart)){
        reject("invalid cart")
      };
      if(true){
        setTimeout(()=>{
          resolve("you can proceed to summary cart")
        },10000)
      }
    })

    //consuming the promise with .then and .catch
    pr.then((data) => { 
      console.log(data)
    }).catch((err => console.log(err)))

    

    //consuming the promise with our own with async and await

    const handlePromise = async() =>{
      console.log("Hello world");

      const val1 = await pr;
      console.log("Wait till promise has been resove1");
      console.log("val1", val1);


      const val2 = await pr;
      console.log("wait till promise has been resolved2");
      console.log("val2", val2);
    }

handlePromise();




//actual promise
const API_URL = "https://api.github.com/users/devikanth28";

const handleTheAPI = async() =>{
  try{

    const val = await fetch(API_URL);
   const jsonVal = await val.json();
   console.log("jsonVal", jsonVal)
  }
  catch (err){
    console.log(err)
  }
}

const p1 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("P1 Success")
  },3000)
})

const p2 = new Promise((resolve, reject) =>{
  setTimeout(() =>{
    resolve("P2 success")
  },1000)
});

const p3 = new Promise((resolve, reject) =>{
  setTimeout(() =>{
    // resolve("P3 success")
    reject("P3 Fail")
  },2000)

})

Promise.all([p1,p2,p3]).then(res => console.log("RESSSSSSSSAll",res))
Promise.allSettled([p1,p2,p3]).then(res => console.log("RESSSSSSSSAllSettled",res))
Promise.race([p1,p2,p3]).then(res => console.log("RESSSSSSSSRace",res))

  return (
    <div>
      PromiseExample
      {/* {handleTheAPI()} */}
      </div>
  )
}

export default PromiseExample