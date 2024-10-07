import React from "react";
import Link from "next/link";
import { ShoppingCart , HouseSimple } from "phosphor-react";
class NaveBare extends React.Component {
  render() {
    return (
      <div>
        <nav className="nav-wrapper black">
          <div>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link href="/shop/shop">
                  <i>shoop</i>
                </Link>
              </li>
              <li>
                <Link href="/cart/carte" className="icnons">
                  <i>
                    <ShoppingCart size={32} />
                  </i>
                </Link>

                
              </li>
              <li>
                <Link href="/" className="icnons">
                  <i>
                    <HouseSimple size={32} />
                  </i>
                </Link>

                
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NaveBare;
