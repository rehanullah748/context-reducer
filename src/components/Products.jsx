import { Loading } from '@nextui-org/react'
import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { StoreShop } from './Store'


const Products = () => {
    const {state, dispatch} = useContext(StoreShop)
    useEffect(()=>{
        dispatch({type: 'START_LOADER', payload: true})
        axios.get(`https://fakestoreapi.com/products`).then(({data})=>{
            dispatch({type: 'CLOSE_LOADER', payload: false})
            dispatch({type: 'PRODUCTS', payload: data})
        }).catch((error)=>{
            dispatch({type: 'CLOSE_LOADER', payload: false})
        })

    }, [])
  
    return (
        <>
        <header className='w-full h-[350px]'><img className='w-full h-full object-cover' src="../banner-3.webp" alt="" /></header>
        <div className='max-w-screen-lg mx-auto px-4'>
            {state.loading ?  <div className='flex justify-center items-center h-screen'><Loading type="spinner" size="lg" /></div> :
        
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 my-20'>
                {state.products.map((item) => {
                    return (
                        <Link  to={`/product/${item.id}`}>
                        <div className='flex flex-col '>
                        <div  className=''>
                            <img className='w-full h-[200px] object-contain' src={item.image} alt="" />
                        </div>
                        <div className='text-base font-medium mt-6'>{item.title}</div>
                        <div><p className='text-base font-semibold'>{item.description.slice(0,24)}...</p></div>
           <div><h2 className='text-base font-lg'>${item.price}</h2></div>
                        </div>
                        </Link>
                        
                    )
                })}
            </div>
        }</div>
        </>
    )
    
  }

export default Products