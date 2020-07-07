// const { isFuture } = require('date-fns');
// const { format } = require('date-fns');
const path = require('path');
const fs = require('fs');
const request = require('request');
const { generateImage } = require('./src/utils/generateImage');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      posts: allCosmicjsPosts(filter: { status: { eq: "published" } }) {
        edges {
          node {
            metadata {
              description
              categories {
                title
                slug
              }
              image {
                url
              }
            }
            title
            published_at(formatString: "DD/MM/YYYY")
            content
            status
            slug
          }
        }
      }
      categories: allCosmicjsCategories {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  result.data.posts.edges.forEach(({ node }, index) => {
    const seoImage = generateImage({
      title: node.title,
      description: node.metadata.description,
      imagePath: node.title.toLowerCase().replace(/ /g, '-'),
      url: node.metadata.image.url,
    });

    createPage({
      path: `/blog/${node.slug}`,
      component: path.resolve('./src/templates/post.js'),
      context: {
        slug: node.slug,
        seoImage,
      },
    });
  });

  // result.data.categories.edges.forEach(({ node }, index) => {
  //   const path = `/category/${node.slug}`;

  //   createPage({
  //     path,
  //     component: require.resolve('./src/templates/category.js'),
  //     context: {
  //       category: node.slug,
  //     },
  //   });
  // });
};

// exports.createPages = async ({ graphql, actions }) => {
//   await createBlogPostPages(graphql, actions);
// };
