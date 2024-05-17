// import React, { useContext, useEffect, useState } from 'react';
// import { Link, graphql } from 'gatsby';
// import ReactMarkdown from 'react-markdown';
// import styled, { css } from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import {
//   faCheck,
//   faUser,
//   faCalendar,
//   faCommentAlt,
//   faArrowUp,
// } from '@fortawesome/free-solid-svg-icons';
// import { ThemeContext } from '../components/theme';
// import { Helmet } from 'react-helmet';
// import SEO from '../components/SEO';

// library.add(faCheck, faUser, faCalendar, faCommentAlt, faArrowUp);

// const PostTemplate = ({ data, pageContext, location }) => {
//   const { category, posts } = data;
//   const theme = useContext(ThemeContext);

//   return (
//     // <Layout>
//     {
//       /* <SEO
//         title={`${category.title} Posts - Five Minute Developer`}
//         description={`Web development posts about ${category.title}`}
//       />
//       <HeroWrapper
//         color={
//           category.metadata && category.metadata.color
//             ? category.metadata.color
//             : theme.color.primary.main
//         }
//       >
//         <HeroTitle>{category.title}</HeroTitle>
//       </HeroWrapper>
//       <Section verticalPadding>
//         <h1>Latest Posts</h1>
//         <Posts
//           color={
//             category.metadata && category.metadata.color
//               ? category.metadata.color
//               : theme.color.primary.main
//           }
//           list
//           posts={posts.edges}
//         />
//       </Section> */
//     }
//     // </Layout>
//   );
// };

// const HeroWrapper = styled.div`
//   height: 225px;
//   width: 100%;
//   position: relative;
//   margin-top: -94px;
//   overflow: hidden;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding-top: 53px;
//   color: white;
//   left: 0;
//   background: ${(props) => props.theme.color.gray.eleven};
//   background: linear-gradient(
//     160deg,
//     ${(props) => props.theme.color.primary.main} 0%,
//     ${(props) => props.theme.color.primary.lighter} 100%
//   );
// `;

// const HeroTitle = styled.h1`
//   color: white !important;
//   // text-transform: uppercase;
//   // font-family: Montserrat;
//   font-family: Roboto Mono !important;
//   margin: 0 auto;
//   padding-bottom: 16px;
//   margin-bottom: -48px;
//   font-size: 48px;
//   position: relative;
//   max-width: 769px;
//   ::after {
//     content: '';
//     // position: absolute;
//     // display: block;
//     width: 70%;
//     height: 3px;
//     // background: white;
//     background: black;
//     left: 15%;
//     bottom: 0;
//   }
// `;

// export default PostTemplate;

// export const categoryQuery = graphql`
//   query BlogPostsByCategory($category: String!) {
//     posts: allCosmicjsPosts(
//       filter: {
//         metadata: { categories: { elemMatch: { slug: { eq: $category } } } }
//       }
//     ) {
//       edges {
//         node {
//           slug
//           metadata {
//             categories {
//               title
//               slug
//             }
//             description
//             image {
//               url
//             }
//             markdown_content
//           }
//           title
//           published_at(formatString: "MM/DD/YYYY")
//           content
//         }
//       }
//     }
//     category: cosmicjsCategories(slug: { eq: $category }) {
//       title
//       slug
//       metadata {
//         color
//       }
//     }
//   }
// `;
