import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import '../../assets/css/headerTop.css'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import LoginModal from '../Modal/LoginModal';

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
      // marginBottom: '20px'
  },
  toolbar: {
    flexWrap: 'wrap',
    borderBottom: `1px solid ${theme.palette.divider}`,
    minHeight: "40px"
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  smallLink: {
    // margin: theme.spacing(.5, 1),
    fontSize: "14px !important",
    padding: "0px 4px",
    margin: "0px 6px",
    color: '#99a0a8',
    fontWeight: '300'
  },
  nav: {
    marginRight: '100px'
  }
}));

function NavBar() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <AppBar position="static" color="inherit" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            <Button href="#" color="primary" className={classes.smallLink} endIcon={<ArrowDropDownOutlinedIcon />}>
              Vie
            </Button>
          </Typography>
          <nav>
          <Button color="default" className={classes.smallLink}>
            Call +84 123456789
          </Button>
          <Button color="default" className={classes.smallLink} component={RouterLink} to="/About">
            About Us
          </Button>
          <Button color="default" className={classes.smallLink}>
            Contact Us
          </Button>
          </nav>
          <Button
            href="#"
            color="primary"
            className={classes.smallLink}
            startIcon={<AccountCircleIcon />}
            onClick= {() => handleOpen()}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <LoginModal open={ open } handleClose={ handleClose }/>
    </Container>
  );
}

export default NavBar;
