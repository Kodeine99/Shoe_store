import React from 'react';

// Materai-UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography }
  from '@material-ui/core';

//css
import '../../assets/css/BlogCard.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "0 4px",
    borderBottom: "1px solid #ccc",
    borderRadius: "0",
  },
  media: {
      height: 140,
    },
  btn: {
    color: "#1CC0A0",
  },
  title: {
    fontSize: "20px",
  },
  date: {
    fontSize: "12px",
    fontWeight: "300",
    color: "#ccc",
  },
});

export default function BlogCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5" className={classes.date}>
            {props.createDate}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className="blog-content">
            {props.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" className={classes.btn}>
            Read More
        </Button>
        <Button size="small" className={classes.btn}>
            Share
        </Button>
      </CardActions>
      </Card>
  );
}
