import React from 'react';
import { render } from 'react-dom';
import Images from '../../components/Gallery/Gallery';
import GalleryImages from 'react-grid-gallery';
import { NextSeo } from 'next-seo';


const Gallery = () => {
    return (
        <>
            <NextSeo
                title="Gallery"
                description=""
                canonical="https:/nikhilvs.com/gallery"
            />
            <GalleryImages images={Images} enableImageSelection={false}/>
        </>
    );
};

export default Gallery;
