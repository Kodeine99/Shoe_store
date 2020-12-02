import React, { useEffect, useState, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import "../../assets/css/NavBar.css";
import { DataContext } from '../../contexts/DataProvider';

import { withStyles } from '@material-ui/core/styles';
import { fade, makeStyles } from "@material-ui/core/styles";
import {
  Container,
  IconButton,
  AppBar,
  Button,
  Toolbar,
  Typography,
  Badge,
  InputBase
} from "@material-ui/core";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from "@material-ui/icons/Search";

import CartDropdown from "./CartDropdown";
import Sidebar from '../Sidebar/Sidebar';
import MegaMenu from "./Megamenu";
// import MegaMenuSm from './MegaMenuSm';
// import MegamenuMin from "./MegaMenuMin";


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
    zIndex: "999",
    animationName: "fixedHeader",
    animationDuration: ".4s",
    backgroundColor: "#fff",
    boxShadow: "0 3px 6px rgba(51,51,51,0.05)",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      animationDuration: "0s",
    },
  },
  menuLogoNav: {
    display: "flex",
    alignItems: "center",
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
    [theme.breakpoints.down("sm")]: {
      display: "none"
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
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuIcon: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
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

  // state cua parent, dung de show sidebar
  const [show, setShow] = useState(false);

  // changShow(e) : nhan gia tri e duoc truyen lai tu component con, sau do setShow(e), e o day la false -> hide sidebar 
  const changeShow = (e) => {
    setShow(e)
  }
  
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
          <nav className={classes.menuLogoNav}>
            <IconButton
              className={classes.menuIcon}
              onClick={() => { setShow(!show) }}
              // onclick de set lai show tu false qua true, sau do truyen xuong children qua props
            >     
              <MenuIcon />
            </IconButton>
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
            <Sidebar show={show} onSidebar={changeShow} />
            {/* Sidebar la children, duoc truyen show{true} xuong  
                changeShow() : la mot ham de truyen xuong component con, sau do component con se thong qua no va truyen lai 1 gia tri toi component cha 
            */}
            {/* <BackDrop /> */}
          </nav>
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
              component={RouterLink}
              to="/About"
              position="relative"
            >
              About Us
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
