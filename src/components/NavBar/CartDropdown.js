import React, {useContext} from 'react';
import { DataContext } from '../../contexts/DataProvider';
import { Link as RouterLink } from "react-router-dom";

import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';

import ClearIcon from "@material-ui/icons/Clear";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";


function CartDropdown() {
  const value = useContext(DataContext);
  const [cart] = value.cart;
  return (
    <div>
      <div className="cart-dropdown-menu text-center dropdown-right">
        <p>No products in the cart</p>
        {
          cart.map((product, index) => (
            <div key={index} className="cart-dropdown-products">
              <div className="cart-product">
                <div className="cart-product-details">
                  <h4 className="cart-product-title">
                    <a href="#p">{product.title}</a>
                  </h4>
                  <span className="cart-product-info">
                    <span className="cart-product-qty">1</span>x ${product.price}.00
                  </span>
                </div>
                <figure className="cart-product-img-container">
                  <a className="cart-product-img" href="#i">
                    <img src={`${process.env.PUBLIC_URL}${product.images[index]}`} alt="Product 1"></img>
                  </a>
                </figure>
                <IconButton className="btn-remove" title="Remove Product">
                  <ClearIcon />
                </IconButton>
              </div>
            </div>
          ))
        }
        <div className="cart-dropdown-total">
          <span>Total </span>
          <span className="cart-total-price"> $99.00</span>
        </div>
        <div className="cart-dropdown-action">
          <Button
            variant="outlined"
            color="primary"
            component={RouterLink}
            to="/cart"
          >
            View Cart 
          </Button>
          <Button
            variant="outlined"
            color="default"
            endIcon={<ArrowRightAltIcon />}
          >
            Check Out
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartDropdown;
