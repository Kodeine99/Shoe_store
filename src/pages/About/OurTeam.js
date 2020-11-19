import React from 'react';
import {Grid, Typography, IconButton} from '@material-ui/core';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import memImg1 from '../../assets/img/aboutus/member-1.jpg';
import memImg2 from '../../assets/img/aboutus/member-2.jpg';
import memImg3 from '../../assets/img/aboutus/member-3.jpg';

function OurTeam() {
  return (
    <div className="our-team">
      <Typography
        style={{ fontWeight:'bold'}}
        variant="h3"
        align="center"
        gutterBottom={true}
      >
        Meet Our Team
      </Typography>
      <Grid container spacing={2} >
        <Grid item md={4} sm={12}>
          <div className="member member-anim text-center">
            <figure className="member-media">
              <img src={memImg1} alt="" />
              <figcaption className="member-overlay">
                <div className="member-overlay-content">
                  <h3 className="member-title">
                    Dua Lipa
                    <span>Founder & CEO</span>
                  </h3>
                  <Typography variant="body2"
                    style={{ marginLeft: "auto", marginRight: "auto", color: "#999", maxWidth: "240px" }}>
                    Sed pretium, ligula sollicitudin viverra, tortor libero sodales leo, eget blandit nunc.
                  </Typography>
                  <div className="social-icons">
                    <IconButton aria-label="delete">
                      <FacebookIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                      <TwitterIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                      <InstagramIcon />
                    </IconButton>
                  </div>
                </div>
              </figcaption>
            </figure>
            <div className="member-content">
              <h3 className="member-title">
                Dua Lipa
                <span>Founder & CEO</span>
              </h3>
            </div>
          </div>
        </Grid>
        <Grid item md={4} sm={12}>
          <div className="member member-anim text-center">
            <figure className="member-media">
              <img src={memImg2} alt="" />
              <figcaption className="member-overlay">
                <div className="member-overlay-content">
                  <h3 className="member-title">
                    Ferran Torres
                    <span>Product designer</span>
                  </h3>
                  <Typography variant="body2"
                    style={{ marginLeft: "auto", marginRight: "auto", color: "#999", maxWidth: "240px" }}>
                    Sed pretium, ligula sollicitudin viverra, tortor libero sodales leo, eget blandit nunc.
                  </Typography>
                  <div className="social-icons">
                    <IconButton aria-label="delete">
                      <FacebookIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                      <TwitterIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                      <InstagramIcon />
                    </IconButton>
                  </div>
                </div>
              </figcaption>
            </figure>
            <div className="member-content">
              <h3 className="member-title">
                Ferran Torres
                <span>Product Designer</span> 
              </h3>
            </div>
          </div>
        </Grid>
        <Grid item md={4} sm={12}>
          <div className="member member-anim text-center">
            <figure className="member-media">
              <img src={memImg3} alt="" />
              <figcaption className="member-overlay">
                <div className="member-overlay-content">
                  <h3 className="member-title">
                    Anthony Martial
                    <span>Sales & Marketing Manager</span>
                  </h3>
                  <Typography variant="body2"
                    style={{ marginLeft: "auto", marginRight: "auto", color: "#999", maxWidth: "240px" }}>
                    Sed pretium, ligula sollicitudin viverra, tortor libero sodales leo, eget blandit nunc.
                  </Typography>
                  <div className="social-icons">
                    <IconButton aria-label="delete">
                      <FacebookIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                      <TwitterIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                      <InstagramIcon />
                    </IconButton>
                  </div>
                </div>
              </figcaption>
            </figure>
            <div className="member-content">
              <h3 className="member-title">
                Anthony Martial
                <span>Sales & Marketing Manager</span> 
              </h3>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default OurTeam;
