import React from 'react';

import Link from 'next/link';
import styles from './index.module.scss';

import Socials from '../components/Socials/Socials';
import HomeProjectRow from '../components/HomeProjectRow/HomeProjectRow';
import HomeNewsLetterRow from '../components/HomeNewsLetterRow/HomeNewsLetterRow';
import BlogTile from '../components/BlogTile/BlogTile';
import Button from '../components/Button/Button';
import Banner from '../components/Banner/Banner';
import writing from '../data/writing';
// import projects from '../data/projects';
import { NextSeo } from 'next-seo';

import Container from '../components/Container/Container';

const Home = () => {
  const lead = Math.random() >= 0.5 ? 'I design & code.' : 'Design + Code';

  return (
    <>
      <NextSeo
            title="Nikhil Vinay Sharma"
            description="Blog"
            canonical="https://nikhilvs.com"
         />
      <Container>
            <div className={styles.mainstage}>
               <div className={styles.lead}>{lead}</div>
               <div className={styles.sublead}>
                  Hi, I'm Nikhil. Welcome to my website.
               </div>
               <Socials margin={true} />
               
            </div>
            <h1>From the archives</h1>

               {writing
                  .filter((x) => x.featured)
                  .map((x, i) => (
                     <BlogTile
                        key={i}
                        image={true}
                        blogPage={false}
                        writing={x}
                     />
                  ))}
               <Link href="/notes">
                  <Button
                     onClick={null}
                     color="light"
                     text="View all writing"
                  />
               </Link>
            
            {/* <HomeNewsLetterRow /> */}
            {/* <div className={styles.writings}>
               
               
            </div> */}
            
      </Container>
    </>
  );
};

export default Home;

