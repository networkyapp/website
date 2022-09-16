const withImages = require('next-images');

module.exports = withImages({
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    BASE_PATH: process.env.BASE_PATH,
  },
  serverRuntimeConfig: {
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY
  }
});
