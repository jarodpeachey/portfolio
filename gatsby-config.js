module.exports = {
  siteMetadata: {
    title: 'Jarod Peachey - Front End Web Developer',
    description:
      'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    defaultTitle: 'Jarod Peachey - Front End Web Developer',
    defaultDescription:
      'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    baseUrl: 'https://jarodpeachey.netlify.app',
    siteUrl: 'https://jarodpeachey.netlify.app',
    author: '@jarod_peachey',
    socials: {
      twitter: `https://twitter.com/jarod_peachey`,
      github: `https://github.com/jarodpeachey`,
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-cosmicjs',
      options: {
        bucketSlug: 'jarod-peachey', // Bucket Slug
        objectTypes: ['posts', 'categories'], // List of the Object Types you want to be able to request from Gatsby.
        apiAccess: {
          read_key: 'y9MJMHRBeMY6UcosWHR0rDonh03K09ObvD6y7L3sFGTLpcDpZo',
        },
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        // icon: `src/images/system.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
