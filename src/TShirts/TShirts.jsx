import React from 'react';
import "./TShirts.css"
const TShirts = ({tshirt, handleAddToCart}) => {
  // console.log(tshirt);
  const {price, name, gender, picture} = tshirt;
  return (
    <div className='t-shirt'>
      <img src={picture} alt="" />
      <h5>{name}</h5>
      <p>Price : {price}</p>
      <button onClick={()=>handleAddToCart(tshirt)}>Buy Now</button>
    </div>
  );
};

export default TShirts;