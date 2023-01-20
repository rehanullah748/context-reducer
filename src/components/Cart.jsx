import { Loading } from '@nextui-org/react'
import React, { useContext } from 'react'
import { StoreShop } from './Store'
import {AiFillPlusCircle, AiFillMinusCircle} from "react-icons/ai"
const Cart = () => {
    const {state, dispatch} = useContext(StoreShop)
    const {cart, loading} = state;
    
  return (
    <div className='max-w-screen-lg mx-auto'>
{loading ? <div className='flex justify-center items-center h-screen'><Loading type="spinner" size="lg" /></div>:
<div className='w-full  mt-[70px]' >
<table >
    <thead>
        <th className="mx-[60px] p-3 uppercase text-xs font-bold font-arial text-gray-600 text-left">Image</th>
        <th className="mx-[60px] p-3 uppercase text-xs font-bold font-arial text-gray-600 text-left">Title</th>
        <th className="mx-[60px] p-3 uppercase text-xs font-bold font-arial text-gray-600 text-left">Price</th>
        <th className="mx-[60px] p-3 uppercase text-xs font-bold font-arial text-gray-600 text-left">Category</th>
        <th className="mx-[60px] p-3 uppercase text-xs font-bold font-arial text-gray-600 text-left">Quantity</th>
        <th className="mx-[60px] p-3 uppercase text-xs font-bold font-arial text-gray-600 text-left">Delete</th>
    </thead>
    <tbody>
    {cart.map((item)=> {
return (
 <tr>
    <td className="p-3 text-sm text-gray-600 "><img className='w-[70px] h-[70px]' src={item.image} alt="" /></td>
    <td className="p-3 text-sm text-gray-600 ">{item.title.slice(0,20)}</td>
    <td className="p-3 text-sm text-gray-600 ">{item.price*item.quantities}</td>
    <td className="p-3 text-sm text-gray-600 ">{item.category}</td>
    <td className="p-3 text-sm text-gray-600 ">
    <div className='flex'>
    <span className='px-2'><AiFillPlusCircle onClick={()=>dispatch({type:"INCREASE", payload:item.id})} size={20}/></span>
    
    <input className='border-2 w-[60px] text-center' type="text" value={item.quantities} />
    <span className='px-2'><AiFillMinusCircle onClick={()=>dispatch({type:"DECREASE", payload:item.id})} size={20}/></span>
    </div>
    </td>
    <td className="p-3 text-sm text-gray-600"><button onClick={()=>dispatch({type: "ERASE", payload: item.id})}>Delete</button></td>
 </tr>
)
})}
    </tbody>
</table>
<hr className='border-3' />
<div className='mt-10'>
<div>Shipping Cost: $5</div>
<div>Total Price: </div>
</div>
</div>
}


    </div>
  )
}

export default Cart