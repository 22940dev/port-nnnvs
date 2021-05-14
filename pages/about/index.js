import styles from './index.module.scss';
import React from 'react';
import Socials from '../../components/Socials/Socials';
import HeaderBanner from '../../components/HeaderBanner/HeaderBanner';
import Container from '../../components/Container/Container';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

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
                  <img src={require('../../components/HeaderBanner/Nikhil__Notion_square.jpg')} />
               </div>
               
               <div className={styles['item2']}>
                  <div className={styles.lead   }>
                   👋 I'm Nikhil.<br />
                   I'm a Senior Software Engineer at {''}
                              <a href="https://www.joveo.com/">
                              Joveo
                              </a>{''}.
                  </div>
                  <div className={styles.info}>
                     <div>
                        Previously, I worked as Software Engineer II at {''}
                              <a href="https://www.here.com/">
                              HERE Technologies
                              </a>{''}, where I have independently 
                        initiated and driven several research & development projects. 
                     </div>
                     <div>
                        As a Deep Learning enthusiast, I try to work out an keep a hang of what’s going on 
                        in the flourishing world of AI. I <Link href={`notes`}>
                              <a>write</a>
                              </Link>  about my experiences with technology in this space.
                        
                     </div>
                     <div>
                        I studied Electronics & Electrical Engineering at {''}
                        <span className={styles.highlight}>
                           Birla Institute of Technology & Science Pilani.
                        </span>
                     </div>
                     <div>
                        I enjoy reading,  <Link href={`gallery`}>
                              <a>photography</a>
                              </Link> and running. Recently, I've started competitive gaming,
                         hit me up for any matches of Valorant or Rocket League!
                     </div>
                     <div>
                        Thanks for dropping by!
                     </div>
                  </div>

                  <div className={styles['about-col']}>
                     <div className={styles.title}>Interests</div>
                     <div>
                        <div className={styles.item}>
                           Vision
                        </div>
                        <div className={styles.item}>
                           Machine Learning DevOps
                        </div>
                        <div className={styles.item}>Natural Language Processing</div>
                     </div>
                  </div>

                  <div className={styles['about-col']}>
                     <div className={styles.title}>Patents</div>
                        <div>
                           <div className={styles.item}>
                              {' '}
                              <a href="https://patents.google.com/patent/US20200355515A1/en?oq=US20200355515A1/">
                                 On-Street Parking Localization using Unsupervised Machine Learning on GPS Probe data, May 2019, US20200355515A1
                              </a>{' '}
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
