import React from 'react';
import styles from './Navigation.module.scss';
import Link from '../Link';
import cx from 'classnames';

import { useRouter } from 'next/router';

const pages = ['about', 'notes', 'design'];
const Navigation = () => {
   const router = useRouter();

   return (
      <header className={styles.navigation}>
         <div className={styles.inner}>
            <Link href="/" className={styles.left}>
               Nikhil Vinay Sharma
            </Link>

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
