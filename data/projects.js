//Pages
import { config as covid19 } from '../pages/projects/covid-19/index';
import { config as covid19TravelRestrictions } from '../pages/projects/covid-19-travel-restrictions/index';
import { config as croporama } from '../pages/projects/croporama/index';
import { config as fleetManagement } from '../pages/projects/fleet-management-dashboard/index';
import { config as isolineExplorer } from '../pages/projects/isoline-explorer/index';
import { config as mobilityMap } from '../pages/projects/mobility-map/index';
import { config as popupBikes } from '../pages/projects/popup-bike-lanes/index';

//Img
import flightMapperImg from './img/flightmapper.png';
import bayAreaLargeScaleTraffic from './img/bay-area-large-scale-traffic.png';
import gcfdChatbot from './img/gcfd-chatbot.png';
import bostonLiquor from './img/boston-liquor.png';
import waruc from './img/waruc.png';
import uberImessage from './img/uber-imesssage-concept.png';
import jasper from './img/jasper.png';
import uwCourseViz from './img/uw-course-viz.png';
const projects = [
   fleetManagement,
   mobilityMap,
   covid19,
   covid19TravelRestrictions,
   {
      title: 'FlightMapper.io',
      description: 'Full stack application to visualize your flight history.',
      external_slug: 'https://flightmapper.io',
      img: flightMapperImg,
      link_text: 'live-project',
      categories: ['Design', 'Code', 'Maps'],
      background: '#14181B',
      external: true,
   },

   popupBikes,
   {
      title: 'Bay Area Large Scale Traffic Simulations',
      description:
         'Origin locations of the 21.6 million trips taken on the Bay Area road network during an average weekday.',
      external_slug: 'https://dbabbs.github.io/traffic',
      img: bayAreaLargeScaleTraffic,
      link_text: 'live-project',
      categories: ['Work', 'Design', 'Code'],
      background: '#EDEDED',
      external: true,
   },
   isolineExplorer,
   {
      title: 'Food Depository Chatbot',
      description:
         'Joint partnership between HERE and the Greater Chicago Food Depository to develop a location-aware chatbot.',
      external_slug:
         'https://360.here.com/connecting-in-need-chicago-residents-to-food-pantries-with-here',
      img: gcfdChatbot,
      link_text: 'blog',
      categories: ['Work', 'Design'],
      background: '#00B1A4',
   },
   {
      title: 'Boston Liquor Licenses',
      description: 'Explore nearby Boston bars within walking distance.',
      external_slug: 'http://dbabbs.github.io/boston-liquor/',
      img: bostonLiquor,
      link_text: 'live-project',
      categories: ['Design', 'Code', 'Data', 'Maps'],
      background: '#DDE1E3',
   },
   {
      title: 'Washington Road Usage Charge',
      description: 'Connected vehicle analytics for mileage detection.',
      external_slug: 'https://github.com/waruc/waruc-ios',
      img: waruc,
      link_text: 'learn',
      categories: ['Design', 'Code', 'Coursework'],
      background: '#201E31',
   },
   croporama,
   {
      title: 'Uber iMessage Concept',
      description: 'Concept for iMessage integration into Uber.',
      external_slug: 'https://dylanbabbs.com/uber-imessage.pdf',
      img: uberImessage,
      link_text: 'presentation',
      categories: ['Design', 'Data', 'Coursework'],
      background: '#9E000D',
   },
   {
      title: 'Jasper Smart Mirror',
      description: 'Smart mirror to assist with wardrobe management.',
      external_slug:
         'https://courses.cs.washington.edu/courses/cse440/17wi/projects/jasper/',
      img: jasper,
      link_text: 'website',
      categories: ['Design', 'Coursework'],
      background: '#000000',
   },
   {
      title: 'UW Course Sequence Explorer',
      description: 'Visual representation of UW course pathways.',
      external_slug: 'http://cse512-16s.github.io/fp-dbabbs-jordanstarkey95/',
      img: uwCourseViz,
      link_text: 'website',
      categories: ['Design', 'Data', 'Coursework'],
      background: '#38249A',
   },
];

export default projects;
