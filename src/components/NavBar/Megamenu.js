import React from 'react';
import Grid from '@material-ui/core/Grid';
// import Link from '@material-ui/core/Link';

import megaMenuBanner1 from '../../assets/img/banners/megamenu-banner-02.jpg';

function Megamenu() {
  return (
    <div className="megaMenu megaMenu-md">
      <Grid className="no-gutter">
        <Grid item xs={8} className="megaMenu-menu">
          <div className="menu-content">
            <div className="menu-content-left">
              <div className="menu-title">Adidas</div>
              <ul>
                <li><a href="#ultraboots">Ultra Boots</a></li>
                <li><a href="#originals">Originals</a></li>
                <li><a href="#nmd">NMD</a></li>
                <li>
                  <a href="#soccers">Soccers</a>
                  <span className="tip tip-new">New</span>
                </li>
              </ul>
              <div className="menu-title">Nike</div>
              <ul>
                <li>
                  <a href="#airforce1">Air Force 1</a>
                  <span className="tip tip-hot">New</span>
                </li>
                <li><a href="#airjodan">Air Jordan</a></li>
                <li><a href="#nikefootball">Nike Football</a></li>
              </ul>
            </div>
            <div className="menu-content-right">
              <div className="menu-title">Converse</div>
              <ul>
                <li><a href="#classic">Classic</a></li>
                <li>
                  <a href="#chuck70s">Chuck 70s</a>
                  <span className="tip tip-hot">Hot</span>
                </li>
                <li><a href="#cx">CX</a></li>
                <li><a href="#onestar">One Star</a></li>
              </ul>
              <div className="menu-title">Puma</div>
              <ul>
                <li><a href="#classic">Classic</a></li>
                <li><a href="#running">Running</a></li>
                <li><a href="#pumasoccer">Puma Soccers</a></li>
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

export default Megamenu;
