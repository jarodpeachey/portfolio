// const { isFuture } = require('date-fns');
// const { format } = require('date-fns');
const path = require('path');
const fs = require('fs');
// exports.onCreatePage = ({ page, actions }) => {
//   const { createPage, deletePage } = actions;
//   deletePage(page)
//   // You can access the variable "house" in your page queries now
//   createPage({
//     ...page,
//     context: {
//       ...page.context,
//       seoImage: `Gryffindor`,
//     },
//   })

//   // result.data.categories.edges.forEach(({ node }, index) => {
//   //   const path = `/category/${node.slug}`;

//   //   createPage({
//   //     path,
//   //     component: require.resolve('./src/templates/category.js'),
//   //     context: {
//   //       category: node.slug,
//   //     },
//   //   });
//   // });
// };
