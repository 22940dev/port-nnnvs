// next.config.js
const withVideos = require('next-videos');

const withImages = require('next-images');
module.exports = withImages(withVideos());
