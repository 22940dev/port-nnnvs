import React from 'react';
import styles from './BlogTile.module.scss';
import LearnMore from '../LearnMore/LearnMore';
import { monthNames } from '../../shared';
import Link from 'next/link';

const BlogTile = (props) => {
   const date = `${new Date(props.writing.date).getDate()} ${
      monthNames[new Date(props.writing.date).getMonth()]
   } ${new Date(props.writing.date).getFullYear()}`;

   let desc = props.writing.description;
   if (props.blogPage) {
      desc = desc.split(' ').slice(0, 40).join(' ') + '...';
   }
   if (props.writing.external) {
      return (
         <a
            target="_blank"
            rel="noopener noreferrer"
            href={props.writing.url}
            className={styles.post}
         >
            {props.image && (
               <div
                  className={styles.block2}
                  style={{ backgroundImage: `url('img/${props.writing.img}')` }}
               ></div>
            )}

            <div>
               <div className={styles.date}>{date}</div>
               <div className={styles['post-title']}>{props.writing.title}</div>
               <div className={styles.teaser}>{desc}</div>
               <LearnMore
                  text={props.writing.link_text}
                  link="{props.writing.url || '/writings/' + props.writing.slug}"
               />
            </div>
         </a>
      );
   } else {
      return (
         <Link href={`writing/${props.writing.slug}`}>
            <div className={styles.post}>
               {props.image && (
                  <div
                     className={styles.block2}
                     style={{
                        backgroundImage: `url('${props.writing.img}')`,
                     }}
                  ></div>
               )}

               <div>
                  <div className={styles.date}>{date}</div>
                  <div className={styles['post-title']}>
                     {props.writing.title}
                  </div>
                  <div className={styles.teaser}>{desc}</div>
                  <LearnMore
                     text={props.writing.link_text}
                     link="{props.writing.url || '/writings/' + props.writing.slug}"
                  />
               </div>
            </div>
         </Link>
      );
   }
};

export default BlogTile;
