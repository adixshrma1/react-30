import React from "react";
import { useCart } from "./CartContext";

export const AddToCart = ()=>{

  const {cartState, cartDispatch} = useCart();
  const handleAddToCart =(item)=>{
    const existingItem = cartState.cartItems.find((ele)=>(ele.id === item.id));
    if(existingItem){
      cartDispatch({type: 'UPDATE_QUANTITY', payload: {id: item.id, quantity: existingItem.quantity+1}} )
    }else{
      cartDispatch({type: 'ADD_TO_CART', payload: {...item, quantity: 1}})
    }
  }
  
  const updateQuantity =(id, quantity)=>{
    if(quantity > 0){
      cartDispatch({type: 'UPDATE_QUANTITY', payload: {id: id, quantity: quantity}})
    }
  }

  const removeItem =(id)=>{
    cartDispatch({type: 'REMOVE_FROM_CART', payload: {id: id}})
  }
  const products = [
    { id: 1, name: "intel i5 12400f" },
    { id: 2, name: "Asus B660" },
    { id: 3, name: "RAM 8*2 DDR4" },
    { id: 4, name: "WD 1TB ssd gen4" },
    { id: 5, name: "Samsung 1TB ssd gen3" },
    { id: 6, name: "Nvidia RTX 3070" },
    { id: 7, name: "AMD 6700x" },
    { id: 8, name: "Ryzen 5 5600x" },
    { id: 9, name: "Asus B450" },
  ];

    
  return (
    <>
      <h1 className="font-bold">Task: Implement Shopping Cart.</h1>
      <p className="font-medium bg-gray-300">Select your PC parts.</p>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="py-1">
            {product.name}{" "}
            <button className="bg-yellow-500 text-white px-3 rounded" onClick={()=>handleAddToCart(product)}>
              Add to Card
            </button>
          </li>
        ))}
      </ul>
      <p className="font-medium bg-gray-300">Your Cart</p>
      <ul>
        {cartState.cartItems.map((item)=>(
          <li key={item.id}>{item.name} - {item.quantity}
          <button className="px-3 py-1 border bg-red-500 text-white" onClick={()=>updateQuantity(item.id, item.quantity +1)}>+</button>
          <button className="px-3 py-1 border bg-red-500 text-white" onClick={()=>updateQuantity(item.id, item.quantity -1)}>-</button>
          <button className="px-3 py-1 border bg-red-500 text-white" onClick={()=>removeItem(item.id)}>remove</button></li>
        ))}
      </ul> <br />
    </>
  );
};
