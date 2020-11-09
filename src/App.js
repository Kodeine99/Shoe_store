import React from 'react';
import './App.css';

import { MemoryRouter as Router } from 'react-router';
import { Switch, Route } from 'react-router-dom';

import About from './pages/About/AboutUs';
import Home from './pages/Home/Home';

import HeaderTop from './components/Header/headerTop';
import NavBar from './components/NavBar/NavBar';

import 'fontsource-inter';
// import Typography from '@material-ui/core/Typography';
// import ProductsContainer from './components/pages/Products/ProductsContainer';
import {Grid} from '@material-ui/core'
import ScrollArrow from './components/ScrollArrow/ScrollArrow';

function App() {
  return (
    <Router>
      <Grid container direction="column">
        <Grid item>
          <HeaderTop />
          <NavBar />
        </Grid>
        <ScrollArrow />
      </Grid>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" exact component={About} />
        {/* <Route path="/Products" exact component={ProductsContainer} /> */}
      </Switch> 
    </Router>
  )
}

export default App;
