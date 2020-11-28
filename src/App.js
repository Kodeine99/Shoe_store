import React from 'react';
import './App.css';
import 'fontsource-inter';
import { DataProvider } from './contexts/DataProvider';

import { MemoryRouter as Router } from 'react-router';
import { Switch, Route } from 'react-router-dom';

import About from './pages/About/AboutUs';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import ProductDetails from './pages/Products/ProductDetails/ProductDetails';
import Cart from './pages/Cart/Cart';
import HeaderTop from './components/Header/headerTop';
import NavBar from './components/NavBar/NavBar';
import ScrollArrow from './components/ScrollArrow/ScrollArrow';

import { Grid } from '@material-ui/core';


function App() {
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
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/About" exact component={About} />
            <Route path="/Products" exact component={Products} />
            <Route path="/Products/:id" exact component={ProductDetails} />
            <Route path="/Cart" exact component={Cart} />
          </Switch> 
        </div>
      </Router>
    </DataProvider>
  )
}

export default App;
