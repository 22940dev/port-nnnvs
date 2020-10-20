import React from 'react';
import styles from './ProjectTile.module.scss';
import LearnMore from '../LearnMore/LearnMore';
import Link from 'next/link';

const ProjectTileLinkContainer = ({ type, children, project }) => {
   if (!project.slug) {
      return (
         <a
            target="_blank"
            rel="noopener noreferrer"
            href={project.external_slug}
            className={styles.project}
         >
            {children}
         </a>
      );
   } else {
      return (
         <Link href={'projects/' + project.slug}>
            <div className={styles.project}>{children}</div>
         </Link>
      );
   }
};

const ProjectTile = ({ project }) => {
   return (
      <ProjectTileLinkContainer
         type={project.content ? 'internal' : 'external'}
         project={project}
      >
         <div
            className={styles.block}
            style={{
               backgroundColor: project.background,
               backgroundImage: `url('${project.img}')`,
            }}
         ></div>
         <h3>{project.title}</h3>
         <div className={styles.subtitle}>{project.description}</div>
         <LearnMore text={project.link_text} />
      </ProjectTileLinkContainer>
   );
};

export default ProjectTile;
