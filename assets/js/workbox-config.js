module.exports = {
  globDirectory: '../xampp/htdocs/uas_pwa',
  globPatterns: [
    '**/*.{html,json,js,css}'
  ],
  swDest: './sw.js',
  runtimeCaching: [{
    urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
    handler: 'NetworkFirst',
    options: {
      cacheName: 'images',
      expiration: {
        maxEntries: 10,
      },
    },
  }],
};