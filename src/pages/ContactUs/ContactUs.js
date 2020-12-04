import React from 'react';
import { Container, Link, Breadcrumbs, Typography, Grid, Button, TextField, TextareaAutosize} from '@material-ui/core';
import './ContactUs.css';


import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { MdLocationOn, MdAccessTime, MdPhone, MdEmail, MdEvent, } from "react-icons/md";
import { GoLocation } from "react-icons/go";


import background from '../../assets/img/backgrounds/page-background-3.jpg';
import Footer from '../../components/Footer/Footer';



function ContactUs(props) {
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
              <Typography color="textPrimary">Contact Us</Typography>
            </Breadcrumbs>
          </Container>
      </div>
      <Container>
        <div className="page-header page-header-big text-center"
          style={{ backgroundImage: `url(${background})` }}
        >
          <h1 className="page-title">
            Contact Us
            <span>keep in touch with us</span> 
          </h1>
        </div>
      </Container>
      <div className="page-content">
        <Container>
          <Grid container spacing={2} style={{marginBottom: '2rem'}}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Typography
                variant="h5"
                gutterBottom={true}
              >
                Contact information
              </Typography>
              <Typography variant="body1" paragraph={true}>
                Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
              </Typography>
              <Grid container spacing={2}>
                <Grid item md={7 } sm={7} xs={12}>
                  <div className="contact-info">
                    <Typography variant="h6" gutterBottom={true}>The Office</Typography>
                    <ul className="contact-list">
                      <li className="text-paragraph"> 
                          <MdLocationOn className="icons"/>
                          HaNoi, Vietnam
                      </li>
                      <li className="text-paragraph"> 
                          <MdPhone className="icons"/>
                          +84 123456789
                      </li>
                      <li className="text-paragraph"> 
                          <MdEmail className="icons"/>
                          infoKDShop@gmail.com
                      </li>
                    </ul>
                  </div>
                </Grid>
                <Grid item md={5} sm={5} xs={12}>
                  <div className="contact-info">
                    <Typography variant="h6" gutterBottom={true}>The Office</Typography>
                    <ul className="contact-list">
                      <li className="text-paragraph"> 
                        <MdAccessTime className="icons"/>
                        <span >
                          Monday-Saturday
                          <br />
                          11am-7pm ET
                        </span>
                        
                      </li>
                      <li className="text-paragraph"> 
                        <MdEvent className="icons"/>
                        <span>
                          Sunday
                          <br />
                          11am-6pm ET
                        </span>
                      </li>
                    </ul>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid className="contact-form" item lg={6} md={6} sm={12} xs={12}>
              <Typography
                variant="h5"
                gutterBottom={true}
              >
                Got Any Questions?
              </Typography>
              <Typography variant="body1" paragraph={true}>
                Use the form below to get in touch with the sales team.
              </Typography>
              <form className="contact-form" noValidate autoComplete="off">
                <Grid container spacing={2} style={{width: '100%'}}>
                  <Grid item md={6} sm={6} xs={12}>
                    <TextField
                      id="cName"
                      label="Name"
                      style={{ margin: 8 }}
                      placeholder="Your Name"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item md={6} sm={6}xs={12}>
                    <TextField
                      id="cEmail"
                      label="Email"
                      style={{ margin: 8 }}
                      placeholder="Your Email"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} style={{ width: "100%"}}>
                  <Grid item md={6} sm={6} xs={12}>
                    <TextField
                      id="cPhone"
                      label="Phone"
                      style={{ margin: 8 }}
                      placeholder="Your Phone Number"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item md={6} sm={6} xs={12}>
                    <TextField
                      id="cSubject"
                      label="Subject"
                      style={{ margin: 8 }}
                      placeholder="Subject"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item  xs={12}>
                    <TextareaAutosize
                      className="textarea"
                      aria-label="message"
                      placeholder="Message"
                      rowsMin={5}
                    />
                  </Grid>
                </Grid>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{ marginLeft: '.5rem' }}
                >
                  Submit
                </Button>
              </form>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default ContactUs;
