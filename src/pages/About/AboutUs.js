import React from 'react';
import { Container, Link, Breadcrumbs, Typography, Grid, Button } from '@material-ui/core';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import Footer from '../../components/Footer/Footer';
import './AboutUs.css';
import background from '../../assets/img/backgrounds/page-background-2.jpeg';
import aboutImg1 from '../../assets/img/aboutus/about-1.jpg';
import aboutImg2 from '../../assets/img/aboutus/about-2.jpg';
import OurTeam from './OurTeam';

  
function AboutUs() {
  return (
    <>
      <div className="breadcrumb-nav" style={{borderBottom:'none'}}>
          <Container className="breadcrumb-container">
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb">
              <Link className="breadcumbs-icon" color="inherit" href="/">
                <Typography color="inherit">Home</Typography>
              </Link>
              <Typography color="textPrimary">About Us</Typography>
            </Breadcrumbs>
          </Container>
      </div>
      <Container>
        <div className="page-header page-header-big text-center"
          style={{ backgroundImage: `url(${background})` }}
        >
          <h1 className="page-title">
            About Us
            <span>Who we are</span> 
          </h1>
        </div>
      </Container>
      <div className="page-content">
        <Container>
          <Grid container spacing={2} >
            <Grid item md={6} sm={12}>
              <Typography variant="h4"className="title">Our Vison</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. 
              </Typography>
            </Grid>
            <Grid item md={6} sm={12}>
              <Typography variant="h4"className="title">Our Misson</Typography>
              <Typography variant="body1">
                Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.
                <br></br>
                Praesent elementum hendrerit tortor. Sed semper lorem at felis. 
              </Typography>
            </Grid>
          </Grid>
          <div style={{ marginBottom: '4rem' }}></div>
        </Container>
        <div className="bg-light">
          <Container>
            <Grid container spacing={2}>
              <Grid item md={6} sm={12}>
                <Typography
                  variant="h3"
                  className="title"
                  color="textPrimary"
                  gutterBottom={true}
                > Who we are
                </Typography>
                <Typography
                  className="lead"
                  variant="body1"
                  color="primary"
                  paragraph={true}
                >
                  Pellentesque odio nisi, euismod pharetra a ultricies in diam. Sed arcu. Cras consequat
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  paragraph={true}
                >
                  Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, uctus metus libero eu augue. 
                </Typography>
                <Button variant="outlined" color="primary">
                  View our new
                </Button>
              </Grid>
              <Grid item md={6} sm={12}>
                <div className="about-img">
                  <img src={aboutImg1} alt="about-1" className="about-img-front"/>
                  <img src={aboutImg2} alt="about-2" className="about-img-back"/>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
        <Container>
          <OurTeam />
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
