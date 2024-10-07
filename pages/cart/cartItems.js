import React ,{useContext} from 'react';
import Image from 'next/image';
import { ShopContext } from '../shop/shop_context';

function CartItems(props){
    const {id , productName, price, prudectImage} = props.data;
    const {cartItems ,addToCart,RemoveFromcart,upadteCartItems} = useContext(ShopContext);
    return(
        <div className='cartItem'>
            <Image src={prudectImage} width={200} height={0} />

            <div className='descrption'>
              <p><b>{productName}</b></p>
              <p>${price}</p>
              <div className='countHandler'>
                 <button onClick={()=> RemoveFromcart(id)}>-</button>
                 <input  value={cartItems[id]} onChange={(e)=>upadteCartItems(Number(e.target.value) ,id)}/>
                 <button onClick={()=> addToCart(id)}>+</button>

              </div>
            </div>
        </div>
    );
}
export default CartItems;