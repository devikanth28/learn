import React from 'react'
import { useNavigate } from 'react-router'

const EcommerceHome = () => {
  const navigate = useNavigate();
  const dummyArray = [
    {
      name:"Products",
      img:"https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      reqUrl:"products"
    },
    {
      name:"Carts",
      img:"https://cdn.dummyjson.com/product-images/59/thumbnail.jpg",
      reqUrl:"carts"
    },
    {
      name:"Users",
      img:"https://robohash.org/Terry.png?set=set4",
      reqUrl:"users"
    },
    {
      name:"Recipes",
      img:"https://cdn.dummyjson.com/recipe-images/1.webp",
      reqUrl:"recipes",
    },
    {
      name:"Todos",
      img:"https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
      reqUrl:"todos"
    },
    {
      name:"posts",
      img:"https://cdn.dummyjson.com/product-images/5/1.jpg",
      reqUrl:"posts"
    },
    {
      name:"comments",
      img:"https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
      reqUrl:"comments"
    }
  ]
  const handleCategoryPage = (reqUrl) => {
    navigate(`/category/${reqUrl}`)
  }
  return (
    <div>
      <p>please click on product caregory only</p>
      <div className='d-flex flex-wrap gap-3 m-3'>
        {dummyArray.map((each, index)=>{
          return(
            <div className='card' key={index} style={{"height":"200px","width":"200px"}} onClick={()=>{handleCategoryPage(each.reqUrl)}}>
              <img src={each.img} alt={each.name} width="150px" height="150px"/>
              <span className='fw-bold text-center mt-2'>{each.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default EcommerceHome