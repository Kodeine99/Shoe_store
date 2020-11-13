import React, {useContext} from 'react';
import { DataContext } from '../../contexts/DataProvider';

import { Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Slider from '@material-ui/core/Slider';

import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

import Autocomplete from '@material-ui/lab/Autocomplete';
import Pagination from '@material-ui/lab/Pagination';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Products.css';
import ProductCard2 from "../../components/Card/ProductCard2";
import Footer from "../../components/Footer/Footer";

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(2),
  },
  link: {
    color: '#1cc0a0',
    fontWeight: '400',
    fontSize: '.8rem',
    marginLeft: 'auto'
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
    color: '#000'
  },
  formControl: {
    margin: theme.spacing(1),
  },
}));
const Accordion = withStyles({
  root: {
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    display: 'block'
  },
}))(MuiAccordionDetails);

const sortObtions = [
  { title: 'Most popular' },
  { title: 'Most rated' },
  { title: 'Date' },
];

// Price set
const prices = [
  {
    value: 0,
    label: '$0',
  },
  {
    value: 10,
    label: '$100',
  },
  {
    value: 50,
    label: '$500',
  },
  {
    value: 100,
    label: '$1000'
  }
];
function valuetext(value) {
  return `$${value}`;
};


function Products() {
  const classes = useStyles();
  const [products, setProducts] = useContext(DataContext);
  // console.log(products)

  return (
    <div className="products-page">
        <div className="main">
        <div className="page-header text-center">
          <Container>
            <h1 className="page-title">
              Products
              <span>Shop</span>
            </h1>
          </Container>
        </div>
        <div className="breadcrumb-nav">
          <Container className="breadcrumb-container">
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
              <Link className="breadcumbs-icon" color="inherit" href="/" onClick={handleClick}>
                <Typography color="inherit">Home</Typography>
              </Link>
              <Link color="inherit" href="/getting-started" onClick={handleClick}>
                <Typography color="inherit">Products</Typography>
              </Link>
              <Typography color="textPrimary">Product</Typography>
            </Breadcrumbs>
          </Container>
        </div>
        <div className="page-content">
          <Container>
            <Grid container spacing={2} justify="flex-start" direction="row">
              <Grid item xs={4}>
                <aside className="sidebar-shop">
                  <div className="widget widget-clean">
                    <label>Filters:</label>
                    <Button variant="link" color="primary" className={classes.link}>
                        Clear All
                    </Button>
                  </div>

                  {/* Widget Collapse */}
                  <div className="widget widget-collapsible">
                    {/* Brand Filter */}
                    <Accordion defaultExpanded={true}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="brandpanel-content"
                        id="brandpanel-header"
                      >
                        <Typography className={classes.heading}>Brand</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <FormControl component="brand-set" className={classes.formControl}>
                          <FormGroup>
                            <FormControlLabel
                              control={<Checkbox name="nike" />}
                              label="Nike"
                            />
                            <FormControlLabel
                              control={<Checkbox name="adidas" />}
                              label="Adidas"
                            />
                            <FormControlLabel
                              control={<Checkbox name="converse" />}
                              label="Converse"
                            />
                            <FormControlLabel
                              control={<Checkbox name="puma" />}
                              label="Puma"
                            />
                          </FormGroup>
                        </FormControl>
                      </AccordionDetails>
                    </Accordion>

                    {/* Size Filter */}
                    <Accordion defaultExpanded={true}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="sizepanel-content"
                        id="sizepanel-header"
                      >
                        <Typography  className={classes.heading}>Size</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <FormControl component="size-set" className={classes.formControl}>
                          <FormGroup>
                            <FormControlLabel
                              control={<Checkbox name="xs" />}
                              label="XS"
                            />
                            <FormControlLabel
                              control={<Checkbox name="s" />}
                              label="S"
                            />
                            <FormControlLabel
                              control={<Checkbox name="m" />}
                              label="M"
                            />
                            <FormControlLabel
                              control={<Checkbox name="l" />}
                              label="L"
                            />
                            <FormControlLabel
                              control={<Checkbox name="xl" />}
                              label="XL"
                            />
                            <FormControlLabel
                              control={<Checkbox name="xxl" />}
                              label="XXL"
                            />
                          </FormGroup>
                        </FormControl>
                      </AccordionDetails>
                    </Accordion>

                    {/* Price Filter */}
                    <Accordion defaultExpanded={true}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="pricepanel-content"
                        id="pricepanel-header"
                      >
                        <Typography className={classes.heading}>Price</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography id="price-set" gutterBottom>
                          Price Range: $0 - $1000
                        </Typography>
                        <Slider
                          defaultValue={50}
                          getAriaValueText={valuetext}
                          aria-labelledby="price-set"
                          step={5}
                          // valueLabelDisplay={valuetext}
                          marks={prices}
                        />
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </aside>
              </Grid>
              <Grid item xs={8}>
                <div className="tool-box">
                  <div className="tool-box-left">
                    <div className="tool-box-info">
                      Showing
                      <span> 9 of 15 </span>
                      Products
                    </div>
                  </div>
                  <div className="tool-box-right">
                    <div className="tool-box-sort">
                      <Autocomplete
                        id="sortby"
                        options={sortObtions}
                        getOptionLabel={(option) => option.title}
                        style={{ width: 240,}}
                        renderInput={(params) => <TextField {...params} label="Sort by" variant="outlined" />}
                        size="small"
                      />
                    </div>
                    <div className="tool-box-layout">

                    </div>
                  </div>
                </div>
                <div className="products">
                  <Grid container spacing={2}>
                    {
                      products.map(product => (
                        <Grid key={product._id} item xs={4}>
                          <ProductCard2
                            productId={product._id}
                            title={product.title}
                            src={ `${process.env.PUBLIC_URL}${product.images[0]}`}
                            price={product.price}
                            oldPrice={product.oldPrice}
                            cont1={product.contents[0]}
                            cont2={product.contents[1]}
                          />
                        </Grid>
                      ))
                    }
                  </Grid>
                </div>
                <div className="pagination-container">
                  <Pagination style={{display: 'flex', justifyContent: 'center'}} count={3} color="primary" />
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
      <Footer />
    </div> 
  );
}

export default Products;
