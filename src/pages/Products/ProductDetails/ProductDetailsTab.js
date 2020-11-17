import React from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: 'none',
    marginBottom: '2rem',
    // backgroundColor: theme.palette.background.paper,
  },
}));

function ProductDetailsTab({description}) {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar
        style={{ boxShadow: 'none', color: '#333', backgroundColor: 'transparent' }} position="static">
        <Tabs
          indicatorColor="primary"
          centered
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Description"  {...a11yProps(2)} />
          <Tab label="Shipping & Return"  {...a11yProps(2)} />
          <Tab label="Reviews (0)" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <div className="tab-content product-details-tab">
        <TabPanel className="tab-panel" value={value} index={0}>
          <h3>Product Information</h3>
          {description}
        </TabPanel>
        <TabPanel className="tab-panel" value={value} index={1}>
          <h3>Delivery & returns</h3>
          {description}
        </TabPanel>
        <TabPanel className="tab-panel" value={value} index={2}>
          <h3>Reviews</h3>
          <p>No reviews</p>
        </TabPanel>
      </div>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};  
export default ProductDetailsTab;
