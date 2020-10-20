import React from 'react';
import styles from './Banner.module.scss';

const Banner = (props) => {
   return (
      <div className={styles.banner}>
         <span className="bold">{props.title}</span>
         <a
            target="_blank"
            rel="noopener noreferrer"
            href={props.link}
            className={styles['light-link']}
         >
            {props.text}
         </a>
      </div>
   );
};

export default Banner;
