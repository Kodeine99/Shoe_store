import React from 'react';

import { Link as RouterLink } from 'react-router-dom';
import '../../assets/css/ProductCard2.css';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';


function ProductCard2(props) {

  
  return (
    <div className="carousel-product" style={{margin: '0 4px'}} >
      <div className="product product-3 text-center">
        <figure className="product-media">
          {/* <span className="product-label label-sale">40% off</span> */}
          <RouterLink to={`/products/${props.productId}`} href="#i" >
            <img src={props.src} alt="product"></img>
          </RouterLink>
          <div className="product-action-vertical">
            <IconButton  aria-label="delete">
              <FavoriteBorderOutlinedIcon className="btn-product-icon"/>
            </IconButton>
          </div>
        </figure>
        <div className="product-body">
          <div className="product-cat">
            <span className="mr-0"><a href="#i1.1">{props.cont1}, </a></span>
            <span className="mr-0"><a href="#i1.2">{props.cont2} </a></span>
          </div>
          <h3 className="product-title">
            <RouterLink to={`/product/${props.productId}`}>{props.title}</RouterLink>
          </h3>
          <div className="product-price">
            <span className="new-price">${props.price}.00</span>
            <span className="old-price">${ props.oldPrice }.00</span>
          </div>
        </div>
        <div className="product-footer">
          <div className="product-action">
            <Button
                className="btn-product"
                variant="outlined"
                color="primary"
                startIcon={<AddShoppingCartOutlinedIcon />}
                onClick={props.addCart}
              >
                Add to cart
            </Button>
          </div>
        </div> 
      </div>
    </div>
  );
}
export default ProductCard2;
