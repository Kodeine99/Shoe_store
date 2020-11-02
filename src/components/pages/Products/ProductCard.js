import React from 'react';
import '../../../assets/css/ProductCard.css';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

import Rating from '@material-ui/lab/Rating';

import p1 from '../../../assets/img/products/nike/nikeproduct-1-1.jpg';

function ProductCard() {
  return (
    <div className="carousel-product" style={{margin: '0 4px'}} >
      <div className="product product-3 text-center">
        <figure className="product-media">
          <span className="product-label label-sale">40% off</span>
          <a href="#i" ><img src={p1} alt="product"></img></a>
          <div className="product-action-vertical">
            <IconButton  aria-label="delete">
              <FavoriteBorderOutlinedIcon className="btn-product-icon"/>
            </IconButton>
          </div>
        </figure>
        <div className="product-body">
          <div className="product-cat">
            <span className="mr-0"><a href="#i1.1">Nike, </a></span>
            <span className="mr-0"><a href="#i1.2">Joran</a></span>
          </div>
          <h3 className="product-title">
            <a href="#product-title">Jordan Zoom '92</a>
          </h3>
          <div className="product-price">
            <span className="new-price">$99.00</span>
            <span className="old-price">$129.00</span>
          </div>
        </div>
        <div className="product-footer">
          <div className="ratings-container">
            <div className="ratings">
              <Rating className="ratings-val" name="half-rating-read" defaultValue={5} precision={0.5} readOnly style={{ fontSize: "1rem", margin:"auto"}} />
              <h3 className="ratings-text">(2 reviews)</h3>
            </div>
          </div>
          <div className="product-nav product-nav-dots">
            <a className="active" href="#i" style={{background: "rgb(51,51,51)"}}> </a>
            <a className="" href="#i" style={{background: "rgb(51,153,204)"}}> </a>
            <a className="" href="#i" style={{background: "rgb(204,153,102)"}}> </a>
            <a className="" href="#i" style={{background: "rgb(235,235,235)"}}> </a>
          </div>
          <div className="product-action">
            <Button
                className="btn-product"
                variant="outlined"
                color="primary"
                startIcon={<AddShoppingCartOutlinedIcon />}
              >
                Add to cart
              </Button>
          </div>
        </div> 
      </div>
    </div>
  );
}
export default ProductCard;
