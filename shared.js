import React from 'react';

const monthNames = [
   'January',
   'February',
   'March',
   'April',
   'May',
   'June',
   'July',
   'August',
   'September',
   'October',
   'November',
   'December',
];

const capitalize = (e) => e.charAt(0).toUpperCase() + e.slice(1);

// class GoogleAnalytics extends React.Component {
//    componentWillUpdate({ location, history }) {
//       const gtag = window.gtag;

//       if (location.pathname === this.props.location.pathname) {
//          // don't log identical link clicks (nav links likely)
//          return;
//       }

//       if (history.action === 'PUSH' && typeof gtag === 'function') {
//          gtag('config', 'UA-103633990-1', {
//             page_title: document.title,
//             page_location: window.location.href,
//             page_path: location.pathname,
//          });
//       }
//    }

//    render() {
//       return null;
//    }
// }

// const ga = withRouter(GoogleAnalytics);

export { monthNames, capitalize };
