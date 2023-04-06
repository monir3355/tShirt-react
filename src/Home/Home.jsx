import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TShirts from "../TShirts/TShirts";
import Cart from "../Cart/Cart";
import "./Home.css"

const Home = () => {
  const tshirts = useLoaderData();
  // console.log(tshirts);
  const [cart, setCart] = useState([]);
  const handleAddToCart = tshirt =>{
    const haveTShirt = cart.find(ts=>ts._id === tshirt._id);
    if(haveTShirt){
      alert("Already Exists");
    }
    else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
    }
  }
  const handleRemoveFromCart =(id)=>{
    const remaining = cart.filter(tshirt=>tshirt._id !== id)
    setCart(remaining);
  }
  // console.log(cart);
  return (
    <div className="home-container">
      <div className="t-shirts-container">
        {tshirts.map((tshirt) => (
          <TShirts key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart}></TShirts>
        ))}
      </div>
      <div className="cart-container">
          <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
