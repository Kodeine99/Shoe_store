import React from 'react';

import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
// import ShareIcon from '@material-ui/icons/Share';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CardMedia from '@material-ui/core/CardMedia';




const useStyles = makeStyles({
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cartHeader: {
    zIndex: '1'
  }
});


function ProductCards(props) {
  const classes = useStyles();
  const {avatarUrl, title, subtitle, description, imgUrl} = props;
  return (
    <Card >
      <CardHeader className={classes.cartHeader}
        avatar={
          <Avatar src={avatarUrl} aria-label="recipe" className={classes.avatar} />
        }
        action={
          <IconButton aria-label="settings" >
            <AddShoppingCartIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia  className={classes.media} style={{height: "150px"}} img={imgUrl} />
      <CardContent>
        <Typography variant="body2" component="p">
           {description}
        </Typography>
      </CardContent>
      <CardActions>
          <Button variant="outlined" color="secondary" size="small">Buy Now</Button>
      </CardActions>
    </Card>
  );
}
export default ProductCards;
