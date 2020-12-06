import React, { useState, useContext } from 'react';

// Context
import { DataContext } from '../../../contexts/DataProvider';

// css
import '../../../assets/css/NewArrivals.css';

// Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Components
import ProductCard from "../../../components/Card/ProductCard";

// Material-UI Components
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


export default function NewArrivals() {
  const valueProduct = useContext(DataContext);
  const [products] = valueProduct.products;
  // console.log(products)
  const addCart = valueProduct.addCart;

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const settings = {
    dots: true,
    useCSS: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    centerPadding:'50px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };
  return (
    <div className="NewArrivals">
      <div className="heading">
      <h1 className="heading-title">New Arrivals</h1>
        <div>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="All" />
          <Tab label="Women's" />
          <Tab label="Men's" />
        </Tabs>
        </div>
      </div>
      <div className="tab-content tab-content-carousel">
        <div>
          <Slider {...settings}>
            {
              products.map(product => (
               <ProductCard
                  addCart={() =>addCart(product._id)}
                  productId={product._id}
                  title={product.title}
                  src={`${process.env.PUBLIC_URL}${product.images[0]}`}
                  price={product.price}
                  oldPrice={product.oldPrice}
                  cont1={product.categories[0]}
                  cont2={product.categories[1]}
                />
              ))
            }
          </Slider>
      </div>
      </div>
    </div>
  );
}
