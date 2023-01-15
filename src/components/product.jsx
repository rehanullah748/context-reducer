import { Badge } from '@nextui-org/react'
import axios from 'axios'
import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { StoreShop } from './Store'

const Product = () => {
  
  const {state, dispatch} = useContext(StoreShop)
  const {product,loading} = state
  
  const {id} = useParams()
  useEffect(()=>{
    dispatch({type: 'START_LOADER', payload: true})
    axios.get(`https://fakestoreapi.com/products/${id}`).then(({data})=>{
      console.log(data)
      dispatch({type: 'CLOSE_LOADER', payload: false})
      dispatch({type: 'PRODUCT', payload: data})
    }).catch((error)=>{
      dispatch({type: 'CLOSE_LOADER', payload: false})
    })
  }, [])
  const addToCart =(product)=> {
dispatch({type: "ADD_TO_CART",  payload: {...product, quantities:1}})
  }
  console.log(product)
  return (
    <div className='max-w-screen-lg mx-auto px-4'>
      {loading ? "loading...":
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-[60px]'>
      <div className='w-[300px] h-[330px]' ><img className='w-full object-cover' src={product.image} alt="" /></div>
     
      <div className='mt-15'>
        <h1 className='text-2xl font-medium'>{product.title}</h1>
        <Badge className='my-3 capitalize font-mono text-base' enableShadow disableOutline color="secondary">
          {product.category}
        </Badge>
        <h1>${product.price}</h1>
        <span>Description:</span>
        <p>{product?.description?.slice(0,150)}...</p>
        <button onClick={(()=>addToCart(product))} className='px-4 py-2 bg-blue-500 text-white text-base rounded mt-5'>Add To Cart</button>
        </div>
      </div>
      }
    </div>
  )
}

export default Product