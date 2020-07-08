import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import WeVoteImageTwo from '../images/wevote_two.jpg';
import StaticboxImage from '../images/staticbox.jpg';
import JellyImage from '../images/jelly-development.jpg';
import SystemImage from '../images/system.jpg';
import { theme } from '../components/theme';
import Hero from '../system-components/Hero';
import Section from '../system-components/Section';
import Button from '../system-components/Button';
import Row from '../system-components/Row';

import Heading from '../system-components/Heading';
import Alert from '../system-components/Alert';
import Code from '../system-components/Code';
import Info from '../system-components/Info';
import Container from '../system-components/Container';
import Chip from '../system-components/Chip';
import Layout from '../components/Layout';
import SubTitle from '../system-components/SubTitle';
import Paragraph from '../system-components/Paragraph';
import Input from '../system-components/Input';
import Flex from '../system-components/Flex';
import Collapse from '../system-components/Collapse';
import Text from '../system-components/Text';
import TextArea from '../system-components/TextArea';
import SEO from '../components/SEO';
import { formatDate } from '../utils/formatDate';

const Blog = ({ pageContext }) => {
  const { group, index, first, last, pageCount } = pageContext;
  const previousUrl = index - 1 === 1 ? '/blog' : `/blog/${index - 1}`;
  const nextUrl = `/blog/${index + 1}`;

  return (
    <Layout>
      <SEO
        title="Jarod Peachey - Front End Web Developer"
        description="Modern website solutions built to be blazing fast, extremely secure and simple to manage. Built using React, Gatsby, Netlify, HTML, CSS and the JAMstack."
      />
      <Hero
        background={`linear-gradient(
        to right,
        ${theme.color.primary},
        ${theme.color.secondary}
      )`}
      >
        <Heading type="h1">{pageCount} pages.</Heading>
        <Heading type="h1" customStyles={`color: ${theme.color.gray.one};`}>
          🧠 Jarod's Brain
        </Heading>
        <Heading
          type="h4"
          display="title"
          customStyles={`color: ${theme.color.gray.six}; margin-bottom: 38px;`}
        >
          A jumbled collection of tips, tricks, bug fixes and random thougts
          about web development. Shipped directly from Jarod's brain.
        </Heading>
      </Hero>
      <Section
        spacing="sm"
        customStyles={`
          margin-top: -60px;
        `}
      >
        <Container size="lg">
          <Heading type="h5" display="title" color="primary">
            Recent
          </Heading>
          {group.map(({ node }) => (
            <div key={node.id}>
              <div>{formatDate(node.published_at)}</div>
              <Link to={`/blog/${node.slug}`}>{node.title}</Link>
              <div>{node.metadata.description}</div>
            </div>
          ))}
          <div className="previousLink">
            <NavLink
              test={first}
              url={previousUrl}
              text="Go to Previous Page"
            />
          </div>
          <div className="nextLink">
            <NavLink test={last} url={nextUrl} text="Go to Next Page" />
          </div>
        </Container>
      </Section>
    </Layout>
  );
};

const NavLink = (props) => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>;
  } else {
    return <span>{props.text}</span>;
  }
};

export default Blog;
