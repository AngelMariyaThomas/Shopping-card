import React, { useState } from "react";
import "./Filter.scss";
import Rating from "../rating/Rating";
import { CartState } from "../../context/Context";

const Filter = () => {
  const [rate, SetRate] = useState(3);

  const {
    productState: { byStock, byFastDelivery, byRating, sort, searchQuery },
    productDispatch, 
  } = CartState();
console.log(byStock, byFastDelivery, byRating, sort,searchQuery);
  return (
    <div className="filter">
      <span className="filter-title">Filter Products</span>
      <span>
        <input type="radio" id={`inline-1`}
        onChange={() =>
          productDispatch({
            type: "SORT_BY_PRICE",
            payload: "lowToHigh",
          })
        }
        checked={sort === "lowToHigh" ? true:false}
        name="group1" value="ascending" />
        <label for="ascending">Ascending</label> <br />
      </span>
      <span>
        <input type="radio" id={`inline-2 `} 
        onChange={() =>
          productDispatch({
            type: "SORT_BY_PRICE",
            payload: "highToLow",
          })
        }
        checked={sort === "highToLow" ? true : false}
        
        
        name="group1" value="descending" />
        <label for="descending">Descending</label>
      </span>
      <span>
        <input type="checkbox" id={`inline-3`}
        
        onChange={() =>
          productDispatch({
            type: "FILTER_BY_STOCK",
          })
        }
        checked={byStock}
        name="group1" />
        <label for="">Include out of stock</label>
      </span>
      <span>
        <input type="checkbox" id={`inline-4`}
        onChange={() =>
          productDispatch({
            type: "FILTER_BY_DELIVERY",
          })
        }
        checked={byFastDelivery}
        
        
        name="group1" />
        <label for=""> Fast delivery only</label>
      </span>
      <span>
        <label>Rating</label>
        <Rating
          rating={byRating}
          onClick={(i) => 
          productDispatch({
            type: "FILTER_BY_RATING",
            payload: i+1
          })
          
          
          }
          style={{ cursor: "pointer" }}
        />
      </span>
      <br></br>
      <button
      onClick={() =>
        productDispatch({
          type: "CLEAR_FILTERS",
        })
      }
      
      >Clear Filters</button>
    </div>
  );
};

export default Filter;
