import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

const CategoryPage = () => {
    const navigate = useNavigate();
    const {categoryName} = useParams();
    const [categoryData, setCategoryData] = useState([]);

    useEffect(()=>{
        featchData();
    },[])

    const featchData = () => {
         fetch(`https://dummyjson.com/${categoryName}`)
        .then((result)=>result.json())
        .then((res)=>setCategoryData(res.products));
    }
    
    const handleProductDetail = (productId) => {
        navigate(`/productDetail/${productId}`)
    }
  return (
    <div className='d-flex flex-wrap gap-3 m-3'>
        {categoryData && categoryData.map((eachProduct)=>{
            return (
                <div className='card p-2' style={{"width":"200px","height":"300px"}} onClick={()=>{handleProductDetail(eachProduct.id)}}>
                    <img src={eachProduct?.images[0]} alt={eachProduct?.title} width="150px" height="200px"/>
                    <span>{eachProduct?.title}</span>
                    <span>price{eachProduct?.price}</span>
                    <span>brand{eachProduct?.brand}</span>
                    <span>rating{eachProduct?.rating}</span>
                </div>
            )
        })}
    </div>
  )
}

export default CategoryPage