import React from 'react';
import Grid from '@material-ui/core/Grid';

import megaMenuBanner1 from '../../assets/img/banners/megamenu-banner-02.jpg';

function MegamenuSm() {
  return (
    <div className="megaMenu megaMenu-sm">
      <Grid className="no-gutter">
        <Grid item xs={8} className="megaMenu-menu">
          <div className="menuSm-content">
            <div className="menu-content-left">
              <div className="menu-title">New products</div>
              <ul>
                <li><a href="#1">Ultra Boots</a></li>
                <li><a href="#1">Originals</a></li>
                <li><a href="#1">NMD</a></li>
                <li>
                  <a href="#1">Soccers</a>
                  <span className="tip tip-new">New</span>
                </li>
              </ul>
              <div className="menu-title">Hot items</div>
              <ul>
                <li>
                  <a href="#1">Air Force 1</a>
                  <span className="tip tip-hot">Hot</span>
                </li>
                <li><a href="#1">Air Jordan</a></li>
                <li><a href="#1">Nike Football</a></li>
              </ul>
            </div>
          </div>
        </Grid>
        <Grid item xs={4} className="megaMenu-image">
          <div className="megaMenu-banner banner-overlay">
            <div className="banner banner-menu">
              <img alt="" src={megaMenuBanner1} ></img>
              <div className="banner-content banner-content-top">
                <div className="banner-title textWhite">
                  Last <br></br> Change <br></br>
                  <span><strong>Sale</strong></span>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default MegamenuSm;
