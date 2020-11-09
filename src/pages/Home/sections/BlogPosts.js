import React from 'react';
import '../../../../assets/css/BlogPosts.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


// import ProductCard from "../../Products/ProductCard";
import BlogCard from "../../../Card/BlogCard";


export default function BlogPosts() {
  const settings = {
    dots: false,
    useCSS: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    centerPadding:'50px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      }
    ]
  };
  return (
    <div className="BlogPosts">
      <div className="heading">
      <h1 className="heading-title">From Our Blog</h1>
      </div>
      <div className="tab-content tab-content-carousel">
        <div>
          <Slider {...settings}>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </Slider>
        </div>
        <div className="more-articles">
          <Button
            variant="outlined"
            id="btn-more"
            endIcon={< ArrowForwardIcon className="arrow-icon"/>}
          >
              View More Articles 
          </Button>
        </div>
      </div>
    </div>
  );
}
