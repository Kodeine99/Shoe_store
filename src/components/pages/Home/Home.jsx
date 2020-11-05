import React from 'react';
import { Container } from '@material-ui/core';
import SectionCarousel from './sections/Carousel';
import SectionBannerGoup from './sections/BannerGroup';
import SectionBoxes from './sections/Boxes';
import SectionNewArrivals from './sections/NewArrivals';
import SectionCategory from './sections/Category';
import SectionTopSelling from './sections/TopSelling';
import SectionDeals from './sections/Deals';
import SectionBlogPosts from './sections/BlogPosts';
import SectionSubscribe from './sections/Subscribe';

function Home() {
    return (
        <>
        <Container>
            <SectionCarousel />
            <SectionBannerGoup />
            <SectionBoxes />
            <SectionNewArrivals />
            <SectionCategory />
            <SectionTopSelling />
            <SectionDeals />
            <SectionBlogPosts />
        </Container>
        <SectionSubscribe />
        </>
    );
}

export default Home;
