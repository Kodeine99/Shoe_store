import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import '../../../../assets/scss/bannerGroup.scss';
import banner1 from '../../../../assets/img/banners/banner-1.jpg';
import banner2 from '../../../../assets/img/banners/Adidas/banner05.jpg';
import banner3 from '../../../../assets/img/banners/Converse/Converse-02.jpg';
import banner4 from '../../../../assets/img/banners/Nike/banner-02.jpg';
// import banner5 from '../../../../assets/img/banners/banner-5.jpg';
// import banner6 from '../../../../assets/img/banners/banner-6.jpg';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(12, 1fr)',
//     gridGap: theme.spacing(3),
//   },
// }));
const useStyles = makeStyles((theme) => ({
  button: {
    minWidth: "100px !important",
    margin: "12px 0 0 0",
    color: "white",
    borderRadius: "20px",
    border: "1px solid white",
    backgroundColor: "transparent"
  },
  buttonBlack: {
    minWidth: "100px !important",
    margin: "12px 0 0 0",
    color: "black",
    borderRadius: "20px",
    border: "1px solid black",
    backgroundColor: "transparent"
  },
}));
export default function CSSGrid() {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className="bannerContainer">
      <Grid item xs={8} style={{ display: "flex", flexWrap: "wrap" }}>
        <Grid item xs={6} className="banner-item banner1">
          <a href="#2" className=""><img src={banner1} alt="" /></a>
          <div className="banner-content banner-content-right">
            <h4 className="banner-subtitle White">New Arrivals</h4>
            <h3 className="banner-title textWhite">
                <span>Sneakers & <br></br> Athletic Shoes </span>
            </h3>
            <div className="banner-text">
              <a href="#2.2" ><span></span></a>
            </div>
            <Button 
              id="btn"
              variant="container"
              className={classes.button}
            >
              Discover Now  
            </Button>            
          </div>
        </Grid>
        <Grid item xs={6} className="banner-item banner2">
          <a href="#3" className=""><img src={banner2} alt="" /></a>
          <div className="banner-content banner-content-left">
            <h4 className="banner-subtitle textWhite">Clearance</h4>
            <h3 className="banner-title textWhite">
                <span>Ultra Boots</span>
            </h3>
            <div className="banner-text textWhite">
              <a href="#2.2" ><span>Up to 70% off</span></a>
            </div>
            <Button 
              id="btn"
              variant="container"
              className={classes.button}
            >
              Shop Now  
            </Button>            
          </div>
        </Grid>
        <Grid item xs={12} className="banner-item">
          <a href="#5" className=""><img src={banner3} alt="" /></a>
          <div className="banner-content">
            <h4 className="banner-subtitle White">On Sale</h4>
            <h3 className="banner-title textWhite">
                <span>Slip-On Loafers</span>
            </h3>
            <div className="banner-text textWhite">
              <a href="#2.2"><span>Up to 30% off</span></a>
            </div>
            <Button 
              id="btn"
              variant="container"
              className={classes.button}
            >
              Shop Now  
            </Button>            
          </div>
        </Grid>
      </Grid>
      <Grid item xs={4} className="banner-item">
        <a href="#4" className=""><img src={banner4} alt="" style={{ paddingBottom: "20px" }} /></a>
        <div className="banner-content banner-content-bottom">
            <h4 className="banner-subtitle White">On Sale</h4>
            <h3 className="banner-title textWhite">
                <span>Amazing <br></br> Lace Up Boots </span>
            </h3>
            <div className="banner-text textWhite">
              <a href="#2.2"><span>From $39.99</span></a>
            </div>
            <Button 
              id="btn"
              variant="container"
              className={classes.button}
            >
              Discover Now  
            </Button>            
          </div>
      </Grid>
    </Grid>
  );
}
