import React from 'react'
import './Header.scss'
import { FaCartPlus } from "react-icons/fa";
import { useState } from 'react';
import { CartState } from '../../context/Context';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';




const Header=()=> {
  const{state:{cart},dispatch}=CartState()

  const[open,setOpen]=useState(false);
  console.log(open)
  return (
    <div className='navbar'>
        <a>Shopping Cart</a>
        <div className='search'>
            <input type="text" placeholder='Search a product'/>
        </div>
      
          <FaCartPlus  onClick={()=>setOpen(!open)}/>
          <div className='cart'>
          {open &&<div className="options">
        <div className='options'>
          {
            cart.length>0
            ?(<>
            <div>
              {
                cart.map((item)=>{
                  return(
                    <div style={{display:"flex"}}>
                      <img src={item.image} style={{width:"70px",height:"40px"}}/>
                      <p style={{marginLeft:"10px"}}>{item.name}</p>
                      <AiFillDelete color='red' onClick={()=>dispatch({type:"REMOVE_FROM_CART",payload:item})}/>
                    
                    </div>
                  )
                })
              }
              
            </div>
            </>)
            :(<>Card is empty</>)
          }
             <Link to="/cart">
            <button style={{width:"95%",margin:"0 10px"}}>Go To Cart</button>
          </Link>
           </div>
        
      
            </div>
}
            {cart.length}
          
        </div>
     

    </div>
  )
}

export default Header