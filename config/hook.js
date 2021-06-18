module.exports = ({ env }) => ({
    settings: {
      // ...
      algolia: {
        enabled: true,
        applicationId: '2E9QVE12M4',
        apiKey: '84981aa38685e045bf4206c7c60dc0b6',
        debug: true              // default: false
        //prefix: 'my_own_prefix'   // default: Strapi environment (strapi.config.environment)
      },
    }
  });