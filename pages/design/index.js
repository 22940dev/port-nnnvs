import React from 'react';
import { render } from 'react-dom';
import Images from '../../components/Gallery/Gallery';
import Gallery from 'react-grid-gallery';
import { NextSeo } from 'next-seo';


const Design = () => {
    return (
        <>
            <NextSeo
                title="Design"
                description=""
                canonical="https:/nikhilvs.com/design"
            />
            <Gallery images={Images} enableImageSelection={false}/>
        </>
    );
};

export default Design;
