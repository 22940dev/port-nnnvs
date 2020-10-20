import React from 'react';
import Link from 'next/link';
import styles from './HomeProjectRow.module.scss';

import Button from '../Button/Button';
import ProjectTile from '../ProjectTile/ProjectTile';

const HomeProjectRow = (props) => {
   return (
      <div className={styles.carousel}>
         <ProjectTile project={props.projects[0]} />
         <ProjectTile project={props.projects[1]} />
         <div className={styles['button-row']}>
            <Link href="/projects">
               <Button color="light" text="View all projects" />
            </Link>
         </div>
      </div>
   );
};

export default HomeProjectRow;
