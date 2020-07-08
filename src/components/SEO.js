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

  const {
    defaultTitle,
    defaultDescription,
    baseUrl,
    author,
  } = site.siteMetadata;

  const defaultImage = '/images/jarod-peachey/featured-image.png';

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `https://${baseUrl}${image}` || `https://${baseUrl}${defaultImage}`,
    url: `https://${baseUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title}>
      {/* <html lang="en" />
      <link
        rel="canonical"
        href={`https://jarodpeachey.netlify.com${pathname}`}
      />
      <meta name="description" content={seo.description} /> */}

      {/* <meta name="og:type" content="website" />
      <meta name="og:url" content={seo.url} />
      <meta name="og:description" content={seo.description} /> */}
      <meta name="og:image" content={seo.image} />
      <meta name="image" content={seo.image} />

      {/* <meta name="twitter:widgets:theme" content="light" />
      <meta name="twitter:dnt" content="on" />
      // <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={author || '@jarod_peachey'} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} /> */}
      <meta name="twitter:image" content={seo.image} />
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
