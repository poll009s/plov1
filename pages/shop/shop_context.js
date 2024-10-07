import React, { createContext, useState } from 'react';
import {PRODUCT} from '../product';

export const  ShopContext = createContext(null);

const getDefaultcart = () =>{

    let cart = {}
    for(let i=1 ; i<PRODUCT.length+1 ; i++){
        cart[i] = 0;
    }
    return cart;
}
function ShopcontxetProvider(props){
   const [cartItems, setcartItems] = useState(getDefaultcart());

   const getTotlaCardAmount = ()=>{
       let toutalAmount = 0;
       for(let item in cartItems ){
          if(cartItems[item] >0){
             let iteminfo = PRODUCT.find((product) => product.id === Number(item) )
            toutalAmount +=  cartItems[item] * iteminfo.price;
          }
       }
       return toutalAmount;
   }
    const addToCart = (itemsid)=>{
        setcartItems((prevs)=> ({...prevs ,[itemsid]:prevs[itemsid] +1}))
     }
     const RemoveFromcart = (itemsid)=>{
        setcartItems((prevs)=> ({...prevs ,[itemsid]:prevs[itemsid] -1}))
     }
     const upadteCartItems = (newAmount,itemid)=>{
       setcartItems((prevs) =>({...prevs , [itemid] :newAmount}))
     }
     const ContextValue = {
        cartItems,
        addToCart,
        RemoveFromcart,
        upadteCartItems,
        getTotlaCardAmount,
     }
    return(
        
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopcontxetProvider;