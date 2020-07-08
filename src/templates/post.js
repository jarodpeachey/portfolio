import React, { useContext, useEffect, useState } from 'react';
import { Link, graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCheck,
  faUser,
  faCalendar,
  faCommentAlt,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import { formatDate } from '../utils/formatDate';
import SEO from '../components/SEO';
import Button from '../system-components/Button';
import Flex from '../system-components/Flex';
import Paragraph from '../system-components/Paragraph';
import Container from '../system-components/Container';
import Heading from '../system-components/Heading';
import Hero from '../system-components/Hero';
import { theme } from '../components/theme';
import Section from '../system-components/Section';
import Layout from '../components/Layout';
import Text from '../system-components/Text';
import Info from '../system-components/Info';

library.add(faCheck, faUser, faCalendar, faCommentAlt, faArrowUp);

const PostTemplate = ({ data, pageContext, location }) => {
  const { post } = data;

  console.log(pageContext.seoImage);
  console.log(pageContext.seoImage);
  console.log(pageContext.seoImage);
  console.log(pageContext.seoImage);
  console.log(pageContext.seoImage);

  return (
    <Layout>
      <SEO
        title={`${post.title} - Jarod Peachey`}
        description={post.metadata.description}
        image={pageContext.seoImage}
      />
      <Hero
        background={`linear-gradient(
        to right,
        ${theme.color.primary},
        ${theme.color.secondary}
      )`}
      >
        <Container align="left" size="xs" maxWidth={600}>
          <Heading
            className="mb-3"
            type="h1"
            customStyles={`color: ${theme.color.gray.one}; z-index: 1 !important; position: relative;`}
          >
            {post.title}
          </Heading>
          <Text
            customStyles={`z-index: 1 !important; position: relative;`}
            className="mb-3"
            type="div"
          >
            {post.published_at}
          </Text>
          <Text
            customStyles={`z-index: 1 !important; position: relative;`}
            type="div"
          >
            by{' '}
            <a
              className="no-decoration"
              style={{ textDecoration: 'none', color: theme.color.gray.one }}
              href="https://twitter.com/jarod_peachey"
            >
              Jarod Peachey
            </a>
          </Text>
          <Background image={post.metadata.image.url} />
        </Container>
      </Hero>
      <Section spacing="small" customStyles={'padding-top: 0;'}>
        <Container size="lg">
          <Container align="left" customStyles={'position: relative;'}>
            <Card>
              {post.metadata.markdown_content && (
                <div id="post-content" className="dark">
                  <ReactMarkdown source={post.metadata.markdown_content} />
                </div>
              )}
              {!post.metadata.markdown_content && (
                <div
                  id="post-content"
                  className="dark"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              )}
            </Card>
          </Container>
        </Container>
      </Section>
    </Layout>
  );
};

const Card = styled.div`
  background: white;
  border-radius: 6px;
  padding: 48px 16px;
  @media (min-width: 769px) {
    padding: 48px;
  }
  box-shadow: 8px 8px 35px -20px #000;
`;

const Background = styled.div`
  z-index: 0 !important;
  position: absolute !important;
  min-width: 36%;
  width: 100%;
  height: 100%;
  right: -20%;
  max-width: 769px;
  top: 0;
  @media (min-width: 576px) {
    width: 90%;
    right: -10%;
  }
  @media (min-width: 769px) {
    right: -10%;
    top: 5%;
  }
  @media (min-width: 1000px) {
    right: -5%;
    top: 0;
  }
  @media (min-width: 1200px) {
    right: 0%;
    top: 0;
  }
  @media (min-width: 1400px) {
    right: 5%;
    top: 0;
  }
  background: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  ::after {
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    content: '';
    background: #00000060;
    background: radial-gradient(
      circle,
      ${(props) => props.theme.color.gray.nine}10 0%,
      ${(props) => props.theme.color.gray.nine}40 9%,
      ${(props) => props.theme.color.gray.nine}80 23%,
      ${(props) => props.theme.color.gray.nine}cc 49%,
      ${(props) => props.theme.color.gray.nine} 65%
    );
  }
`;

export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    post: cosmicjsPosts(slug: { eq: $slug }) {
      metadata {
        categories {
          title
          slug
        }
        description
        markdown_content
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
`;
