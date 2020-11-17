import React, {useContext, useState, useEffect} from 'react';
import { DataContext } from '../../contexts/DataProvider';
import { Link as RouterLink } from "react-router-dom";

import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';

import ClearIcon from "@material-ui/icons/Clear";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";


function CartDropdown() {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + (item.price * item.count);
      }, 0)
      setTotal(res);
    }
    getTotal();
  }, [cart]);

  const removeProduct = id => {
    cart.forEach((item, index) => {
      if (item._id === id) {
        cart.splice(index, 1);
      }
    })
    setCart([...cart]);
  };


  if (cart.length === 0) {
    return (
      <div className="cart-dropdown-menu text-center dropdown-right">
        <p>No products in the cart</p>
      </div>
    )
  }
    
  return (
    <div>
      <div className="cart-dropdown-menu text-center dropdown-right">
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
                    <img src={`${process.env.PUBLIC_URL}${product.images[0]}`} alt="Product 1"></img>
                  </a>
                </figure>
                <IconButton onClick={() => removeProduct(product._id)} className="btn-remove" title="Remove Product">
                  <ClearIcon />
                </IconButton>
              </div>
            </div>
          ))
        }
        <div className="cart-dropdown-total">
          <span>Total </span>
          <span className="cart-total-price">${total }.00</span>
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
