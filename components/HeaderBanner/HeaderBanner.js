import React from 'react';
import styles from './HeaderBanner.module.scss';
import { capitalize } from '../../shared';
//Image
import face from   './nikhilvinaysharma.png';

const HeaderBanner = ({ type, title }) => {
   if (type === 'post') {
      return <div className={styles.small}></div>;
   } else if (type === 'about') {
      // return (
      //    <div className ={styles['about-big']}>
      //       <img src={face} alt="my face [very large]" />
      //    </div>
      // );
      return <div className={styles.smaller}></div>;
   } else {
      return <div className={styles.big}>{title}</div>;
   }
};

export default HeaderBanner;
