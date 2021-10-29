import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Services from '../Services/Services';

const Homee = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Homee;