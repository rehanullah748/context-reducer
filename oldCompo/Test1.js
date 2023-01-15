import React, { useReducer } from 'react'
import { UseReducers } from './UseReducers'
const initstate=''
const function1 = (state, action)=>{
if(action.name==='Aziz'){
    alert("yes you are Aziz")
}
else if (action.name==='Rehan'){
    alert("Hey Boss! You are Sir. Rehan Ullah")
}
return state
}
export const Test1 = () => {
   const [state, dispatch] = useReducer(function1, initstate)
 
  return (
    <div>
        
   <button onClick={()=>dispatch({name : "Aziz"})}>Aziz</button>
   
   <button onClick={()=>dispatch({name : "Rehan"})}>Rehan Ullah</button>
   Test1</div>
  )
}
