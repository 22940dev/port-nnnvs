import React from 'react';

import { monthNames } from '../../shared';
import LearnMore from '../../components/LearnMore/LearnMore';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import HeaderBanner from '../../components/HeaderBanner/HeaderBanner';
import { NextSeo } from 'next-seo';
import styles from './Post.module.scss';
const Post = ({ config, children }) => {
   const post = config;
   const date = new Date(post.date);
   const displayDate =
      date.getDate() +
      ' ' +
      monthNames[date.getMonth()] +
      ' ' +
      date.getFullYear();
   return (
      <>
         <NextSeo title={post.title} description="A blog post" />
         <HeaderBanner type="post" />
         <Container className={[styles['post-container'], 'grid-1-3']}>
            <div className={styles['left-col']}>
               <LearnMore margin={false} text="back" />
               {post.date && <div className={styles.date}>{displayDate}</div>}
               {post.showPostButton && (
                  <>
                     <div className={styles['spacing-hack']}></div>
                     <Button
                        color="light"
                        href={post.external_slug}
                        text="View project"
                     />
                     <div className={styles['spacing-hack']}></div>
                  </>
               )}
            </div>
            <div>
               <div className={styles.lead}>{post.title}</div>
               {children}
            </div>
         </Container>
      </>
   );
};

export default Post;
