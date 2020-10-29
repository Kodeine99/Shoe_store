import React from 'react';
import { Container } from '@material-ui/core';
import SectionCarousel from './sections/Carousel';
import SectionBannerGoup from './sections/BannerGroup';
import SectionBoxes from './sections/Boxes';

function Home() {
    return (
        <Container>
            <SectionCarousel />
            <SectionBannerGoup />
            <SectionBoxes />
        </Container>
    );
}

export default Home;
