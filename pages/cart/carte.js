import React ,{useContext}from "react";
import {PRODUCT} from '../product';
import { ShopContext } from '../shop/shop_context';
import CartItems from "./cartItems";
import Link from "next/link";
function Cart (){
        const {cartItems,getTotlaCardAmount} = useContext(ShopContext);
        const totolAmount = getTotlaCardAmount();
        return(
            <div className="cart">
                <div>
                    <h1> Your cart items</h1>
                </div>
                <div className="cartItems">
                  {PRODUCT.map((product , inde) =>{
                    if(cartItems[product.id] !== 0){
                        return <CartItems  data={product}/>
                    }
                  })}
                </div>
                {totolAmount >0 ?(
                <div className="checkout">
                 <p>SubTotal :  {totolAmount}$</p>
                 <button><Link href='/shop/shop'>Continue Shoping</Link></button>
                 <button>checkout</button>
                </div> ) :(
                  <h1>Your cart is empty</h1>
                )}
            </div>
        );
}

export default Cart;