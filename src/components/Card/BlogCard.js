import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import post_1 from '../../assets/img/posts/post-1.jpg';
// import post_2 from '../../assets/img/posts/post-2.jpg';
// import post_3 from '../../assets/img/posts/post-3.jpg';
// import post_4 from '../../assets/img/posts/post-4.jpg';

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
        color: "#ccc"
    }
});

export default function MediaCard(post) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={post_1}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5" className={classes.date}>
            November 03,2020 - 3 Comment
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            Sed adipiscing ornare.
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
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
