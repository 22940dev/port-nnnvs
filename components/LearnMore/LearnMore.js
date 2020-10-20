import React from 'react';
import styles from './LearnMore.module.scss';

import Router from 'next/router';

const LearnMore = ({ text, location, margin = true, history }) => {
   const options = {
      learn: <span>Learn more &#8594;</span>,
      github: <span>Visit Github repository &#8594;</span>,
      'live-project': <span>Visit live project &#8594;</span>,
      appstore: <span>View on the App Store &#8594;</span>,
      website: <span>Visit the website &#8594;</span>,
      presentation: <span>View the presentation &#8594;</span>,
      continue: <span>Continue reading &#8594;</span>,
      heredev: <span>Read full post on HERE Dev blog &#8594;</span>,
      blog: <span>Read the blog post &#8594;</span>,
   };

   options.back = (
      <div className={styles['back-button']} onClick={() => Router.back()}>
         &#8592; Back
      </div>
   );

   const style = {};
   if (!margin) {
      style.margin = 0;
   }
   return (
      <div style={style} className={styles.learn}>
         {options[text]}
      </div>
   );
};

export default LearnMore;
