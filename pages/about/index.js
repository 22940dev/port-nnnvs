import styles from './index.module.scss';
import React from 'react';
import Socials from '../../components/Socials/Socials';
import HeaderBanner from '../../components/HeaderBanner/HeaderBanner';
import Container from '../../components/Container/Container';
import { NextSeo } from 'next-seo';

const About = () => {
   return (
      <>
         <NextSeo
            title="About - Nikhil"
            description="About Nikhil Vinay Sharma"
            canonical="https:/nikhilvs.com/about"
         />
         <HeaderBanner type="about" />
         <Container className={styles.about}>
            <div className="grid-1-2">
               <div className ={styles['small']}>
                  <img src={require('../../components/HeaderBanner/nikhilvinaysharma.png')} />
               </div>
               
               <div className={styles['item2']}>
                  <div className={styles.lead   }>
                     I work as a Software Developer at <span className={styles.highlight}>HERE Technologies</span>{' '} in Mumbai, India.
                  </div>
                  <div className={styles.info}>
                     <div>
                        I'm a 23-year-old technologist working on the intersection of the physical and the digital world, i.e, maps.
                        As a Deep Learning and AI enthusiast, I try to work out and keep a hang of what’s going on in the flourishing world of AI. 
                        Currently fascinated by Deep learning applications for Natural Language Processing. 
                     </div>
                     <div>
                        Previously, I studied Electronics & Electrical Engineering at {' '}
                        <span className={styles.highlight}>
                           Birla Institute of Technology & Science Pilani.
                        </span>
                     </div>
                     <div>
                        I enjoy reading, photography and running. Recently, I've started competitive gaming, hit me up for any matches of Valorant or Rocket League!
                     </div>
                     <div>
                        This website is a work in progress, I will be writing some blogs here soon (hopefully). Thanks for visiting!
                     </div>
            
                  </div>

                  <div className={styles['about-col']}>
                     <div className={styles.title}>Interests</div>
                     <div>
                        <div className={styles.item}>
                           Vision
                        </div>
                        <div className={styles.item}>Natural Language Processing</div>
                        <div className={styles.item}>
                           Machine Learning DevOps
                        </div>
                     </div>
                  </div>

                  <div className={styles['about-col']}>
                     <div className={styles.title}>Patents</div>
                        <div>
                           <div className={styles.item}>
                              On-Street Parking Localization using Unsupervised Machine Learning on GPS Probe data, May 2019, US 16/404916
                           </div>
                           <div className={styles.item}>
                              Inquisitive approach to find the last mile path using Audio and GPS Probe data using Machine Learning, Feb 2020, US 16/803302
                           </div>
                        </div>
                     </div>
                     <div className={styles.info}>
                     <div>
                        All views contained herein are my own and do not represent the views of my employers or any affiliate.
                     </div>
                  </div>
               </div>
               <div className={styles['item1']}>
                  <Socials margin={false} />
               </div>    
            </div>
         </Container>
      </>
   );
};

export default About;
