import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../../../assets/css/ProductCard.css';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

import Rating from '@material-ui/lab/Rating';

import p1 from '../../../assets/img/products/product-1-1.jpg';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));

function ProductCard() {
  return (
    <div className="carousel-product" style={{width: '100%'}}>
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
            <span className="mr-0"><a href="#i1.1">Adidas, </a></span>
            <span className="mr-0"><a href="#i1.2">Ultra Boots</a></span>
          </div>
          <h3 className="product-title">
            <a href="#product-title">The North Face Back-To-Berkeley Remtlz Mesh</a>
          </h3>
          <div className="product-price">
            <span className="new-price">$50.00</span>
            <span className="old-price">$80.00</span>
          </div>
        </div>
        <div className="product-footer">
          <div className="ratings-container">
            <div className="ratings">
              <Rating className="ratings-val" name="half-rating-read" defaultValue={5} precision={0.5} readOnly style={{ fontSize: "1.2rem", margin:"auto"}} />
              <h3 className="ratings-text">(2 reviews)</h3>
            </div>
          </div>
          <div className="product-nav product-nav-dots">
            <a className="active" href="#i" style={{background: "rgb(51,51,51)"}} ></a>
            <a className="" href="#i" style={{background: "rgb(51,153,204)"}} ></a>
            <a className="" href="#i" style={{background: "rgb(204,153,102)"}} ></a>
            <a className="" href="#i" style={{background: "rgb(235,235,235)"}} ></a>
          </div>
          <div className="product-action">
              <Button
                variant="contained"
                color="secondary"
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
