import React, { useContext, useEffect, useState } from 'react';
import './Products.css';
import { DataContext } from '../../contexts/DataProvider';
import { Link as RouterLink } from 'react-router-dom';

// Material-UI component
import {
  Container,
  Typography,
  Breadcrumbs,
  Link,
  Grid,
  TextField,
  makeStyles,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';

// Components
import ProductCard2 from '../../components/Card/ProductCard2';
import Footer from '../../components/Footer/Footer';
import SidebarProduct from '../../components/Sidebar/SidebarProduct';
import PaginationComp from '../../components/Pagination/PaginationComp';

// Api
import productApi from '../../apis/productApi';

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
    marginLeft: 'auto',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
    color: '#000',
  },
  formControl: {
    margin: theme.spacing(1),
  },
  productSidebar_md: {
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
}));

const sortObtions = [{ title: 'Most popular' }, { title: 'Most rated' }, { title: 'Date' }];

function Products(props) {
  const classes = useStyles();

  const value = useContext(DataContext);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = value.cart;
  const addCart = value.addCart;

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 9,
    _totalRows: 12,
  });

  // params state
  const [filters, setFilters] = useState({
    _limit: 9,
    _page: 1,
  });

  // handle page change
  function handlePageChange(event, value) {
    console.log(value);
    setFilters({ ...filters, _page: value });
  }

  // handle on productCard2
  const handleOnProductCard2 = (productId) => {
    const data = products.filter((product) => {
      return product.id === productId;
    });
    setCart([...cart, ...data]);
  };

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = filters;
        console.log(params);
        const response = await productApi.getAll(params);
        console.log(response);
        setProducts(response.data);
        setPagination(response.pagination);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    };

    fetchProductList();
  }, [filters]);
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
              <RouterLink to="/" className="breadcumbs-icon" color="inherit">
                <Typography color="inherit">Home</Typography>
              </RouterLink>
              <RouterLink to="/products" color="inherit">
                <Typography color="inherit">Products</Typography>
              </RouterLink>
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
                      <span> 9 of {pagination._totalRows} </span>
                      Products
                    </div>
                  </div>
                  <div className="tool-box-right">
                    <div className="tool-box-sort">
                      <Autocomplete
                        id="sortby"
                        options={sortObtions}
                        getOptionLabel={(option) => option.title}
                        style={{ width: 240 }}
                        renderInput={(params) => (
                          <TextField {...params} label="Sort by" variant="outlined" />
                        )}
                        size="small"
                      />
                    </div>
                    <div className="tool-box-layout"></div>
                  </div>
                </div>
                <div className="products">
                  <Grid container spacing={2}>
                    {products.map((product) => (
                      <Grid key={product.id} item md={4} sm={4} xs={6}>
                        <ProductCard2
                          addCart={() => addCart(product.id)}
                          productId={product.id}
                          title={product.title}
                          src={`${process.env.PUBLIC_URL}${product.images[0]}`}
                          price={product.price}
                          oldPrice={product.oldPrice}
                          tag1={product.tags[0]}
                          tag2={product.tags[1]}
                          onProductCard2={handleOnProductCard2}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </div>
                <div className="pagination-container">
                  <PaginationComp pagination={pagination} onPageChange={handlePageChange} />
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
