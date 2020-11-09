import React from 'react';
import '../../../assets/css/Boxes.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
function Boxes() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Grid container spacing={3} item xs={12} style={{margin: '0'}}>
          <Grid item xs={3} style={{position: 'relative'}}>
            <div className="icon-box icon-box-side">
              <span className="icon-box-icon">
              <LocalShippingOutlinedIcon style={{fontSize: '3rem'}} />
              </span>
              <div className="icon-box-content">
                <h3 className="icon-box-title">Free shipping</h3>
                <p>Order $50 or more</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={3} style={{position: 'relative'}} className="seperator">
            <div className="icon-box icon-box-side">
              <span className="icon-box-icon">
                <RotateLeftIcon style={{fontSize: '3rem'}} />
              </span>
              <div className="icon-box-content">
                  <h3 className="icon-box-title">Free Returns</h3>
                  <p>Within 30 days</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={3} style={{position: 'relative'}} className="seperator">
            <div className="icon-box icon-box-side">
              <span className="icon-box-icon">
                <InfoOutlinedIcon style={{fontSize: '3rem'}} />
              </span>
              <div className="icon-box-content">
                <h3 className="icon-box-title">Get 20% of 1 item</h3>
                <p>When you sign up</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={3} style={{position: 'relative'}} className="seperator">
            <div className="icon-box icon-box-side">
              <span className="icon-box-icon">
                <ContactSupportOutlinedIcon style={{fontSize: '3rem'}} />
              </span>
              <div className="icon-box-content">
                <h3 className="icon-box-title">We support</h3>
                <p>24/7 Amazing services</p>
              </div>
            </div>
          </Grid>
        </Grid>
    </div>
  );
}

export default Boxes;
