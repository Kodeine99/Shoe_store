import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: "20px 0 0 0",
    color: "black",
    borderRadius: "20px",
    backgroundColor: "white"
  },
}));
export default function ImgComp({ src, subtitle, title, price }) {
    const classes = useStyles();
    let imgStyles = {
      width: 100 + "%",
      height: "auto",
      alignItems: "center"
    };
    return (
      <div>
        <img src={src} alt="slide-img" style={imgStyles} />
        <div className="intro-content">
        <h3 className="intro-subtitle">{subtitle}</h3>
        <h1 className="intro-title">{title}</h1>
        <div className="intro-price">{price}</div>
        <Button 
          id="btn"
          variant="contained"
          className={classes.button}
          endIcon={<ArrowRightAltIcon />}
        >
          Shop Now  
        </Button>
      </div>
      </div>
    )
}
