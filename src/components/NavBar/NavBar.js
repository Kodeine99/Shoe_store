import React, { useEffect, useState, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import "../../assets/css/NavBar.css";
import MegaMenu from "./Megamenu";
// import MegaMenuSm from './MegaMenuSm';
import MegamenuMin from "./MegaMenuMin";
import { DataContext } from '../../contexts/DataProvider';

import { withStyles } from '@material-ui/core/styles';
import { fade, makeStyles } from "@material-ui/core/styles";
import { Container, IconButton } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Badge from '@material-ui/core/Badge';

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

import CartDropdown from "./CartDropdown";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    marginBottom: "20px",
  },
  fixed: {
    position: "fixed",
    left: "0",
    right: "0",
    top: "0",
    zIndex: "1040",
    animationName: "fixedHeader",
    animationDuration: ".4s",
    backgroundColor: "#fff",
    boxShadow: "0 3px 6px rgba(51,51,51,0.05)",
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.primary.light, 0.2),
    "&:hover": {
      backgroundColor: fade(theme.palette.primary.light, 0.35),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  toolbar: {
    flexWrap: "wrap",
    justifyContent:"space-between",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    position: "relative",
  },
  nav: {
    // marginRight: '100px'
  },
  endIcon: {
    marginLeft: "0px !important",
  },
}));

function NavBar() {
  const classes = useStyles();
  const value = useContext(DataContext);
  const [cart] = value.cart;

  const [appBarClass, setBarClass] = useState(`${classes.appBar}`);
  // console.log(appBarClass);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // console.log(appBarClass);
      if (window.scrollY > 100) {
        setBarClass(`${classes.appBar} ${classes.fixed}`);
      } else if (window.scrollY === 0) {
        setBarClass(`${classes.appBar}`);
      }
    });
  });
  return (
    <Container>
      <AppBar
        id="appbar"
        position="static"
        color="inherit"
        elevation={0}
        className={appBarClass}
      >
        <Toolbar className={classes.toolbar}>
          <RouterLink to={`/`}>
            <Typography
              variant="h6"
              color="secondary"
              noWrap
              className={classes.toolbarTitle}
            >
                KdShop
            </Typography>
          </RouterLink>
          <div className={classes.grow} />
          <nav className={classes.nav}>
            <Button
              color="default"
              className={classes.link}
              component={RouterLink}
              to="/"
            >
              Home
            </Button>
            <Button
              id="btn-hv"
              color="default"
              className={classes.link}
              component={RouterLink}
              to="/Products"
              endIcon={<KeyboardArrowDownIcon />}
              position="relative"
            >
              Products
              <MegaMenu />
            </Button>
            <Button
              id="btn-hv"
              color="default"
              className={classes.link}
              endIcon={<KeyboardArrowDownIcon />}
              component={RouterLink}
              to="/Blogs"
              position="relative"
            >
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
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className="cart-dropdown">
            <RouterLink to={`/Cart`}>
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={cart.length} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
                </IconButton>
            </RouterLink>
            <CartDropdown />
          </div>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default NavBar;
