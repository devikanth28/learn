import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ProductDetailPage = () => {
    const [productInfo, setProductInfo] = useState([]);
    const {productId} = useParams();
    console.log(productId)

    useEffect(()=>{
        handleProductDetailPage();
    },[]);

    const handleProductDetailPage = () => {
        fetch(`https://dummyjson.com/products/${productId}`).then((result)=>result.json()).then((res)=>setProductInfo([res]));
    }
  return (
    <div>
        {productInfo && productInfo.map((item)=>{
            return(
                <div>
                    <p>name - {item.title}</p>
                    <p>category - {item.category}</p>
                    <p>description - {item.description}</p>
                    <p>price - {item.price}</p>
                    <p>inStock - {item.stock}</p>
                    {item.images && item.images?.map((img)=>{
                        return(
                            <img src={img} alt={item.title} width="200" height="200" className='m-3'/>
                        )
                    })}
                </div>
            )
        })}
    </div>
  )
}

export default ProductDetailPage