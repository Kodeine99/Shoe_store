import React, { useEffect, useState } from 'react';
import './App.css';
import 'fontsource-inter';
import { DataProvider } from './contexts/DataProvider';
import { BlogProvider } from './contexts/BlogsProvider';

import { MemoryRouter as Router } from 'react-router';
import { Switch, Route } from 'react-router-dom';

import About from './pages/About/AboutUs';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Contact from './pages/ContactUs/ContactUs';
import Blog from './pages/Blog/Blog';
import ProductDetails from './pages/Products/ProductDetails/ProductDetails';
import Cart from './pages/Cart/Cart';
import HeaderTop from './components/Header/headerTop';
import NavBar from './components/NavBar/NavBar';
import ScrollArrow from './components/ScrollArrow/ScrollArrow';

import { Grid } from '@material-ui/core';
import productApi from './apis/productApi';

function App() {
  // const [productList, setProductList] = useState([]);

  // useEffect(() => {
  //   const fetchProductList = async () => {
  //     try {
  //       const params = {
  //         _page: 1,
  //         _limit: 2,
  //       };
  //       const response = await productApi.getAll(params);
  //       console.log(response);
  //       setProductList(response.data);
  //     } catch (error) {
  //       console.log('Failed to fetch product list: ', error);
  //     }
  //   };

  //   fetchProductList();
  // }, []);

  return (
    <DataProvider>
      <Router>
        <div className="page-wrapper">
          <Grid container direction="column">
            <Grid item>
              <HeaderTop />
              <NavBar />
              {/* <LoginModal open={ open}/> */}
            </Grid>
            <ScrollArrow />
          </Grid>
          <BlogProvider>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/About" exact component={About} />
              <Route path="/Products" exact component={Products} />
              <Route path="/Products/:id" exact component={ProductDetails} />
              <Route path="/Cart" exact component={Cart} />
              <Route path="/Contact" exact component={Contact} />
              <Route path="/Blog" exact component={Blog} />
            </Switch>
          </BlogProvider>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
