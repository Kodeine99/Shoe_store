import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import '../../../assets/css/Subscribe.css';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 600,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  btn: {
    fontSize: ".8rem"
  }
}));

function Subscribe() {
  const classes = useStyles();
  return (
    <div className="subscribe-box box-bg-img ">
      <Container >
        <div className="row justify-content-center">
          <div className="subscribe-box-content">
            <div className="subscribe-heading text-center">
              <h3 className="subscribe-title textBlack">Subscribe for Our Newsletter</h3>
              <p className="subscribe-desc textBlack">
                and receive 
                <span className="font-weight-bold"> $20 coupon </span>
                for first shopping
              </p>
            </div>
            <form className="subscribe-form" action="#">
              <div className="subscribe-input">
                <Paper component="form" className={classes.root}>
                  <InputBase
                    type="email"
                    className={classes.input}
                    placeholder="Enter your email address"
                    inputProps={{ 'aria-label': 'Enter your email address' }}
                  />
                  <Divider className={classes.divider} orientation="vertical" />
                  <Button variant="contained" color="secondary" className={classes.btn}>
                    Subscribe
                  </Button>
                </Paper>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Subscribe;
