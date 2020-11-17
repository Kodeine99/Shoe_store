import React from 'react';
import { Container, Grid } from '@material-ui/core';
import './CartSummary.css';

function CartSummary(props) {
  return (
    <div className="cart-summary">
      <Container>
        <h2 className="cart-summary-title">Cart total</h2>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <h3 className="cart-summary-subtitle">SubTotal</h3>
            <span>$100.00</span>
          </Grid>
          <Grid item xs={4}>
            <h3 className="cart-summary-shipping">Shipping</h3>
            <span>Free shipping</span>
          </Grid>
          <Grid item xs={4}>
            <h3 className="cart-summary-total">Total</h3>
            <span className="cart-summary-total">$100.00</span>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default CartSummary;
