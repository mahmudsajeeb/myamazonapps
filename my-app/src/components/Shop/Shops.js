// import React, { useState } from 'react';
// import fakeData from '../../fakeData';
// import Products from '../Product/Products';
// import './Shop.css'
// const Shops = () => {
//   const fake = fakeData.slice(0,10)
//   const [product,setProduct] =  useState(fake)
//   return (
//     <div className="shop-contain">

//     <div className="fakecontainer">
//         {
//           product.map(pd=><Products product={pd}></Products> )
//         }
//     </div>
//     <div className="title">
//         <h1>This is Product title</h1>
//     </div>
      
//     </div>
//   );
// };

// export default Shops;

import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Products from '../Product/Products';
import "./Shop.css"
const Shops = () => {
  const fake = fakeData.slice(0,14)
   const [product,setProduct] = useState(fake);
   const [cart,setCart] = useState([])
  const handleAddProduct = (product)=>{
    const newCart = [...cart,product];
    setCart(newCart)
  }

  return (
    <div className="product">
      <div className="productlist">
       {
          product.map(pd =><Products handleAddProduct ={handleAddProduct} product={pd}></Products>)
        }
      </div>
      <div className="cart-container">
       <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shops;