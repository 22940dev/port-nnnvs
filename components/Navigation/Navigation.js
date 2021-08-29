import React from 'react';
import styles from './Navigation.module.scss';
import Link from '../Link';
import cx from 'classnames';

import { useRouter } from 'next/router';

const pages = ['about', 'notes', 'gallery'];
const Navigation = () => {
   const router = useRouter();

   return (
      <header className={styles.navigation}>
         <div className={styles.inner}>
            <Link href="/" className={styles.left}>
               Nikhil Vinay Sharma
            </Link>


            {''}<a key={0}
               className={cx(styles.right)}
               href="https://drive.google.com/file/d/15ioid4mSn87Yl0ahspNQCFJB35cH1fMH/view?usp=sharing">
               Resume
            </a>{''}

            {pages.map((x, i) => (

               <Link
                  key={i}
                  className={cx(styles.right, {
                     [styles.active]: router.pathname === `/${x}`,
                  })}
                  href={`/${x}`}
               >
                  {x}
               </Link>
            ))}
         </div>
      </header>
   );
};
export default Navigation;
