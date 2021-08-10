import React from 'react';

const Cart = (props) => {
  const cart = props.cart;
  // const totalPrice = cart.reduce((total,prd) =>total + prd.totalPrice,0)
  let total = 0;
  for(let i=0; i<cart.length; i++){
    const product = cart[i];
    total = total + product.price;
  }
  let shipping =12.22;
  if(total > 35){
    shipping = 0

  }else if(total > 15){
        shipping = 5.6 
  }else if(total > 0){
    shipping = 12.33
  }
  const tax = Math.round(total /10)

  return (
    <div>
      <h4>Order Summary </h4>
      <p>Item Ordered: {cart.length}</p>
      <p>Product Price{total}</p>
      <p><small>Shipping Cost:{shipping}</small></p>
      <p><small>Tax + Vat : {tax}</small></p>
      <p>Total Price: {total + shipping + tax}</p>

    </div>
  );
};

export default Cart;