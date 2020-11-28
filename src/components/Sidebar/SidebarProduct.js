import React, { useState, useContext } from 'react';

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
import { MdSettings } from "react-icons/md";

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
    label: '$999'
  }
];
function valuetext(value) {
  return `$${value}`;
};


function SidebarProduct() {
  const classes = useStyles();

  const [showSidebar, setShowSidebar] = useState(true);
  const changeShow = () => {
    setShowSidebar(!showSidebar);
  }
  return (
    <>
      <aside
        className={showSidebar ? "sidebar-shop sidebar-filter" : "sidebar-shop sidebar-filter active"}>
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
              <FormControl
                component="brand-set"
                className={classes.formControl}
              >
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
              <FormControl
                component="size-set"
                className={classes.formControl}
              >
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox name="37" />}
                    label="37"
                  />
                  <FormControlLabel
                    control={<Checkbox name="38" />}
                    label="38"
                  />
                  <FormControlLabel
                    control={<Checkbox name="39" />}
                    label="39"
                  />
                  <FormControlLabel
                    control={<Checkbox name="40" />}
                    label="40"
                  />
                  <FormControlLabel
                    control={<Checkbox name="41" />}
                    label="41"
                  />
                  <FormControlLabel
                    control={<Checkbox name="42" />}
                    label="42"
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
        className={showSidebar ? "sidebar-fixed-toggler" : "sidebar-fixed-toggler active"}
        onClick={() => changeShow()}>
        <MdSettings />
      </button>
      <div
          className={showSidebar ? "back-drop" : "back-drop active"}
          onClick={() => changeShow()}
      >

      </div>
    </>
  );
}

export default SidebarProduct;
