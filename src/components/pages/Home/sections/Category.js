import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../../../../assets/css/Category.css';

import banner5 from '../../../../assets/img/banners/bannerWomens.jpg';
import banner6 from '../../../../assets/img/banners/bannerMens.jpg';
import banner7 from '../../../../assets/img/banners/bannerKids.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Category() {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{paddingTop: "50px", paddingBottom: "50px"}}>
      <Grid container spacing={3}>
        <Grid item xs>
          <div className="banner banner-cat">
            <a href="#cat"><img src={banner5} alt="Banner" ></img></a>
            <div className="banner-content banner-content-overlay text-center">
              <h3 className="banner-title">Women's</h3>
              <h4 className="banner-subtitle">100 products</h4>
              <a href="#banner-link" className="banner-link">Shop now</a>
            </div>
          </div>
        </Grid>
        <Grid item xs>
          <div className="banner banner-cat">
            <a href="#cat"><img src={banner6} alt="Banner" ></img></a>
            <div className="banner-content banner-content-overlay text-center">
              <h3 className="banner-title">Men's</h3>
              <h4 className="banner-subtitle">99 products</h4>
              <a href="#banner-link" className="banner-link">Shop now</a>
            </div>
          </div>
        </Grid>
        <Grid item xs>
          <div className="banner banner-cat">
            <a href="#cat"><img src={banner7} alt="Banner" ></img></a>
            <div className="banner-content banner-content-overlay text-center">
              <h3 className="banner-title">Kid's</h3>
              <h4 className="banner-subtitle">10 products</h4>
              <a href="#banner-link" className="banner-link">Shop now</a>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Category;
