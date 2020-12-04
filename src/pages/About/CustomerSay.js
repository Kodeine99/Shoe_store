import React from "react";
import Slider from "react-slick";

import { Typography } from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import user1 from '../../assets/img/aboutus/user-1.jpg';

// css
import "./CustomerSay.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
const useStyles = makeStyles((theme) => ({
  textContent: {
    padding: "0",
  },
}));

export default function CustomArrows() {
  const classes = useStyles();
  const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            dots: true
          }
        },
      ]
    };
    
    return (
      <div className="about-testimonials">
        <Typography
          style={{ fontWeight:'bold'}}
          variant="h4"
          align="center"
          gutterBottom={true}
        >
          What Customer say about us
        </Typography>
        <Slider {...settings}>
          <blockquote className="testimonial text-center">
            <img src={user1} alt="user1" />
            <Typography className={classes.textContent} variant="body2" align="center">
              “ Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque aliquet nibh nec urna.
              <br />
              In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. ”
            </Typography>
            <cite>
              Jadon Sancho
              <span>Customer</span> 
            </cite>
          </blockquote>
          <blockquote className="testimonial text-center">
            <img src={user1} alt="user1" />
            <Typography className={classes.textContent} variant="body2" align="center">
              “ Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque aliquet nibh nec urna.
              <br />
              In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. ”
            </Typography>
            <cite>
              Jadon Sancho
              <span>Customer</span> 
            </cite>
          </blockquote>
          <blockquote className="testimonial text-center">
            <img src={user1} alt="user1" />
            <Typography className={classes.textContent} variant="body2" align="center">
              “ Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque aliquet nibh nec urna.
              <br />
              In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. ”
            </Typography>
            <cite>
              Jadon Sancho
              <span>Customer</span> 
            </cite>
          </blockquote>
        </Slider>
      </div>
    );
}
