import React from 'react';
// import './Socials.scss';

const Socials = ({ margin }) => {
   const style = {};
   if (margin) {
      style['margin'] = '20px';
      style['animationName'] = 'socials';
   } else {
      style['opacity'] = 1;
   }
   return (
      <div className="socials" style={style}>
         <a
            aria-label="Twitter"
            href="https://twitter.com/nnnnvs"
            className="icon"
         >
            <i className="fa fa-twitter" aria-hidden="true" />
         </a>
         <a
            aria-label="Email"
            href="mailto:nikhilvs999@gmail.com"
            className="icon"
         >
            <i className="fa fa-envelope" aria-hidden="true" />
         </a>
         <a
            aria-label="LinkedIn"
            href="https://linkedin.com/in/nikhilvinaysharma"
            className="icon"
         >
            <i className="fa fa-linkedin" aria-hidden="true" />
         </a>
         <a
            aria-label="Github"
            href="https://github.com/nnnvs"
            className="icon"
         >
            <i className="fa fa-github" aria-hidden="true" />
         </a>
         <a
            aria-label="Instagram"
            href="https://instagram.com/nikhilvinaysharma"
            className="icon"
         >
            <i className="fa fa-instagram" aria-hidden="true" />
         </a>
         <a
            aria-label="Behance"
            href="http://behance.net/envy_designs"
            className="icon"
         >
            <i className="fa fa-behance" aria-hidden="true" />
         </a>
      </div>
   );
};

export default Socials;
