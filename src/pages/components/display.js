import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Hero from '../../system-components/Hero';
import Section from '../../system-components/Section';
import Button from '../../system-components/Button';
import Row from '../../system-components/Row';
import Heading from '../../system-components/Heading';
import Alert from '../../system-components/Alert';
import Chip from '../../system-components/Chip';
import Container from '../../system-components/Container';
import Notification from '../../system-components/Notification';
import Layout from '../../components/layout';
import { theme } from '../../components/theme';
import SubTitle from '../../system-components/SubTitle';
import Paragraph from '../../system-components/Paragraph';

const Display = ({}) => {
  const [showNotificationOne, setShowNotificationOne] = useState(false);
  const [showNotificationTwo, setShowNotificationTwo] = useState(false);
  const [showNotificationThree, setShowNotificationThree] = useState(false);
  const [showNotificationFour, setShowNotificationFour] = useState(false);
  const [showNotificationFive, setShowNotificationFive] = useState(false);

  return (
    <Layout>
      <Helmet>
        <title>Display Components - System UI Kit</title>
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
            Display Components
          </Heading>
          <SubTitle type="h4" background="dark">
            Display components allow you to display information to a user in a
            prominent location.
          </SubTitle>
        </div>
      </Hero>
      <Section spacing="small">
        <Container>
          <Heading type="h2" className="m-none">
            Alert
          </Heading>
          <Alert color="primary">Default</Alert>
          <Alert color="primary" variant="light">
            Light
          </Alert>
          <Alert
            icon={<FontAwesomeIcon icon="bell" />}
            color="primary"
            variant="light"
          >
            With icon
          </Alert>
          <Alert close color="primary">
            With close button
          </Alert>
          <br />
          {/* <Heading type="h4" className="mb-none">Size</Heading>
        <Paragraph className="mt-2">
          The size prop is used to change the size of a button.
        </Paragraph>
        <Button
          className="mr-2" color="primary" size="large">
          Large
        </Button>
        <Button
          className="mr-2" color="primary">Default</Button>
        <Button
          className="mr-2" color="primary" size="small">
          Small
        </Button>
        <br />
        <br /> */}
          <Heading type="h4" className="mb-none">
            Color
          </Heading>
          <Paragraph p>
            The color prop is used to change the color of an alert.
          </Paragraph>
          <Row spacing={[14, 0]} breakpoints={[769]}>
            <div widths={[6]}>
              <Alert icon={<FontAwesomeIcon icon="bell" />}>Default</Alert>
              <Alert icon={<FontAwesomeIcon icon="bell" />} variant="light">
                Default
              </Alert>
            </div>
            <div widths={[6]}>
              <Alert icon={<FontAwesomeIcon icon="heart" />} color="primary">
                Primary
              </Alert>
              <Alert
                icon={<FontAwesomeIcon icon="heart" />}
                color="primary"
                variant="light"
              >
                Primary
              </Alert>
            </div>
            <div widths={[6]}>
              <Alert icon={<FontAwesomeIcon icon="globe" />} color="secondary">
                Secondary
              </Alert>
              <Alert
                icon={<FontAwesomeIcon icon="globe" />}
                color="secondary"
                variant="light"
              >
                Secondary
              </Alert>
            </div>
            <div widths={[6]}>
              <Alert icon={<FontAwesomeIcon icon="check" />} color="success">
                Success
              </Alert>
              <Alert
                icon={<FontAwesomeIcon icon="check" />}
                color="success"
                variant="light"
              >
                Success
              </Alert>
            </div>
            <div widths={[6]}>
              <Alert
                icon={<FontAwesomeIcon icon="exclamation-circle" />}
                color="error"
              >
                Error
              </Alert>
              <Alert
                icon={<FontAwesomeIcon icon="exclamation-circle" />}
                color="error"
                variant="light"
              >
                Error
              </Alert>
            </div>
          </Row>
        </Container>
      </Section>
      <Section spacing="small">
        <Container>
          <Heading type="h2" className="m-none">
            Notification
          </Heading>
          <Paragraph>
            The Notification element allows you to display a notification that
            disappears after a certain amount of time.
          </Paragraph>
          <Button
            className="mr-2"
            onClick={() => {
              setShowNotificationOne(true);
              setTimeout(() => {
                setShowNotificationOne(false);
              }, 2500);
            }}
          >
            Open
          </Button>
          <Button
            className="mr-2"
            color="primary"
            onClick={() => {
              setShowNotificationTwo(true);
              setTimeout(() => {
                setShowNotificationTwo(false);
              }, 2500);
            }}
          >
            Open Primary
          </Button>
          <Button
            className="mr-2"
            color="secondary"
            onClick={() => {
              setShowNotificationThree(true);
              setTimeout(() => {
                setShowNotificationThree(false);
              }, 2500);
            }}
          >
            Open Secondary
          </Button>
          <Button
            className="mr-2"
            color="success"
            onClick={() => {
              setShowNotificationFour(true);
              setTimeout(() => {
                setShowNotificationFour(false);
              }, 2500);
            }}
          >
            Open Success
          </Button>
          <Button
            className="mr-2"
            color="error"
            onClick={() => {
              setShowNotificationFive(true);
              setTimeout(() => {
                setShowNotificationFive(false);
              }, 2500);
            }}
          >
            Open Error
          </Button>
          {showNotificationOne && <Notification>A notification</Notification>}
          {showNotificationTwo && (
            <Notification color="primary">
              A notification, in the primary color.
            </Notification>
          )}
          {showNotificationThree && (
            <Notification color="secondary">Some information</Notification>
          )}
          {showNotificationFour && (
            <Notification color="success">Yay! You did it!</Notification>
          )}
          {showNotificationFive && (
            <Notification color="error">Something went wrong.</Notification>
          )}
        </Container>
      </Section>
      <Section spacing="small">
        <Container>
          <Heading type="h2" className="m-none">
            Chip
          </Heading>
          <Chip>Default</Chip>
          <Chip color="primary">Primary</Chip>
          <Chip color="secondary">Secondary</Chip>
          <Chip color="success">Success</Chip>
          <Chip color="error">Error</Chip>
        </Container>
      </Section>
    </Layout>
  );
};

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

export default Display;
