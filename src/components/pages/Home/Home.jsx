import React from 'react';
import { Container } from '@material-ui/core';
import SectionCarousel from './sections/Carousel';
import SectionBannerGoup from './sections/BannerGroup';
import SectionBoxes from './sections/Boxes';
import SectionNewArrivals from './sections/NewArrivals';
import SectionCategory from './sections/Category';
import TopSelling from './sections/TopSelling';

function Home() {
    return (
        <Container>
            <SectionCarousel />
            <SectionBannerGoup />
            <SectionBoxes />
            <SectionNewArrivals />
            <SectionCategory />
            <TopSelling />
        </Container>
    );
}

export default Home;
