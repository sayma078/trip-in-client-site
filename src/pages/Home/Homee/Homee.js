import React from 'react';
import About from '../../About/About';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Location from '../Location/Location';
import Services from '../Services/Services';

const Homee = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Blogs></Blogs>
            <Location></Location>
        </div>
    );
};

export default Homee;