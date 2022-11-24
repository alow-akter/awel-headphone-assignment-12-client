import React from 'react';
import HomeSilder from '../HomeSilder/HomeSilder';
import HeadphoneFeature from './HeadphoneFeature/HeadphoneFeature';
import HeadphoneInfo from './HeadphoneInfo/HeadphoneInfo';

const Home = () => {
    return (
        <div>
            <HomeSilder></HomeSilder>
            <HeadphoneInfo></HeadphoneInfo>
            <HeadphoneFeature></HeadphoneFeature>
        </div>
    );
};

export default Home;