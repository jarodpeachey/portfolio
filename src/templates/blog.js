import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { theme } from '../components/theme';
import Hero from '../system-components/Hero';
import Section from '../system-components/Section';

import Heading from '../system-components/Heading';
import Container from '../system-components/Container';
import Row from '../system-components/Row';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { formatDate } from '../utils/formatDate';
import Text from '../system-components/Text';
import Paragraph from '../system-components/Paragraph';
import { shortenText } from '../utils/shortenText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';

const Blog = ({ pageContext }) => {
  let { group, index, first, last, pageCount } = pageContext;
  const previousUrl = index - 1 === 1 ? '/blog' : `/blog/${index - 1}`;
  const nextUrl = `/blog/${index + 1}`;

  const getPaginationButtons = () => {
    const paginationButtons = [];
    let count = pageCount;

    console.log('Page count: ', pageCount);

    while (count > 0) {
      console.log('Test');
      paginationButtons.push({
        number: count,
        path: count === 1 ? '/blog' : `/blog/${count}`,
      });
      count--;
    }

    paginationButtons.reverse();

    return paginationButtons;
  };

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
        <Heading type="h1" customStyles={`color: ${theme.color.gray.one};`}>
          🧠 Jarod's Brain
        </Heading>
        <Heading
          type="h4"
          display="title"
          customStyles={`color: ${theme.color.gray.six}; margin-bottom: 38px;`}
        >
          A jumbled collection of tips, tricks, bug fixes and random thoughts
          about web development. Shipped directly from Jarod's brain.
        </Heading>
      </Hero>
      <Section
        spacing="sm"
        customStyles={`
          margin-top: -60px;
        `}
      >
        <Container size="lg" customStyles={'position: relative;'}>
          <Heading type="h5" display="title" color="primary">
            Recent
          </Heading>
          <Row spacing={[12]} breakpoints={[769, 1200]}>
            {group.map(({ node }) => (
              <Link
                className="no-styling"
                widths={[6, 4]}
                to={`/blog/${node.slug}`}
              >
                <Card className="dark" key={node.id}>
                  <Heading
                    customStyles={'line-height: 30px !important;'}
                    className="mt-none mb-3"
                    type="h3"
                  >
                    {node.title}
                  </Heading>
                  <Text
                    customStyles={`color: ${theme.color.gray.five} !important;`}
                    type="span"
                  >
                    {formatDate(node.published_at)}
                  </Text>
                  <Paragraph>
                    {shortenText(node.metadata.description, 200)}
                  </Paragraph>
                </Card>
              </Link>
            ))}
          </Row>
          {first ? (
            <PaginationPlaceholder disabled={first}>
              {'<'}
            </PaginationPlaceholder>
          ) : (
            <PaginationButton disabled={first} to={first ? '#' : previousUrl}>
              {'<'}
            </PaginationButton>
          )}

          {getPaginationButtons().map((button) => (
            <PaginationButton
              active={
                button.number === 1
                  ? window.location.pathname === '/blog'
                  : window.location.pathname.includes(button.path)
              }
              to={button.path}
            >
              {button.number}
            </PaginationButton>
          ))}
          {last ? (
            <PaginationPlaceholder disabled={last}>{'>'}</PaginationPlaceholder>
          ) : (
            <PaginationButton disabled={last} to={last ? '#' : nextUrl}>
              {'>'}
            </PaginationButton>
          )}

          {/* <div className="previousLink">
            <NavLink
              test={first}
              url={previousUrl}
              text="Go to Previous Page"
            />
          </div>
          <div className="nextLink">
            <NavLink test={last} url={nextUrl} text="Go to Next Page" />
          </div> */}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
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

const Card = styled.div`
  background: white;
  border-radius: 6px;
  padding: 18px;
  height: 100%;
  @media (min-width: 769px) {
    padding: 24px;
  }
  box-shadow: 8px 8px 35px -20px #000;
`;

const PaginationPlaceholder = styled.div`
  background: ${(props) =>
    props.disabled
      ? `${props.theme.color.gray.eight}40`
      : props.active
      ? props.theme.color.secondary
      : props.theme.color.gray.eight};
  color: ${(props) =>
    props.disabled
      ? props.theme.color.gray.seven
      : props.active
      ? props.theme.color.gray.one
      : props.theme.color.gray.four} !important;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  margin-right: 8px;
  display: inline-flex;
  text-decoration: none;
  border-radius: 999px;
  cursor: ${(props) => (!props.disabled ? 'pointer' : 'initial')};
  :hover {
    color: ${(props) =>
      props.disabled
        ? props.theme.color.gray.seven
        : props.theme.color.gray.one} !important;
    background: ${(props) =>
      props.disabled
        ? `${props.theme.color.gray.eight}40`
        : props.active
        ? props.theme.color.secondary
        : props.theme.color.gray.eight};
  }
`;

const PaginationButton = styled(Link)`
  background: ${(props) =>
    props.disabled
      ? `${props.theme.color.gray.eight}40`
      : props.active
      ? props.theme.color.secondary
      : props.theme.color.gray.eight};
  color: ${(props) =>
    props.disabled
      ? props.theme.color.gray.seven
      : props.active
      ? props.theme.color.gray.one
      : props.theme.color.gray.four} !important;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  margin-right: 8px;
  display: inline-flex;
  text-decoration: none;
  border-radius: 999px;
  cursor: ${(props) => (!props.disabled ? 'pointer' : 'initial')};
  :hover {
    color: ${(props) =>
      props.disabled
        ? props.theme.color.gray.seven
        : props.theme.color.gray.one} !important;
    background: ${(props) =>
      props.disabled
        ? `${props.theme.color.gray.eight}40`
        : props.active
        ? props.theme.color.secondary
        : props.theme.color.gray.eight};
  }
`;

export default Blog;
