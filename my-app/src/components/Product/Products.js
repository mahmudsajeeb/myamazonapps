// import React from 'react';

// const Products = (props) => {
//   const {img,name} = props.product
//   return (
//     <div>
//         <div className="img">
//           <img src={img}  />
//         </div>
//         <div className="product-name">
//           {name}
//         </div>
      
//     </div>
//   );
// };

// export default Products;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Prodcut.css'

const Products = (props) => {

  const {img,name,price,seller,stock} = props.product
  return (
    <div className="Product-container">
    <div className="product-img">
        <img src={img} alt="ims" />
    </div>
      
      <div className="product-name">
        <h1>{name}</h1>
       
        <p><small>By: {seller}</small></p>
        <p>{price}</p>
        <p><small>Only {stock} left in stock -order soon</small></p>
        <button 
        onClick={()=>{props.handleAddProduct(props.product)}}
        className="btn-button"
        
        > <FontAwesomeIcon icon={faShoppingCart} />  Add to cart</button>
      </div>
    </div>
  );
};

export default Products;