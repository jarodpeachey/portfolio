require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Jarod Peachey - Front End Web Developer',
    description:
      'Front end web developer and designer creating websites with the JAMstack and Javascript.',
    defaultTitle: 'Jarod Peachey - Front End Web Developer',
    defaultDescription:
      'Front end web developer and designer creating websites with the JAMstack and Javascript.',
    baseUrl: 'https://jarodpeachey.netlify.app',
    siteUrl: 'https://jarodpeachey.netlify.app',
    author: '@jarodpeachey',
    socials: {
      twitter: `https://twitter.com/jarodpeachey`,
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
    // 'gatsby-transformer-sharp',
    // 'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-zopfli",
    },
  ],
};
