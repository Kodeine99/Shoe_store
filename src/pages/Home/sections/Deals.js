import React from 'react';
import '../../../assets/css/Deals.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "20px 0 0 0",
    color: "black",
    borderRadius: "20px",
    backgroundColor: "white"
  },
}));

function Deals() {
  const classes = useStyles();
  return (
    <div className="deals-box box-bg-img">
      <div className="deals-box-content">
        <div className="deals-box-text">
          <h3 className="deals-title">New Deals! Start Daily at 12pm e.t.</h3>
          <p className="deals-desc">Get
            <em> FREE SHIPPING* & 5% rewards </em>
            on every order with Molla Theme rewards program
          </p>
        </div>
        <div className="deals-box-button">
          <Button 
            id="btn-deals"
            variant="contained"
            className={classes.button}
            endIcon={<ArrowRightAltIcon />}
          >
            Add to Cart for $50.00/yr 
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Deals;
