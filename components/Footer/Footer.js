import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
   return (
      <footer className={styles.footer}>
         <span>&copy; {new Date().getFullYear()} Nikhil Vinay Sharma. </span>
         <a href="https://github.com/nnnvs/website">View source code.</a>
      </footer>
   );
};

export default Footer;
