import React, {useEffect, useState} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import "../../assets/css/NavBar.css";
import MegaMenu from './Megamenu';
// import MegaMenuSm from './MegaMenuSm';
import MegamenuMin from './MegaMenuMin';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Container, IconButton } from '@material-ui/core';

// import Link from '@material-ui/core/Link';
import { fade, makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ClearIcon from '@material-ui/icons/Clear';
// import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import product1 from '../../assets/img/products/nike/nikeproduct-1-1.jpg';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
      // borderBottom: `1px solid ${theme.palette.divider}`,
    marginBottom: '20px',

    
  },
  fixed: {
    position: 'fixed',
    left: '0',
    right: '0',
    top: "0",
    zIndex: '1040',
    animationName: 'fixedHeader',
    animationDuration: '.4s',
    backgroundColor: '#fff',
    boxShadow: '0 3px 6px rgba(51,51,51,0.05)',
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.primary.light, 0.2),
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.light, 0.35),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    position: 'relative',
  },
  nav: {
    // marginRight: '100px'
  },
  endIcon: {
    marginLeft: '0px !important'
  },
}));

function NavBar() {
  const classes = useStyles();

  const [appBarClass, setBarClass] = useState(`${classes.appBar}`);
  // console.log(appBarClass);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      // console.log(appBarClass);
      if (window.scrollY > 100) {
        setBarClass(`${classes.appBar} ${classes.fixed}`);
      } else if (window.scrollY === 0) {
        setBarClass(`${classes.appBar}`)
      }
    });
  });
  return (
    <Container>
      <AppBar id="appbar" position="static" color="inherit" elevation={0} className={appBarClass}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          KdShop
          </Typography>
        <div className={classes.grow} />
        <nav className={classes.nav}>
          <Button variant="link" color="default" className={classes.link}
                  component={RouterLink} to="/">
              Home
          </Button>
          <Button id="btn-hv" variant="link" color="default" className={classes.link}
              component={RouterLink} to="/Products"
              endIcon={< KeyboardArrowDownIcon />}
              position="relative">
              Products
            <MegaMenu />
          </Button>
          {/* <CustomDropdown /> */}
          {/* <Button id="btn-hv" variant="link" color="default" className={classes.link}   endIcon={<KeyboardArrowDownIcon className={classes.endIcon} position="relative"/>}
                component={RouterLink} to="/Products">
                Products
            <MegaMenuSm />
          </Button> */}
          <Button id="btn-hv" variant="link" color="default" className={classes.link}
              endIcon={< KeyboardArrowDownIcon />}
              component={RouterLink} to="/Blogs"
              position="relative">
              Blog
            <MegamenuMin />
          </Button>
        </nav>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <div className="cart-dropdown">
          <IconButton className="cart-icon dropdown-toggle">
            <ShoppingCartIcon />
            <span className="cart-count">0</span> 
          </IconButton>
          <div className="cart-dropdown-menu text-center dropdown-right">
              {/* <p>No products in the cart</p> */}
              <div className="cart-dropdown-products">
                <div className="cart-product">
                  <div className="cart-product-details">
                    <h4 className="cart-product-title"><a href="#p">Nike Jordan Zoom' 92</a></h4>
                    <span className="cart-product-info">
                      <span className="cart-product-qty">1</span>
                      x $99.00
                    </span>
                  </div>
                  <figure className="cart-product-img-container">
                    <a className="cart-product-img" href="#i">
                      <img src={product1} alt="Product 1"></img>
                    </a>
                  </figure>
                  <IconButton className="btn-remove" title="Remove Product">
                    <ClearIcon />
                  </IconButton>
                </div>
              </div>
              <div className="cart-dropdown-total">
                <span>Total </span>
                <span className="cart-total-price"> $99.00</span>
              </div>
              <div className="cart-dropdown-action">
                <Button variant="outlined" color="primary">View Cart</Button>
                <Button variant="outlined" color="default" endIcon={<ArrowRightAltIcon />}>
                  Check Out
                </Button>
              </div>
          </div> 
        </div>
        {/* <Button href="#" color="primary" variant="outlined" className={classes.link}>
          Login
        </Button> */}
      </Toolbar>
      </AppBar>
    </Container>
  );
}

export default NavBar;
