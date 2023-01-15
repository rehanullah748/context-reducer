import React, { useReducer } from 'react'
const initState= 5
const reducer = (state, action) =>{
    console.log(state, action)
    if(action.type==='Increment'){
        return state +1
    }
    else if(action.type==="Decrement"){
        return state -1
    }
    return state
}
export const UseReducers = () => {
    
    const [state, dispatch] = useReducer(reducer,initState)
  return (
    <div>
        <p>{state}</p>
        <button onClick={()=>dispatch({type: "Increment"})}>Inc</button>
        
        <button onClick={()=>dispatch({type: "Decrement"})}>Dec</button>
        UseReducers</div>
  )
}
