import React from 'react';
import { Container } from '@material-ui/core';
import SectionCarousel from './sections/Carousel';
import SectionBannerGoup from './sections/BannerGroup';
import SectionBoxes from './sections/Boxes';
import SectionNewArrivals from './sections/NewArrivals';
import SectionCategory from './sections/Category';

function Home() {
    return (
        <Container>
            <SectionCarousel />
            <SectionBannerGoup />
            <SectionBoxes />
            <SectionNewArrivals />
            <SectionCategory />
        </Container>
    );
}

export default Home;
