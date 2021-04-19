import React, { useContext } from 'react';
import { DataContext } from '../../../contexts/DataProvider';
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
    backgroundColor: '#f8f8f869',
    padding: '50px 0',
  },
  marAuto: {
    margin: 'auto',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function TopSelling() {
  const classes = useStyles();

  const valueProduct = useContext(DataContext);
  const [products] = valueProduct.products;
  const addCart = valueProduct.addCart;

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function FormRow() {
    return (
      <React.Fragment>
        {products
          .filter((product) => product.filter === 'topselling')
          .map((product, index) => (
            <Grid item lg={3} md={4} sm={6} style={{ width: '100%' }}>
              <ProductCard
                key={index}
                addCart={() => addCart(product.id)}
                productId={product.id}
                title={product.title}
                src={`${process.env.PUBLIC_URL}${product.images[0]}`}
                price={product.price}
                oldPrice={product.oldPrice}
                // cont1={product.categories[0]}
                // cont2={product.categories[1]}
              />
            </Grid>
          ))}
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
        <Grid container spacing={1} className={classes.marAuto}>
          <FormRow />
        </Grid>
      </Grid>
      <div className="more-product">
        <Button
          variant="outlined"
          id="btn-more"
          endIcon={<ArrowForwardIcon className="arrow-icon" />}
        >
          View More Products
        </Button>
      </div>
    </div>
  );
}
