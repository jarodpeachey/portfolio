/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description, image, article, slug }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  console.log(image, title);

  const {
    defaultTitle,
    defaultDescription,
    baseUrl,
    author,
  } = site.siteMetadata;

  // const defaultImage = '/images/home.png';

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${image}` || null,
    url: `https://jarodpeachey.netlify.app${pathname}`,
  };

  // `https://${baseUrl}${defaultImage}`

  return (
    <Helmet title={seo.title}>
      <html lang="en" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={image} />

      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {image && <meta property="og:image" content={image} />}

      {/* <meta name="twitter:card" content="summary_large_image" /> */}
      {author && <meta name="twitter:creator" content={author} />}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        baseUrl
        author
      }
    }
  }
`;

export default SEO;
