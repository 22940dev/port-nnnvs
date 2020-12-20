import React from 'react';
import styles from './index.module.scss';
import BlogTile from '../../components/BlogTile/BlogTile';
import Button from '../../components/Button/Button';
import { monthNames } from '../../shared';
import writing from '../../data/writing';
import cx from 'classnames';

import Container from '../../components/Container/Container';
import { NextSeo } from 'next-seo';
import HeaderBanner from '../../components/HeaderBanner/HeaderBanner';
export default class Notes extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         writing: writing,
         filtered: writing,
         categories: [
            ...Array.from(
               new Set(
                  writing.map((x) => {
                     return {
                        date: new Date(x.date),
                        label:
                           monthNames[new Date(x.date).getMonth()] +
                           ' ' +
                           new Date(x.date).getFullYear(),
                     };
                  })
               )
            ).map((x) => {
               return {
                  name: x.label,
                  active: false,
                  group: 'date',
                  date: x.date,
               };
            }),
            ...Array.from(new Set(writing.map((x) => x.categories).flat())).map(
               (x) => {
                  return {
                     name: x,
                     active: false,
                     group: 'category',
                  };
               }
            ),
         ],
      };
   }
   handleClick = (group, key) => {
      const filterCopy = this.state.writing.filter((blog) => {
         if (group === 'category') {
            return blog.categories.includes(key);
         } else {
            return (
               key ===
               monthNames[new Date(blog.date).getMonth()] +
                  ' ' +
                  new Date(blog.date).getFullYear()
            );
         }
      });

      const catCopy = this.state.categories.map((cat) => {
         if (cat.name === key) {
            return {
               name: cat.name,
               active: true,
               group: cat.group,
            };
         } else {
            return {
               name: cat.name,
               active: false,
               group: cat.group,
            };
         }
      });

      this.setState({
         filtered: filterCopy,
         categories: catCopy,
      });
   };

   clearFilters = () => {
      const copyCateg = this.state.categories.map((cat) => {
         return {
            name: cat.name,
            active: false,
            group: cat.group,
         };
      });
      this.setState({
         categories: copyCateg,
         filtered: this.state.writing,
      });
   };

   render() {
      return (
         <>
            <NextSeo
               title="Notes"
               description="Writings by Nikhil"
               canonical="https://nikhilvs.com/notes"
            />
            <HeaderBanner title="Notes" />

            <Container>
               <div className={styles['writing-container']}>
                  <div className={styles['writings-grid']}>
                     {this.state.filtered
                        .sort((a, b) => new Date(b.date) - new Date(a.date))
                        .map((writing, i) => (
                           <BlogTile
                              image={false}
                              blogPage={true}
                              key={i}
                              writing={writing}
                           />
                        ))}
                  </div>

                  <div className={styles.sidebar}>
                     <div className={styles['sidebar-group']}>
                        <div className={styles.title}>Category</div>
                        {this.state.categories
                           .filter((x) => x.group === 'category')
                           .map((x, i) => {
                              return (
                                 <div
                                    key={i}
                                    onClick={() =>
                                       this.handleClick('category', x.name)
                                    }
                                    className={cx(styles.item, {
                                       [styles.selected]: x.active,
                                    })}
                                 >
                                    &mdash; {x.name}
                                 </div>
                              );
                           })}
                     </div>
                     <div className={styles['sidebar-group']}>
                        <div className={styles.title}>Date</div>
                        {this.state.categories
                           .filter((x) => x.group === 'date')
                           .sort((a, b) => new Date(b.date) - new Date(a.date))
                           .map((x, i) => {
                              return (
                                 <div
                                    onClick={() =>
                                       this.handleClick('date', x.name)
                                    }
                                    key={i}
                                    className={cx(styles.item, {
                                       [styles.selected]: x.active,
                                    })}
                                 >
                                    &mdash; {x.name}
                                 </div>
                              );
                           })}
                     </div>
                     {this.state.categories.filter((x) => x.active).length >
                        0 && (
                        <Button
                           color="light"
                           onClick={this.clearFilters}
                           text="&#10005; Clear"
                        />
                     )}
                  </div>
               </div>
            </Container>
         </>
      );
   }
}
