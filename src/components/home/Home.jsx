import React from 'react'
import { CartState } from '../../context/Context'
import Filter from '../filter/Filter';
import "./Home.scss"
import CatCard from '../CatCard/CatCard';
import Rating from '../rating/Rating';

const Home=() =>{

   const { state:{products},
   productState:{sort,byStock,byFastDelivery,byRating,searchQuery},
  }=CartState();

  const transformProducts =()=>{
    let sortedProducts = products;

    if(sort){
      sortedProducts= sortedProducts.sort((a,b)=>
        sort==='lowToHigh'? a.price - b.price:b.price-a.price
      );
    }

    if(!byStock){
      sortedProducts=sortedProducts.filter((item)=>item.inStock);
    }
    if(byFastDelivery){
      sortedProducts = sortedProducts.filter((item)=>item.fastDelivery)
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings == byRating
      );
    }
    if(searchQuery){
      sortedProducts=sortedProducts.filter((item)=>
      item.name.toLowerCase().includes(searchQuery)
        
      )
    }
    return sortedProducts;
  }

   console.log(products);

  return <div className='home'>
    <Filter/>
    <div className='productContainer'>
      {transformProducts().map ((prod)=> {
        return<CatCard item={prod} key={prod.id}/>
      })}

    </div>

  </div>
  
}

export default Home