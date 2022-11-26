import React from 'react';
import AllHeadphones from '../AllHeadphone/AllHeadphones';
import HomeSilder from '../HomeSilder/HomeSilder';
import HeadphoneFeature from './HeadphoneFeature/HeadphoneFeature';
import HeadphoneInfo from './HeadphoneInfo/HeadphoneInfo';

const Home = () => {
    return (
        <div>
            <HomeSilder></HomeSilder>
            <AllHeadphones></AllHeadphones>
            <HeadphoneInfo></HeadphoneInfo>
            <HeadphoneFeature></HeadphoneFeature>


        </div>
    );
};

export default Home;