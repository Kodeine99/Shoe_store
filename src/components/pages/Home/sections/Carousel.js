import React, {useState} from 'react';
import "../../../../assets/scss/carousel.scss";
import IconButton from '@material-ui/core/IconButton';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import i1 from "../../../../assets/img/slides/slide-1.jpg";
import i2 from "../../../../assets/img/slides/slide-2.jpg";
import i3 from "../../../../assets/img/slides/slide-3.jpg";
import SliderIntro from './SliderIntro';


export default function Carousel() {
  let carouselArr = [
    <SliderIntro src={i1} title="Sneakers & Athletic Shoes" subtitle="Deals and Promotions" price="from $9.99" />,
    <SliderIntro src={i2} title="This Week's Most Wanted" subtitle="Trending Now" price="from $49.99" />,
    <SliderIntro src={i3} title="Can't-miss Clearance:" subtitle="Deals and Promotions" price="starting at 60% off" />
  ];
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (carouselArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (carouselArr.length - 1) ? setX(0) : setX(x - 100);
  };
  return (
    <div className="carousel">
      {
        carouselArr.map((item, index) => {
          return (
            <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
              {item}
            {/* <SliderIntro subtitle="Deals and Promotions" title="Can't-miss Clearance:" /> */}
            </div>
          )
        })
      }
      <IconButton aria-label="delete" id="goLeft" onClick={goLeft}>
        <ArrowBackIosIcon/>
      </IconButton>
      <IconButton aria-label="delete" id="goRight" onClick={goRight}>
        <ArrowForwardIosIcon />
      </IconButton>
    </div>
  )
}
