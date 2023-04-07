import React from 'react';

const Cart = ({cart, handleRemoveFromCart}) => {
  // console.log(cart);
  let message;
  if(cart.length === 0){
    message = <p>please add the products</p>
  }
  else {
    message = <p>You added {cart.length} items products</p>
  }
  return (
    <div>
      <h3>Orders Summary : {cart.length}</h3>
      {message}
      {
        cart.length > 0 ? <h5>good work</h5> : <h5>not good work</h5>
      }
      {
        cart.map(tshirt=><p key={tshirt._id}>{tshirt.name} <button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button></p>)
      }
    </div>
  );
};

export default Cart;