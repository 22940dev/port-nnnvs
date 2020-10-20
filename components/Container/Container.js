import React from 'react';
import styles from './Container.module.scss';
import cx from 'classnames';
const Container = ({ children, className }) => {
   return (
      <div
         className={cx(
            styles['max-width-container'],
            ...(Array.isArray(className) ? className : [className])
         )}
      >
         {children}
      </div>
   );
};

export default Container;
