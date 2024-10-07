import React from "react";
import {PRODUCT} from '../product';
import Product from "./productComp";


class Shop extends React.Component{


    render(){

        return(
            <div className="shop">
              <div className="shopTitle"> 
                <h1>Eloudi Shop</h1>
              </div>
              <div className="products">
                {PRODUCT.map((product ,ind)=>{
                    return(
                        <div key={ind}>
                           <Product data={product} />
                        </div>
                    );
                } )}
              </div>
            </div>
        );
    }
}

export default Shop;