import React, { useState } from 'react';
import fakeData from "../../fakeData";
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

const fake = fakeData.slice(0,10)
const [product,setProduct] = useState(fake)

  return (
    <div className="shop-container">
     <div className="product-container">
      
          {
            product.map(pd =><Product product={pd}></Product>)
          }
        
     </div>
    
     <div className="cart-container">
       <h3>This is cart</h3>
     </div>
    </div>
  );
};

export default Shop;