import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';

// function importAll(r) {
//     let images = {};
//     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images;
// }
      
// const images2 = importAll(require.context('../../data/design/', false, /\.(png|jpe?g|svg)$/));

// const Images = [{
// 	        src: require('../HeaderBanner/nikhilvinaysharma.png'),
// 	        thumbnail: require('../HeaderBanner/nikhilvinaysharma.png'),
// 	        // thumbnailWidth: 320,
// 	        // thumbnailHeight: 174,
// 	        caption: "After Rain (Jeshu John - designerspics.com)"
// 				},
// 				{
// 	        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
// 	        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
// 	        // thumbnailWidth: 320,
// 	        // thumbnailHeight: 212,
// 	        caption: "Boats (Jeshu John - designerspics.com)"
// 				},

// 				{
// 	        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
// 	        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
// 	        // thumbnailWidth: 320,
// 	        // thumbnailHeight: 212
// 				}]

const Images = [{src: require('../../data/design/Clocktower555.jpg'),
thumbnail: require('../../data/design/Clocktower555.jpg')},

{src: require('../../data/design/DSC_0352_edit.jpg'),
thumbnail: require('../../data/design/DSC_0352_edit.jpg')},

{src: require('../../data/design/IMG_3586_e.jpg'),
thumbnail: require('../../data/design/IMG_3586_e.jpg')},

{src: require('../../data/design/IMG_8548_edit.jpg'),
thumbnail: require('../../data/design/IMG_8548_edit.jpg')},

{src: require('../../data/design/Lights Camera Antique.jpg'),
thumbnail: require('../../data/design/Lights Camera Antique.jpg')},

{src: require('../../data/design/Tree.jpg'),
thumbnail: require('../../data/design/Tree.jpg')},

{src: require('../../data/design/auto.jpg'),
thumbnail: require('../../data/design/auto.jpg')},

{src: require('../../data/design/banana.jpg'),
thumbnail: require('../../data/design/banana.jpg')},

{src: require('../../data/design/gateway.jpg'),
thumbnail: require('../../data/design/gateway.jpg')},

{src: require('../../data/design/evil pigeon.jpg'),
thumbnail: require('../../data/design/evil pigeon.jpg')},

{src: require('../../data/design/jaipur.jpg'),
thumbnail: require('../../data/design/jaipur.jpg')},

{src: require('../../data/design/trails_small.jpg'),
thumbnail: require('../../data/design/trails_small.jpg')},

{src: require('../../data/design/yellow palace.jpg'),
thumbnail: require('../../data/design/yellow palace.jpg')},

{src: require('../../data/design/DSC_0348.jpg'),
thumbnail: require('../../data/design/DSC_0348.jpg')},

{src: require('../../data/design/IMG_2676_e.png'),
thumbnail: require('../../data/design/IMG_2676_e.png')},

{src: require('../../data/design/IMG_3635_e.jpg'),
thumbnail: require('../../data/design/IMG_3635_e.jpg')
// thumbnailWidth: 320,
// 	        // thumbnailHeight: 212,
},

{src: require('../../data/design/13561827_1565115150459920_2124565783_n.jpg'),
thumbnail: require('../../data/design/13561827_1565115150459920_2124565783_n.jpg')},

{src: require('../../data/design/13712615_1632639103715986_667988900_n.jpg'),
thumbnail: require('../../data/design/13712615_1632639103715986_667988900_n.jpg')},

{src: require('../../data/design/13774770_1767181543495413_160755803_n.jpg'),
thumbnail: require('../../data/design/13774770_1767181543495413_160755803_n.jpg')},

{src: require('../../data/design/15803552_400320800309884_2478589527321477120_n.jpg'),
thumbnail: require('../../data/design/15803552_400320800309884_2478589527321477120_n.jpg')},

{src: require('../../data/design/17596165_1139442629498845_3460272395233787904_n.jpg'),
thumbnail: require('../../data/design/17596165_1139442629498845_3460272395233787904_n.jpg')},

{src: require('../../data/design/17662712_1831215703795337_1757145917649059840_n.jpg'),
thumbnail: require('../../data/design/17662712_1831215703795337_1757145917649059840_n.jpg')},

{src: require('../../data/design/Its always sunny.jpg'),
thumbnail: require('../../data/design/Its always sunny.jpg')},

{src: require('../../data/design/donut.gif'),
thumbnail: require('../../data/design/donut.gif')},

{src: require('../../data/design/Monk3.jpg'), 
thumbnail: require('../../data/design/Monk3.jpg')}, 

{src: require('../../data/design/Water-hole.jpg'),
thumbnail: require('../../data/design/Water-hole.jpg')},

{src: require('../../data/design/baba_bakchod.jpg'),
thumbnail: require('../../data/design/baba_bakchod.jpg')},

{src: require('../../data/design/chivexp.jpg'),
thumbnail: require('../../data/design/chivexp.jpg')},

{src: require('../../data/design/jaipur over.jpg'),
thumbnail: require('../../data/design/jaipur over.jpg')},

{src: require('../../data/design/smoke and mirrors.jpg'),
thumbnail: require('../../data/design/smoke and mirrors.jpg')},

{src: require('../../data/design/w bits logo bw.jpg'),
thumbnail: require('../../data/design/w bits logo bw.jpg')}
]



export default Images;
