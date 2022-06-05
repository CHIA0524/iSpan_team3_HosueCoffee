import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react';

//Home CSS
import './Home.css';

//Home components
import HomeBanner from './HomeBanner';
import HomeAppeal from './HomeAppeal';
import HomeMenu from './HomeMenu';
import HomeProducts from './HomeProducts';
import HomeBlog from './HomeBlog';
import HomeStore from './HomeStore';
// import HomeNewsActivity from './HomeNewsActivity';
import HomeAboutUs from './HomeAboutUs';
import HomeTopBTN from './HomeTopBTN';



function Home(props) {
    return (
        <Router>

            <HomeBanner setBannerHeight={props.setBannerHeight}/>

            <HomeAppeal />

            <HomeMenu />

            <HomeProducts />

            <HomeBlog />

            <HomeStore />

            {/* <HomeNewsActivity /> */}

            <HomeAboutUs />

            <HomeTopBTN />

        </Router>
    );
}

export default Home