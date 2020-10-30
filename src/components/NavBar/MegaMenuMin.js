import React from 'react';
import Grid from '@material-ui/core/Grid';

// import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';


function MegamenuMin() {
  return (
    <div className="megaMenu megaMenu-min">
      <Grid container className="no-gutter">
        <Grid item xs={12} className="megaMenu-menu">
          <div className="menuMin-content">
            <div className="menu-content-left">
              <ul>
                <li><a href="#1">Ultra Boots</a></li>
                <li><a href="#1">Originals</a></li>
                <li><a href="#1">NMD</a></li>
                <li><a href="#1">Soccers</a></li>
                <li><a href="#1">Air Force 1</a></li>
                <li><a href="#1">Air Jordan</a></li>
                <li><a href="#1">Nike Football</a></li>
              </ul>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default MegamenuMin;
