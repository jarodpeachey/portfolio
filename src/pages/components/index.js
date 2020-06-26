import React, { useState } from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { theme } from '../../components/theme';
import Hero from '../../system-components/Hero';
import Section from '../../system-components/Section';
import Button from '../../system-components/Button';
import Row from '../../system-components/Row';
import Heading from '../../system-components/Heading';
import Info from '../../system-components/Info';
import Container from '../../system-components/Container';
import Layout from '../../components/layout';
import SubTitle from '../../system-components/SubTitle';
import Paragraph from '../../system-components/Paragraph';

const Components = () => (
  <Layout>
    <Helmet>
      <title>Components - System UI Kit</title>
    </Helmet>
    <Hero
      background={`linear-gradient(
        to right,
        ${theme.color.primary},
        ${theme.color.secondary}
      )`}
    >
      <div style={{ textAlign: 'center' }}>
        <Heading type="h1" background="dark" className="m-none">
          Components
        </Heading>
        <SubTitle type="h4" background="dark">
          Boxes, buttons, inputs, alerts and more!
        </SubTitle>
      </div>
    </Hero>
    <Section>
      <Container>
        <Heading type="h2" className="mt-none">
          Components List
        </Heading>
        <Row spacing={[24, 12]} breakpoints={[769, 960]}>
          <div widths={[6, 4]}>
            <Info
              variant="light"
              color="primary"
              title="Layout"
              icon={<FontAwesomeIcon icon="user" />}
            >
              <Paragraph>
                Layout components make it easy for you to create responsive
                websites, grid systems and more.
              </Paragraph>
              <Button link="/components/layout" color="primary">
                See All
              </Button>
            </Info>
          </div>
          <div widths={[6, 4]}>
            <Info
              variant="light"
              color="secondary"
              title="Input"
              icon={<FontAwesomeIcon icon="user" />}
            >
              <Paragraph>
                Inputs allow users to interact with your website. This includes
                buttons, text fields, checkboxes and more.
              </Paragraph>
              <Button link="/components/inputs" color="secondary">
                See All
              </Button>
            </Info>
          </div>
          <div widths={[6, 4]}>
            <Info
              variant="light"
              color="success"
              title="Display"
              icon={<FontAwesomeIcon icon="user" />}
            >
              <Paragraph>
                Display elements are used to display information to users in a
                prominent fashion. This includes alerts, notifications, chips
                and more.
              </Paragraph>
              <Button link="/components/display" color="success">
                See All
              </Button>
            </Info>
          </div>
        </Row>
      </Container>
    </Section>
  </Layout>
);

const Demo = styled.div`
  width: 100%;
  padding: 16px;
  text-align: center;
  border-radius: 3px;
  color: white !important;
  * {
    color: white !important;
  }
  background: ${(props) => props.theme.color.primary};
`;

export default Components;