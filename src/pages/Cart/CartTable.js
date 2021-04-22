import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../contexts/DataProvider';

import { Link, Container, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import ClearIcon from '@material-ui/icons/Clear';
import Autocomplete from '@material-ui/lab/Autocomplete';

import './Cart.css';
import './CartTable.css';

export default function CartTable() {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.count;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  const reduce = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart([...cart]);
  };
  const increase = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count += 1;
      }
    });
    setCart([...cart]);
  };

  const removeProduct = (id) => {
    cart.forEach((item, index) => {
      if (item.id === id) {
        cart.splice(index, 1);
      }
    });
    setCart([...cart]);
  };

  // console.log(cart);

  if (cart.length === 0) {
    return <h2>Cart is empty !</h2>;
  }

  return (
    <div className="cart-table">
      <Container>
        <div className="cart-table-content table-responsive">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Product name</th>
                <th>Unit price</th>
                <th>Qty</th>
                <th>SubTotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product, index) => (
                <tr key={index}>
                  <td className="product-thumbnail">
                    <Link href="#">
                      <img
                        className="product-img-fluid"
                        alt="img-fluid"
                        src={`${process.env.PUBLIC_URL}${product.images[0]}`}
                      />
                    </Link>
                  </td>
                  <td className="product-name">
                    <Link href="#">{product.title}</Link>
                    <div className="cart-item-variantion">
                      <span>
                        {/* Size: {product.size} */}
                        <Autocomplete
                          options={product.sizes}
                          id="size"
                          debug
                          style={{ width: 100, margin: 'auto' }}
                          renderInput={(params) => (
                            <TextField {...params} label="size" margin="normal" />
                          )}
                        />
                      </span>
                    </div>
                  </td>
                  <td className="product-price-cart">
                    <span>${product.price}.00</span>
                  </td>
                  <td className="product-quantity">
                    <div className="cart-plus-minus">
                      <button className="dec qtybutton" onClick={() => reduce(product.id)}>
                        -
                      </button>
                      <input
                        className="cart-plus-minus-box"
                        type="text"
                        value={product.count}
                      ></input>
                      <button className="inc qtybutton" onClick={() => increase(product.id)}>
                        +
                      </button>
                    </div>
                  </td>
                  <td className="product-subtotal">${product.count * product.price}.00</td>
                  <td className="product-remove">
                    <IconButton onClick={() => removeProduct(product.id)} aria-label="delete">
                      <ClearIcon />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
      <div className="cart-summary">
        <Container>
          <h2 className="cart-summary-title">Cart total</h2>
          <Grid container spacing={4}>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <h3 className="cart-summary-subtitle">SubTotal</h3>
              <span>${total}.00</span>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <h3 className="cart-summary-shipping">Shipping</h3>
              <span>Free shipping</span>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <h3 className="cart-summary-total">Total: ${total}.00</h3>
              <Button variant="outlined" color="secondary">
                Proceed to checkout
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
