import React, { useContext } from 'react';
import Image from 'next/image';
import { ShopContext } from './shop_context';

function Product(props){

     const {id , productName, price, prudectImage} = props.data;
     const {addToCart ,cartItems} = useContext(ShopContext);
     const cardamount = cartItems[id]
    return(
        <div className='product'>
          <Image  src={prudectImage} width={0} height={0}/>
          <div className='descrption'>
             <p><b>{productName}</b></p>
             <p>${price}</p>
          </div> 
          <button className='addToCartBttn' onClick={()=> addToCart(id)}>Add To Cart {cardamount > 0 && <>  ({cardamount}) </>}</button>
        </div>
    )
}

export default Product;