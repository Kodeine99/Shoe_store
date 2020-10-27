import React from 'react';
import { Container } from '@material-ui/core';
import SectionCarousel from './sections/Carousel';
import SectionBannerGoup from './sections/BannerGroup';

function Home() {
    return (
        <Container>
            <SectionCarousel />
            <SectionBannerGoup />
        </Container>
    );
}

export default Home;
