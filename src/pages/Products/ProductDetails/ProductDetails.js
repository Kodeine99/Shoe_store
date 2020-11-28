import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../../../contexts/DataProvider';
import { Link as RouterLink } from "react-router-dom";

import './ProductDetails.css';

import { Button, Container, Grid, Input } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';

import ProductSizes from './ProductSizes';
import ProductImgCol from './ProductImgCol';
import Footer from '../../../components/Footer/Footer';
import ProductDetailsTab from './ProductDetailsTab';


function ProductDetails() {
  const { id } = useParams();
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;
  const [count, setCount] = useState(1);
  const [index, setIndex] = useState(0);
  
  
  const details = products.filter((product, index) => {
    return product._id === id;
  });

  return (
    <>
      {
        details.map(product => (
          <div key={product._id}>
            <div className="breadcrumb-nav">
              <Container className="breadcrumb-container">
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                  <RouterLink to="/" className="breadcumbs-icon" color="inherit" >
                    <Typography color="inherit">Home</Typography>
                  </RouterLink>
                  <RouterLink color="inherit" to="/products">
                    <Typography color="inherit">Products</Typography>
                  </RouterLink>
                  <Typography color="textPrimary">{product.title}</Typography>
                </Breadcrumbs>
              </Container>
            </div>
            <div className="details-page-content">
              <Container>
                <div className="details-page-top">
                  <Grid container spacing={2} >
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <div className="product-gallery">
                        <figure className="product-main-img">
                          {/* <div style={{ userSelect: "none", cursor: "crosshair" }}> */}
                            {/* <div style={{ position: "relative", cursor: "zoom-in" }}> */}
                              <img
                                src={`${process.env.PUBLIC_URL}${product.images[index]}`}
                                alt={product.title }
                              />
                              <div className="img-style">
                                <img
                                  src={`${process.env.PUBLIC_URL}${product.images[index]}`}
                                  alt={product.title }
                                />
                              </div>
                            {/* </div> */}
                          {/* </div> */}
                        </figure>
                        <ProductImgCol images={product.images} setIndex={ setIndex } />
                      </div>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <div className="product-details">
                        <Typography
                          variant="h4"
                          className="product-title">{product.title}
                        </Typography>
                        <div className="ratings-container">
                          <Box
                            style={{ marginLeft: '0' }}
                            component="fieldset" mb={0}
                            borderColor="transparent"
                          >
                            <Rating
                              size="small"
                              name="read-only"
                              value={5}
                              readOnly
                            />
                          </Box>
                          <a href="/" className="ratings-text">(0 reviews)</a>
                        </div>
                        <Typography className="product-details-price"
                          color="primary" variant="h4">${product.price}.00
                        </Typography>
                        <Typography
                          className="product-details-desc"
                          variant="body1">{product.description}
                        </Typography>
                        <ProductSizes sizes={product.sizes}/>
                        <div className="product-details-quantity">
                          <label className="product-quantity-label">
                            Quantity:
                          </label>
                          <ButtonGroup>
                            <Button
                              aria-label="reduce"
                              onClick={() => {
                                setCount(Math.max(count - 1, 0));
                              }}
                            >
                              <RemoveIcon fontSize="small" />
                            </Button>
                            <Input
                              className="product-quantity-input"
                              style={{border:'1px solid #ccc'}}
                              id="standard-basic"
                              value={count}
                              size="small"
                              disableUnderline={true}
                            />
                            <Button
                              aria-label="increase"
                              onClick={() => {
                                setCount(count + 1);
                              }}
                            >
                              <AddIcon fontSize="small" />
                            </Button>
                          </ButtonGroup>
                        </div>
                        <div className="product-details-action">
                          <Button
                            component={RouterLink}
                            to="/Cart"
                            onClick={() =>addCart(product._id)}
                            size="large"
                            className="addToCart-btn"
                            variant="outlined"
                            color="primary"
                            startIcon={<AddShoppingCartOutlinedIcon />}
                          >
                              Add to cart
                          </Button>
                        </div>
                        <div className="product-details-footer">
                          <span className="product-category-label">
                            Category:
                          </span>
                          <span>
                            <Link href="#" variant="subtitle1" color="textSecondary">
                              {product.categories[0]}
                            </Link>
                          </span>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
                <div className="details-page-bot">

                </div>
                <ProductDetailsTab description={ product.description }/>
              </Container>
              <Footer />
            </div>
          </div>
        ))
      }
    </>
  );
}

export default ProductDetails;
