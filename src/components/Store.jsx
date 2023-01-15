import  { createContext, useReducer, useState } from 'react'
export const StoreShop = createContext()
const initState = {products: [], loading: false, product: {}, cart: []}
const reducer = (state, action) => {
    const {type, payload} = action;
    switch(type){
        case 'START_LOADER':
            return {...state, loading: payload}
            break;
            case 'CLOSE_LOADER': 
            return {...state , loading: payload}
            break;
            case 'PRODUCTS': 
            return {...state, products: payload}
            break;
            case 'PRODUCT': 
            return {...state, product: payload}
            break;
            case 'ADD_TO_CART': 
            const product = state.cart.find((item)=> item.id === payload.id)
            if(product){
              alert('product already in the cart')
              return state;
            }
            else {
              return {...state, cart: [...state.cart, payload]}
            }
            
            break;
            default:
                return state;
    }
    
}
const Shop = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initState)
  return (
    <StoreShop.Provider value={{state, dispatch}}>
{children}
    </StoreShop.Provider>
  )
}

export default Shop