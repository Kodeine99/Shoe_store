import React, { useEffect, useState } from 'react';

import {
  Button,
  Typography,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Slider,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { MdSettings } from 'react-icons/md';
import categoryApi from '../../apis/categoryApi';

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
    marginLeft: 'auto',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
    color: '#000',
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
    display: 'block',
  },
}))(MuiAccordionDetails);

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
    value: 99,
    label: '$999',
  },
];
function valuetext(value) {
  return `$${value}`;
}

function SidebarProduct(props) {
  const classes = useStyles();

  const [showSidebar, setShowSidebar] = useState(true);
  const [categoryList, setCategoryList] = useState([]);
  const sizes = [38, 39, 40, 41, 42];
  const tags = ['men', 'women'];

  // fetch categoryList
  useEffect(() => {
    const fetchCategoryList = async () => {
      try {
        const response = await categoryApi.getAll();
        console.log(response);
        setCategoryList(response);
      } catch (error) {
        console.log('Failed to fetch categories:', error);
      }
    };
    fetchCategoryList();
  }, []);
  const changeShow = () => {
    setShowSidebar(!showSidebar);
  };
  const handleOnChange = (id) => {
    props.onChangeFilters();
    props.onCheckCategory(id);
  };
  return (
    <>
      <aside
        className={
          showSidebar ? 'sidebar-shop sidebar-filter' : 'sidebar-shop sidebar-filter active'
        }
      >
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
                  {categoryList.map((category) => (
                    <FormControlLabel
                      id={category.id}
                      control={<Checkbox name={category.name} />}
                      label={category.name}
                      onChange={() => handleOnChange(category.id)}
                    />
                  ))}
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
              <Typography className={classes.heading}>Size</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl component="size-set" className={classes.formControl}>
                <FormGroup>
                  {sizes.map((size, index) => (
                    <FormControlLabel id={index} control={<Checkbox name={size} />} label={size} />
                  ))}
                </FormGroup>
              </FormControl>
            </AccordionDetails>
          </Accordion>

          {/* Tags filters */}
          <Accordion defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="sizepanel-content"
              id="sizepanel-header"
            >
              <Typography className={classes.heading}>Tags</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl component="tag-set" className={classes.formControl}>
                <FormGroup>
                  {tags.map((tag, index) => (
                    <FormControlLabel id={index} control={<Checkbox name={tag} />} label={tag} />
                  ))}
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
                Price Range: $0 - $999
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
      <button
        className={showSidebar ? 'sidebar-fixed-toggler' : 'sidebar-fixed-toggler active'}
        onClick={() => changeShow()}
      >
        <MdSettings />
      </button>
      <div
        className={showSidebar ? 'back-drop' : 'back-drop active'}
        onClick={() => changeShow()}
      ></div>
    </>
  );
}

export default SidebarProduct;
