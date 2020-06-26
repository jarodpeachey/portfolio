import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Hero from '../../system-components/Hero';
import Section from '../../system-components/Section';
import Button from '../../system-components/Button';
import Row from '../../system-components/Row';
import Alert from '../../system-components/Alert';
import Chip from '../../system-components/Chip';
import Container from '../../system-components/Container';
import Notification from '../../system-components/Notification';
import Layout from '../../components/layout';
import H1 from '../../system-components/H1';
import Heading from '../../system-components/Heading';
import H2 from '../../system-components/H2';
import H3 from '../../system-components/H3';
import H4 from '../../system-components/H4';
import H6 from '../../system-components/H6';
import Paragraph from '../../system-components/Paragraph';
import { theme } from '../../components/theme';
import Code from '../../system-components/Code';
import Hidden from '../../system-components/Hidden';
import Flex from '../../system-components/Flex';
import Text from '../../system-components/Text';
import SubTitle from '../../system-components/SubTitle';

const TypographyComponents = ({}) => {
  const [showNotificationOne, setShowNotificationOne] = useState(false);
  const [showNotificationTwo, setShowNotificationTwo] = useState(false);
  const [showNotificationThree, setShowNotificationThree] = useState(false);
  const [showNotificationFour, setShowNotificationFour] = useState(false);
  const [showNotificationFive, setShowNotificationFive] = useState(false);

  return (
    <Layout>
      <Helmet>
        <title>Typography Components - System UI Kit</title>
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
            Typography Components
          </Heading>
          <SubTitle type="h4" background="dark">
            Typography components allow you to display styled text that fits
            with the theme of your website.
          </SubTitle>
        </div>
      </Hero>
      <Section spacing="small">
        <Container>
          <Heading type="h3" className="mt-none">
            Typography
          </Heading>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <th
                style={{
                  textAlign: 'left',
                  border: `1px solid ${theme.color.gray.eight}`,
                  padding: 16,
                }}
              >
                Tag
              </th>
              <th
                style={{
                  textAlign: 'left',
                  border: `1px solid ${theme.color.gray.eight}`,
                  padding: 16,
                }}
              >
                Example
              </th>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.eight}`,
                    padding: 16,
                  }}
                >
                  H2
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.eight}`,
                    padding: 16,
                  }}
                >
                  <Heading type="h1" className="m-none">
                    Heading One
                  </Heading>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.eight}`,
                    padding: 16,
                  }}
                >
                  H2
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.eight}`,
                    padding: 16,
                  }}
                >
                  <Heading type="h2" className="m-none">
                    Heading Two
                  </Heading>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.eight}`,
                    padding: 16,
                  }}
                >
                  H3
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.eight}`,
                    padding: 16,
                  }}
                >
                  <Heading type="h3" className="m-none">
                    Heading Three
                  </Heading>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.eight}`,
                    padding: 16,
                  }}
                >
                  H4
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.eight}`,
                    padding: 16,
                  }}
                >
                  <Heading type="h4" className="m-none">
                    Heading Four
                  </Heading>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.eight}`,
                    padding: 16,
                  }}
                >
                  H5
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.eight}`,
                    padding: 16,
                  }}
                >
                  <Heading type="h5" className="m-none">
                    Heading Five
                  </Heading>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.eight}`,
                    padding: 16,
                  }}
                >
                  H6
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.eight}`,
                    padding: 16,
                  }}
                >
                  <Heading type="h6" className="m-none">
                    Heading Six
                  </Heading>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.eight}`,
                    padding: 16,
                  }}
                >
                  Subtitle
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.eight}`,
                    padding: 16,
                  }}
                >
                  <SubTitle className="m-none">Default Subtitle</SubTitle>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.eight}`,
                    padding: 16,
                  }}
                >
                  Title
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.eight}`,
                    padding: 16,
                  }}
                >
                  <Heading title type="h5" className="m-none">
                    Title
                  </Heading>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.eight}`,
                    padding: 16,
                  }}
                >
                  Paragraph
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.eight}`,
                    padding: 16,
                  }}
                >
                  <Paragraph className="m-none">
                    This is a default paragraph.
                  </Paragraph>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.eight}`,
                    padding: 16,
                  }}
                >
                  Primary
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.eight}`,
                    padding: 16,
                  }}
                >
                  <Paragraph color="primary" className="m-none">
                    This is a default paragraph.
                  </Paragraph>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.eight}`,
                    padding: 16,
                  }}
                >
                  Secondary
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.eight}`,
                    padding: 16,
                  }}
                >
                  <Paragraph color="secondary" className="m-none">
                    This is a default paragraph.
                  </Paragraph>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.eight}`,
                    padding: 16,
                  }}
                >
                  Success
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.eight}`,
                    padding: 16,
                  }}
                >
                  <Paragraph color="success" className="m-none">
                    This is a default paragraph.
                  </Paragraph>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.eight}`,
                    padding: 16,
                  }}
                >
                  Error
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.eight}`,
                    padding: 16,
                  }}
                >
                  <Paragraph color="error" className="m-none">
                    This is a default paragraph.
                  </Paragraph>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <br />
          <Row spacing={[0, 6]} breakpoints={[769]}>
            <div widths={[2]}>
              <Text display="title" type="small" color="text-three">
                <Text type="strong">Title</Text>
              </Text>
            </div>
            <div widths={[10]}>
              <Heading type="h5" className="m-none" display="title">
                About
              </Heading>
            </div>
          </Row>
          <br />
          <Row spacing={[0, 6]} breakpoints={[769]}>
            <div widths={[2]}>
              <Text display="title" type="small" color="text-three">
                <Text type="strong">Heading</Text>
              </Text>
            </div>
            <div widths={[10]}>
              <Heading type="h2" className="m-none">
                The Future of <Text color="success">React Development</Text>
              </Heading>
            </div>
          </Row>
          <br />
          <Row spacing={[0, 6]} breakpoints={[769]}>
            <div widths={[2]}>
              <Text display="title" type="small" color="text-three">
                <Text type="strong">Subtitle</Text>
              </Text>
            </div>
            <div widths={[10]}>
              <SubTitle className="m-none">
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers. I understand
                culture. I am the nucleus. I think that’s a responsibility that
                I have, to push possibilities, to show people, this is the level
                that things could be at.
              </SubTitle>
            </div>
          </Row>
          <br />
          <Row spacing={[0, 6]} breakpoints={[769]}>
            <div widths={[2]}>
              <Text display="title" type="small" color="text-three">
                <Text type="strong">Paragraph</Text>
              </Text>
            </div>
            <div widths={[10]}>
              <Paragraph className="m-none">
                With System, you'll be able to create a beautiful website with
                no effort at all, allowing you to focus on the important stuff,
                like marketing and developing your product.
              </Paragraph>
            </div>
          </Row>
        </Container>
      </Section>
    </Layout>
  );
};

const Demo = styled.div`
  width: '100%'%;
  padding: 1text-align: center;
  border-radius: 3px;
  color: white !important;
  * {
    color: white !important;
  }
  background: ${(props) => props.theme.color.primary};
`;

export default TypographyComponents;
