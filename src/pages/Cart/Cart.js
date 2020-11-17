import React from 'react';

import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import CartTable from './CartTable';
import Footer from '../../components/Footer/Footer';


function Cart(props) {

  return (
    <div className="cart-page">
      <div className="main">
        <div className="page-header text-center">
          <Container>
            <h1 className="page-title">
              Shopping 
              <span>Cart</span>
            </h1>
          </Container>
        </div>
        <div className="breadcrumb-nav">
          <Container className="breadcrumb-container">
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
              <Link className="breadcumbs-icon" color="inherit" href="/">
                <Typography color="inherit">Home</Typography>
              </Link>
              <Link color="inherit" href="/getting-started">
                <Typography color="inherit">Products</Typography>
              </Link>
              <Typography color="textPrimary">Shopping Cart</Typography>
            </Breadcrumbs>
          </Container>
        </div>
        <div className="page-content">
          <div className="cart">
            <Container>
              <Grid container spacing={2} justify="flex-start" direction="row">
                <Grid item xs={12}>
                  <CartTable />
                </Grid>
              </Grid>
            </Container>  
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
