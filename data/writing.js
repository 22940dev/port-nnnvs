import { config as introMapDataVizDesign } from '../pages/writing/map-data-viz-design';
import { config as seattleJSIsolineRouting } from '../pages/writing/seattle-js-isoline-routing';
import { config as JSConfAsia } from '../pages/writing/jsconf-asia';
import { config as yearInReview2019 } from '../pages/writing/year-in-review-2019';
import { config as instragramDMRedesign } from '../pages/writing/instagram-dm-redesign';

const writing = [
   instragramDMRedesign,
   yearInReview2019,
   {
      title: 'Introducing harp.gl – 3D vector maps for the web',
      description:
         "When we build products at HERE, we don't want to just provide you with advanced tools, but also let you make them your own. Today we’re excited to launch the beta release of harp.gl, a new open source 3D web map renderer.",
      date: '6/21/2019',
      external: true,
      url:
         'https://developer.here.com/blog/introducing-harp.gl-3d-vector-maps-for-the-web',
      categories: ['Code', 'Maps', 'Work', 'Data Viz'],
      link_text: 'heredev',
   },
   JSConfAsia,
   seattleJSIsolineRouting,

   {
      title: 'Interactive Isoline Grid with HERE + Leaflet + React',
      description:
         "The HERE Routing API Isoline feature is great for calculating the area than can be reaching by traveling for a certain time or distance. A map isoline isn't just a normal circular radius, it is a radius calculated using the road network. For example, the following use cases can be solved with isoline routing:",
      date: '1/16/2019',
      external: true,
      img: 'isoline-grid.gif',
      url:
         'https://developer.here.com/blog/interactive-isoline-grid-with-here-react-leaflet',
      categories: ['Code', 'Maps'],
      link_text: 'heredev',
      featured: false,
   },
   introMapDataVizDesign,
   {
      title: 'This holiday, use your mapping skills to help others',
      description:
         "What if a map doesn't just get you around, but also helps you to help others? As a location platform and mapping company, we’re constantly searching for ways we can use our tech to improve the quality of life for everyone. One of the key values of HERE is giving back and we felt that this season is a good time to bring in our expertise in map making to let you help your local communities.",
      date: '12/12/2018',
      external: true,
      url:
         'https://developer.here.com/blog/holiday-mapping-for-non-profits-with-xyz',
      categories: ['Code', 'Maps'],
      link_text: 'heredev',
   },
   {
      title: 'Location-aware Snapchat stickers with Snap Kit + HERE',
      description:
         'Earlier this month, Snap released its developer kit, allowing developers to harness some of Snapchat\'s features and content. Snap Kit enables developers to include a "Login with Snapchat" button at login, send content to the Snapchat camera, display public Snapchat Stories outside the app, and use Bitmoji outside the app.',
      date: '6/27/2018',
      external: true,
      url: 'https://developer.here.com/blog/here-maps-snap-kit',
      categories: ['Code', 'Maps'],
      link_text: 'heredev',
   },
   {
      title: 'Creating a location-aware chatbot with HERE & Twilio',
      description:
         'Chatbots are all the hype these days. You can use chatbots to stay updated with current events, order a ride sharing vehicle, or even schedule an appointment. But have you ever considered building your own chatbot?',
      date: '12/04/2017',
      external: true,
      url:
         'https://developer.here.com/blog/creating-a-location-aware-chatbot-with-here-twilio',
      categories: ['Code', 'Maps'],
      link_text: 'heredev',
   },
];

export default writing;
