import React from 'react';
import '../../assets/css/ProductCard.css';

import { Link as RouterLink } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

import Rating from '@material-ui/lab/Rating';

function ProductCard(props) {
  return (
    <div className="carousel-product-1" style={{ margin: '0 4px' }}>
      <div className="product product-n text-center">
        <figure className="product-media">
          {/* <span className="product-label label-sale">40% off</span> */}
          <RouterLink to={`/products/${props.productId}`}>
            <img src={props.src} alt="product"></img>
          </RouterLink>
          <div className="product-action-vertical">
            <IconButton aria-label="delete">
              <FavoriteBorderOutlinedIcon className="btn-product-icon" />
            </IconButton>
          </div>
        </figure>
        <div className="product-body">
          <div className="product-cat">
            <span className="mr-0">{<a href="#i1.1">{props.tag1}, </a>}</span>
            <span className="mr-0">{<a href="#i1.2">{props.tag2} </a>}</span>
          </div>
          <h3 className="product-title">
            <RouterLink to={`/product/${props.productId}`}>{props.title}</RouterLink>
          </h3>
          <div className="product-price">
            <span className="new-price">${props.price}.00</span>
            <span className="old-price">${props.oldPrice}.00</span>
          </div>
        </div>
        <div className="product-footer">
          <div className="ratings-container">
            <div className="ratings">
              <Rating
                className="ratings-val"
                name="half-rating-read"
                defaultValue={5}
                precision={0.5}
                readOnly
                style={{ fontSize: '1rem', margin: 'auto' }}
              />
              <h3 className="ratings-text">(2 reviews)</h3>
            </div>
          </div>
          <div className="product-nav product-nav-dots">
            <a className="active" href="#i" style={{ background: 'rgb(51,51,51)' }}>
              {' '}
            </a>
            <a className="" href="#i" style={{ background: 'rgb(51,153,204)' }}>
              {' '}
            </a>
            <a className="" href="#i" style={{ background: 'rgb(204,153,102)' }}>
              {' '}
            </a>
            <a className="" href="#i" style={{ background: 'rgb(235,235,235)' }}>
              {' '}
            </a>
          </div>
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
export default ProductCard;
