import React from 'react';
import '../../../assets/css/TopSelling.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import ProductCard from '../../../components/Card/ProductCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#f8f8f869",
    padding: "50px 0"
  },
  marAuto: {
    margin: "auto",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function TopSelling() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={3}>
          <ProductCard />
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <div className="heading">
      <h1 className="heading-title">Top Selling Products</h1>
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
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={1} className={classes.marAuto}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={1} className={classes.marAuto}>
          <FormRow />
        </Grid>
      </Grid>
      <div className="more-product">
        <Button
          variant="outlined"
          id="btn-more"
          endIcon={< ArrowForwardIcon className="arrow-icon"/>}
        >
          View More Products 
        </Button>
      </div>
    </div>
  );
}
