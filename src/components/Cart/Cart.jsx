import React, { useEffect,useState} from 'react'
import { CartState } from '../../context/Context'
import Rating from '../rating/Rating';
import { AiFillDelete } from 'react-icons/ai';
import './Cart.scss';
import Subtotal from '../subtotal/Subtotal';

const Cart=()=> {
  const{
    state:{cart},
    dispatch,
  }=CartState();

  const [total,setTotal]=useState();
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price),0))

  },[])

  return (
    <div className='home' style={{justifyContent:"space-between"}}>
      <div className='productcontainer'>
      <table>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Quantity</th>
            <th>Remove</th>
          </tr>
          
        
            {
              cart.map((item=>(
                <tr>
                    <td ><img src={item.image} style={{width:"30%"}}/></td>
                    <td >{item.name}</td>
                    <td>{item.price}</td>
                    <td><Rating rating={item.ratings}/></td>
                    <td><select
                    value={item.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: item.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(item.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </select></td>
                    <td> <AiFillDelete color='#e21b5a' size={20}style={{marginLeft:"15px"}} onClick={()=>dispatch({ type:"REMOVE_FROM_CART",payload:item})}/></td>
                
                </tr>
                
              )))
            }
        
        </table>
      </div>

      <Subtotal total={total}/>

    </div>
  )
}

export default Cart