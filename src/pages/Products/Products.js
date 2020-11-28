import React, { useContext } from 'react';
import './Products.css';
import { DataContext } from '../../contexts/DataProvider';

import {
  Container,
  Typography,
  Breadcrumbs,
  Link,
  Grid,
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Autocomplete from '@material-ui/lab/Autocomplete';
import Pagination from '@material-ui/lab/Pagination';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import ProductCard2 from "../../components/Card/ProductCard2";
import Footer from "../../components/Footer/Footer";
import SidebarProduct from '../../components/Sidebar/SidebarProduct';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(2),
  },
  link: {
    color: '#1cc0a0',
    fontWeight: '400',
    fontSize: '.8rem',
    marginLeft: 'auto'
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
    color: '#000'
  },
  formControl: {
    margin: theme.spacing(1),
  },
  productSidebar_md: {
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  }
}));

const sortObtions = [
  { title: 'Most popular' },
  { title: 'Most rated' },
  { title: 'Date' },
];

function Products() {
  const classes = useStyles();
  
  const value = useContext(DataContext);
  const [products] = value.products;
  // console.log(products)
  const addCart = value.addCart;

  return (
    <div className="products-page">
        <div className="main">
        <div className="page-header text-center">
          <Container>
            <h1 className="page-title">
              Products
              <span>Shop</span>
            </h1>
          </Container>
        </div>
        <div className="breadcrumb-nav">
          <Container className="breadcrumb-container">
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
              <Link to="/" className="breadcumbs-icon" color="inherit">
                <Typography color="inherit">Home</Typography>
              </Link>
              <Link to="/products" color="inherit">
                <Typography color="inherit">Products</Typography>
              </Link>
              <Typography color="textPrimary">Product</Typography>
            </Breadcrumbs>
          </Container>
        </div>
        <div className="page-content">
          <Container>
            <Grid container spacing={2} justify="flex-start" direction="row">
              <Grid item lg={4} md={4} sm={12} xs={12} className={classes.productSidebar_md}>
                <SidebarProduct />
              </Grid>
              <Grid item lg={8} md={8} sm={12} xs={12}>
                <div className="tool-box">
                  <div className="tool-box-left">
                    <div className="tool-box-info">
                      Showing
                      <span> 9 of 15 </span>
                      Products
                    </div>
                  </div>
                  <div className="tool-box-right">
                    <div className="tool-box-sort">
                      <Autocomplete
                        id="sortby"
                        options={sortObtions}
                        getOptionLabel={(option) => option.title}
                        style={{ width: 240,}}
                        renderInput={(params) => <TextField {...params} label="Sort by" variant="outlined" />}
                        size="small"
                      />
                    </div>
                    <div className="tool-box-layout">

                    </div>
                  </div>
                </div>
                <div className="products">
                  <Grid container spacing={2}>
                    {
                      products.map(product => (
                        <Grid key={product._id} item md={4} sm={4} xs={6}>
                          <ProductCard2
                            addCart={() =>addCart(product._id)}
                            productId={product._id}
                            title={product.title}
                            src={ `${process.env.PUBLIC_URL}${product.images[0]}`}
                            price={product.price}
                            oldPrice={product.oldPrice}
                            cont1={product.categories[0]}
                            cont2={product.categories[1]}
                          />
                        </Grid>
                      ))
                    }
                  </Grid>
                </div>
                <div className="pagination-container">
                  <Pagination style={{display: 'flex', justifyContent: 'center'}} count={3} color="primary" />
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
      <Footer />
    </div> 
  );
}

export default Products;
