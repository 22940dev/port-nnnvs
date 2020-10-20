import React from 'react';

const Button = ({ color, text, onClick, href }) => {
   const classes = ['button'];

   if (color === 'dark') {
      classes.push('dark');
   } else if (color === 'light') {
      classes.push('light');
   }

   if (href) {
      classes.push('link');
   }

   if (href) {
      return (
         <a
            target="_blank"
            rel="noopener noreferrer"
            className={classes.join(' ')}
            href={href}
         >
            {text}
         </a>
      );
   } else {
      return (
         <button className={classes.join(' ')} onClick={onClick}>
            {text}
         </button>
      );
   }
};

export default Button;
