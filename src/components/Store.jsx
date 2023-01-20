import  { createContext, useReducer, useState } from 'react'
export const StoreShop = createContext()
const initState = {products: [], loading: false, product: {}, cart: []}
const reducer = (state, action) => {
    const {type, payload} = action;
    const {quantities}= state.cart;
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
            case 'ERASE': 
            const filtered = state.cart.filter((item)=> item.id !== payload)
           return {...state, cart: filtered}
            break;
            case 'INCREASE': 
            return {...state, cart: state.cart.map((x) =>
                x.id === payload ? ({...x, quantities: x.quantities + 1}): x
              ),
            };
           break;
           case 'DECREASE': 
            return {...state, cart: state.cart.map((x) =>
                // x.id === payload ? ({...x, quantities: x.quantities - 1 }): x
                {
                  if(x.id === payload){
                    if(x.quantities > 1){
                      return {...x, quantities: x.quantities - 1}
                    }
                    else {
                      return x;
                    }
                  }
                }
              ),
            };
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