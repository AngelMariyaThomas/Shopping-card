import React from 'react'
import './CatCard.scss'
import Rating from '../rating/Rating'
import { CartState } from '../../context/Context'

const CatCard=({item})=> {
  const{
    state:{cart},
    dispatch,
  }= CartState();
    

  return (

    <div className='catCard'>
 
    
        <img src={item.image} alt=""/>
        <span className='desc'>${item.price}</span>
        <span className='title'>{item.name}</span>
        <span className='delivery'> 
        {item.fastDelivery ? (
          <div>Fast Delivery</div>
        ):( 
          <div>4 days delivery</div>
        )}
        </span>
        <span className='rating'>
 <Rating rating={item.ratings}/>

 {
  cart.some(p=>p.id===item.id)?(
    <button className='btn1' onClick={()=>{
      dispatch({
        type:"REMOVE_FROM_CART",
        payload:item,
      });
    }}>Remove from cart</button>

  ):( 
    <button className='btn2' onClick={()=>{dispatch({type:"ADD_TO_CART",payload:item})
    }} disabled={!item.inStock}>
    {!item.inStock? "Out of stock" : "Add to cart"}
   </button>
       )
 }



 




 </span>

    </div>
    // </Link>
  )
}

export default CatCard