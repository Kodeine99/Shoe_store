import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../../contexts/DataProvider';


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

import i from '../../assets/img/products/nike/product-1-1.jpg'


function ProductDetails() {
  const { id } = useParams();
  const [products, setProducts] = useContext(DataContext); 
  
  const details = products.filter((product, index) => {
    return product._id === id;
  });

  const [count, setCount] = useState(1);

  return (
    <>
      {
        details.map(product => (
          <div key={product._id}>
            <div className="breadcrumb-nav">
              <Container className="breadcrumb-container">
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                  <Link href="/" className="breadcumbs-icon" color="inherit" >
                    <Typography color="inherit">Home</Typography>
                  </Link>
                  <Link color="inherit" href="/products">
                    <Typography color="inherit">Products</Typography>
                  </Link>
                  <Typography color="textPrimary">{product.title}</Typography>
                </Breadcrumbs>
              </Container>
            </div>
            <div className="details-page-content">
              <Container>
                <div className="details-page-top">
                  <Grid container spacing={2} >
                    <Grid item xs={6}>
                      <div className="product-gallery">
                        <figure className="product-main-img">
                          {/* <div style={{ userSelect: "none", cursor: "crosshair" }}> */}
                            {/* <div style={{ position: "relative", cursor: "zoom-in" }}> */}
                              <img
                                src={`${process.env.PUBLIC_URL}${product.images[0]}`}
                                alt={product.title }
                              />
                              <div className="img-style">
                                <img
                                  src={`${process.env.PUBLIC_URL}${product.images[0]}`}
                                  alt={product.title }
                                />
                              </div>
                            {/* </div> */}
                          {/* </div> */}
                        </figure>
                        <div className="product-img-gallery-col">
                          <div id="product-zoom-id" className="product-gallery-item">
                            <img
                              alt=""
                              src={`${process.env.PUBLIC_URL}${product.images[1]}`}
                            />
                          </div>
                          <div id="product-zoom-id" className="product-gallery-item">
                            <img
                              alt=""
                              src={`${process.env.PUBLIC_URL}${product.images[2]}`}
                            />
                          </div>
                          <div id="product-zoom-id" className="product-gallery-item">
                            <img
                              alt=""
                              src={`${process.env.PUBLIC_URL}${product.images[3]}`}
                            />
                          </div>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={6}>
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
                        <div className="product-details-sizes">
                          <label className="product-size-label">Size:</label>
                          {
                            product.sizes.map((size,index) => (
                              <Button className="product-size-btn" key={index} variant="outlined">
                                {size}
                              </Button>
                            ))
                          }
                        </div>
                        <div className="product-details-quantity">
                          <label className="product-quantity-label">Quantity:</label>
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
                            size="large"
                            className="addToCart-btn"
                            variant="outlined"
                            color="primary"
                            startIcon={<AddShoppingCartOutlinedIcon />}
                          >
                              Add to cart
                          </Button>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
                <div className="details-page-bot">

                </div>
              </Container>
            </div>
          </div>
        ))
      }
    </>
  );
}

export default ProductDetails;
