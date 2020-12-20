import React from 'react';
import styles from './index.module.scss';
import ProjectTile from '../../components/ProjectTile/ProjectTile';
import Button from '../../components/Button/Button';
import cx from 'classnames';
import Container from '../../components/Container/Container';
import HeaderBanner from '../../components/HeaderBanner/HeaderBanner';
import projects from '../../data/projects';
import { NextSeo } from 'next-seo';

// import { getSortedPostsData } from '../../lib/projects';

// export async function getStaticProps() {
//    const p = getSortedPostsData();
//    return {
//       props: {
//          p,
//       },
//    };
// }

class Projects extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         projects: projects,
         filtered: projects,
         categories: [...new Set(projects.map((x) => x.categories).flat())].map(
            (x) => {
               return {
                  name: x,
                  active: false,
               };
            }
         ),
      };
   }

   handleClick = (category) => {
      const copyProj = this.state.projects.filter((proj) => {
         return proj.categories.includes(category);
      });

      const copyCateg = this.state.categories.map((cat) => {
         let active = false;
         if (cat.name === category) {
            active = true;
         }
         return {
            name: cat.name,
            active: active,
         };
      });
      this.setState({
         filtered: copyProj,
         categories: copyCateg,
      });
   };

   clearFilters = () => {
      const copyCateg = this.state.categories.map((cat) => {
         return {
            name: cat.name,
            active: false,
         };
      });
      this.setState({
         categories: copyCateg,
         filtered: this.state.projects,
      });
   };

   render() {
      return (
         <>
            <NextSeo
               title="Projects"
               description="Projects by Nikhil"
               canonical="https://nikhilvs.com/projects"
            />
            <HeaderBanner title="Projects" />
            <Container>
               <div className={styles['projects-container']}>
                  <div className={styles.sidebar}>
                     <div className={styles.title}>Filter Projects:</div>
                     {this.state.categories.map((z, i) => {
                        return (
                           <div
                              key={i}
                              className={cx(styles.item, {
                                 [styles.selected]: z.active,
                              })}
                              onClick={() => this.handleClick(z.name)}
                           >
                              &mdash; {z.name}
                           </div>
                        );
                     })}
                     {this.state.categories.filter((x) => x.active).length >
                        0 && (
                        <Button
                           color="light"
                           onClick={this.clearFilters}
                           text="&#10005; Clear"
                        />
                     )}
                  </div>
                  <div className={styles['projects-grid']}>
                     {this.state.filtered.map((x, i) => (
                        <ProjectTile project={x} key={i} />
                     ))}
                  </div>
               </div>
            </Container>
         </>
      );
   }
}

export default Projects;
