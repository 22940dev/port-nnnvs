import React from 'react';
import styles from './Input.module.scss';

export default class Input extends React.Component {
   render() {
      const style = {};

      if (this.props.align === 'center') {
         style['textAlign'] = 'center';
      }
      return (
         <input
            className={styles.input}
            style={style}
            type="text"
            value={this.props.value}
            onChange={this.props.onChange}
            onKeyPress={this.props.onKeyPress}
            id={this.props.id}
         />
      );
   }
}
