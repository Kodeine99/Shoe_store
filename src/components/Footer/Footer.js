import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import YouTubeIcon from '@material-ui/icons/YouTube';

import paymentImage from '../../assets/img/payments.png';
import '../../assets/scss/footer.scss';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  logo: {
    margin: "1.6rem 0 1.2rem"
  }
}));


function Footer() {
  const classes = useStyles();

  return (
    <footer className="footer footer-dark">
      <div className="footer-middle">
        <Container >
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <div className="widget widget-about">
                <Typography
                  color="secondary"
                  className={classes.logo}
                  variant="h4"
                  gutterBottom>
                  KDShop
                </Typography>
                <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. </p>
                <div className="social-icons">
                  <IconButton href="#" color="secondary">
                    <FacebookIcon />
                  </IconButton>
                  <IconButton href="#" color="secondary">
                    <TwitterIcon />
                  </IconButton>
                  <IconButton href="#" color="secondary">
                    <InstagramIcon />
                  </IconButton>
                  <IconButton href="#" color="secondary">
                    <PinterestIcon />
                  </IconButton>
                  <IconButton href="#" color="secondary">
                    <YouTubeIcon />
                  </IconButton>
                </div>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="widget">
                <h4 className="widget-title">Useful Links</h4>
                <ul className="widget-list">
                  <li><a href="/#">About KdShop</a></li>
                  <li><a href="/#">How to shop on KdShop</a></li>
                  <li><a href="/#">FAQ</a></li>
                  <li><a href="/#">Contact Us</a></li>
                  <li><a href="/#">Login</a></li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="widget">
                <h4 className="widget-title">Customer Service</h4>
                <ul className="widget-list">
                  <li><a href="/#">Payment Methods</a></li>
                  <li><a href="/#">Money-back guarantee!</a></li>
                  <li><a href="/#">Returns</a></li>
                  <li><a href="/#">Terms and conditions</a></li>
                  <li><a href="/#">Privacy Policy</a></li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="widget">
                <h4 className="widget-title">My account</h4>
                <ul className="widget-list">
                  <li><a href="/#">Sign In</a></li>
                  <li><a href="/#">View Cart</a></li>
                  <li><a href="/#">My Wishlist</a></li>
                  <li><a href="/#">Track My Order</a></li>
                  <li><a href="/#">Help</a></li>
                </ul>
              </div>
            </Grid>                 
          </Grid>
        </Container>
      </div>
      <div className="footer-bottom">
        <Container >
          <div className="container">
            <p className="footer-copyright">Copyright © 2020 Kodeine Shoes Store. All rights reserved</p>
            <figure className="footer-payment">
              <img src={paymentImage} alt="payments" />
            </figure>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
