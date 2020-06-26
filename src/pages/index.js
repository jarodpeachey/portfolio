import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
import Layout from '../components/layout';
import SubTitle from '../system-components/SubTitle';
import Paragraph from '../system-components/Paragraph';
import Input from '../system-components/Input';
import Flex from '../system-components/Flex';
import Collapse from '../system-components/Collapse';
import Text from '../system-components/Text';
import TextArea from '../system-components/TextArea';

const App = ({}) => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [messageError, setMessageError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const onEmailInputChange = (e) => {
    setEmail(e.target.value);

    const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (regex.test(e.target.value)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const onNameInputChange = (e) => {
    setName(e.target.value);
  };

  const onMessageInputChange = (e) => {
    setMessage(e.target.value);

    setMessageError(false);
  };

  const onSubmit = (e) => {
    console.log(name);
    console.log(message);
    e.preventDefault();
    let body = '';
    let subject = '';

    if (message && email) {
      console.log('No name');
      body = `
        ${message}
      `;

      subject = `Message from ${name || 'website'}`;

      if (typeof window !== 'undefined') {
        window.location.href = `mailto:jwpeachey107@aol.com?subject=${subject}&body=${body}`;
      }
    } else {
      if (message === '') {
        setMessageError(true);
      }
      if (email === '') {
        setEmailError(true);
      }
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Jarod Peachey - Front End Web Developer</title>
      </Helmet>
      <Hero
        background={`linear-gradient(
        to right,
        ${theme.color.primary},
        ${theme.color.secondary}
      )`}
      >
        <Heading type="h1" customStyles={`color: ${theme.color.gray.one};`}>
          Hey 👋 I'm Jarod Peachey.
        </Heading>
        <Heading
          type="h4"
          display="title"
          customStyles={`color: ${theme.color.gray.six}; margin-bottom: 38px;`}
        >
          I build cool websites using cool tech.
        </Heading>
        <Paragraph>
          I'm a software engineer with experience building full-stack
          applications, modern websites and custom REST APIs. I have a passion
          for making websites that are as simple and easy to use as possible,
          without taking away from their functionality.
        </Paragraph>
        <Paragraph className="mb-6">
          I specialize in serverless architecture, headless websites and the
          JAMstack. Every application I build is secure, high-performing and
          easy to maintain.
        </Paragraph>
        <Flex hAlign="start">
          <Button className="mr-2" color="primary" link="#contact">
            Contact Me
          </Button>
          <Button color="primary" variant="plain" link="#projects">
            View My Work
          </Button>
        </Flex>
      </Hero>
      <Section spacing="large">
        <Container customStyles="position: relative;">
          <FontAwesomeIcon
            id="projects"
            icon="flask"
            style={{
              color: `${theme.color.primary}20`,
              fontSize: 280,
              position: 'absolute',
              left: -60,
              top: -100,
            }}
          />
          <Heading display="title" type="h6" color="primary">
            Projects
          </Heading>
          <Heading className="mt-3" type="h2">
            Recent Projects + Websites
          </Heading>
          <Paragraph customStyles="max-width: 769px;">
            I've worked on all kinds of projects and sites, from large-scale
            SPA's, fully-custom APIs, and database integrations to small
            business websites, landing pages and blogs.
          </Paragraph>
          <Row spacing={[24]} breakpoints={[769, 960]}>
            <div widths={[6, 4]}>
              <Info
                color="primary"
                align="left"
                customStyles={`background: ${theme.color.gray.eight}; :hover {box-shadow: 2px 10px 70px -18px ${theme.color.gray.eight};} transition-duration: .15s;`}
                image={<img src={WeVoteImageTwo} />}
              >
                <div className="px-4 py-4 pb-y">
                  <Flex hAlign="start">
                    <Chip color="rgb(65, 90, 153)" className="mr-2">
                      React
                    </Chip>
                    <Chip color="rgb(65, 90, 153)">HTML/CSS</Chip>
                  </Flex>
                </div>
                <div className="p-4 pt-none">
                  <Collapse>
                    <>
                      <Heading
                        type="h3"
                        customStyles={`color: ${theme.color.gray.one};`}
                        className="m-none"
                      >
                        We Vote
                      </Heading>
                      <Text type="span">Software Engineer Intern</Text>
                    </>
                    <>
                      <Paragraph
                        customStyles={`color: ${theme.color.gray.two};`}
                      >
                        At We Vote, I was a front-end engineer responsible for
                        implementing a complete redesign of the website.
                      </Paragraph>
                      <Paragraph
                        customStyles={`color: ${theme.color.gray.two};`}
                      >
                        I updated over 30,000 lines of legacy code and
                        implemented several major new features, such as a
                        friending and sharing system.
                      </Paragraph>
                    </>
                  </Collapse>
                  <Button
                    external
                    link="https://wevote.us"
                    // variant="outlined"
                    color="rgb(65, 90, 153)"
                    customStyles={`
                      // background: none !important;
                      // padding-left: 0 !important;
                    `}
                  >
                    Visit Site
                  </Button>
                </div>
              </Info>
            </div>
            <div widths={[6, 4]}>
              <Info
                color="primary"
                align="left"
                customStyles={`background: ${theme.color.gray.eight}; :hover {box-shadow: 2px 10px 70px -18px ${theme.color.gray.eight};} transition-duration: .15s;`}
                image={<img src={StaticboxImage} />}
              >
                <div className="px-4 py-4 pb-y">
                  <Flex hAlign="start">
                    <Chip color="rgb(23, 88, 209)" className="mr-2">
                      React
                    </Chip>
                    <Chip color="rgb(23, 88, 209)" className="mr-2">
                      Gatsby
                    </Chip>
                    <Chip color="rgb(23, 88, 209)">JAMstack</Chip>
                  </Flex>
                </div>
                <div className="p-4 pt-none">
                  <Collapse>
                    <>
                      <Heading
                        type="h3"
                        customStyles={`color: ${theme.color.gray.one};`}
                        className="m-none"
                      >
                        Staticbox
                      </Heading>
                      <Text type="span">Founder + Developer</Text>
                    </>
                    <>
                      <Paragraph
                        customStyles={`color: ${theme.color.gray.two};`}
                      >
                        Staticbox is a commenting system for static websites. It
                        allows users to create fully custom comment forms and
                        displays.
                      </Paragraph>
                      <Paragraph
                        customStyles={`color: ${theme.color.gray.two};`}
                      >
                        It leverages GraphQL and Apollo to load comments at
                        build time. The result is a commenting system that
                        doesn't add any page bloat!
                      </Paragraph>
                    </>
                  </Collapse>

                  <Button
                    external
                    link="https://staticbox.io"
                    // variant="outlined"
                    color="rgb(23, 88, 209)"
                    customStyles={`
                      // background: none !important;
                      // padding-left: 0 !important;
                    `}
                  >
                    Visit Site
                  </Button>
                </div>
              </Info>
            </div>
            <div widths={[6, 4]}>
              <Info
                color="primary"
                align="left"
                customStyles={`background: ${theme.color.gray.eight}; :hover {box-shadow: 2px 10px 70px -18px ${theme.color.gray.eight};} transition-duration: .15s;`}
                image={<img src={JellyImage} />}
              >
                <div className="px-4 py-4 pb-y">
                  <Flex hAlign="start">
                    <Chip color="#b4267c" className="mr-2">
                      React
                    </Chip>
                    <Chip color="#b4267c" className="mr-2">
                      Gatsby
                    </Chip>
                    <Chip color="#b4267c">JAMstack</Chip>
                  </Flex>
                </div>
                <div className="p-4 pt-none">
                  <Collapse>
                    <>
                      <Heading
                        type="h3"
                        customStyles={`color: ${theme.color.gray.one};`}
                        className="m-none"
                      >
                        Staticbox
                      </Heading>
                      <Text type="span">Founder + Developer</Text>
                    </>
                    <>
                      <Paragraph
                        customStyles={`color: ${theme.color.gray.two};`}
                      >
                        Staticbox is a commenting system for static websites. It
                        allows users to create fully custom comment forms and
                        displays.
                      </Paragraph>
                      <Paragraph
                        customStyles={`color: ${theme.color.gray.two};`}
                      >
                        It leverages GraphQL and Apollo to load comments at
                        build time. The result is a commenting system that
                        doesn't add any page bloat!
                      </Paragraph>
                    </>
                  </Collapse>
                  <Button
                    external
                    link="https://staticbox.io"
                    // variant="outlined"
                    color="#b4267c"
                    customStyles={`
                      // background: none !important;
                      // padding-left: 0 !important;
                    `}
                  >
                    Visit Site
                  </Button>
                </div>
              </Info>
            </div>
            <div widths={[6, 4]}>
              <Info
                color="primary"
                align="left"
                customStyles={`background: ${theme.color.gray.eight}; :hover {box-shadow: 2px 10px 70px -18px ${theme.color.gray.eight};} transition-duration: .15s;`}
                image={<img src={SystemImage} />}
              >
                <div className="px-4 py-4 pb-y">
                  <Flex hAlign="start">
                    <Chip color="rgb(135, 49, 213)" className="mr-2">
                      React
                    </Chip>
                    <Chip color="rgb(135, 49, 213)" className="mr-2">
                      Gatsby
                    </Chip>
                    <Chip color="rgb(135, 49, 213)">JAMstack</Chip>
                  </Flex>
                </div>
                <div className="p-4 pt-none">
                  <Collapse>
                    <>
                      {' '}
                      <Heading
                        type="h3"
                        customStyles={`color: ${theme.color.gray.one};`}
                        className="m-none"
                      >
                        SystemUI
                      </Heading>
                      <Text type="span">Founder + Developer</Text>
                    </>
                    <>
                      {' '}
                      <Paragraph
                        customStyles={`color: ${theme.color.gray.two};`}
                      >
                        SystemUI is a React UI kit built for lightning-fast
                        development.
                      </Paragraph>
                      <Paragraph
                        customStyles={`color: ${theme.color.gray.two};`}
                      >
                        I used styled-components to handle the styling logic,
                        and have made it as customizable as possible. Future
                        plans include releasing more UI kits to the public.
                      </Paragraph>
                    </>
                  </Collapse>

                  <Button
                    external
                    link="https://system-ui-kit.netlify.app"
                    // variant="outlined"
                    color="rgb(135, 49, 213)"
                    customStyles={`
                      // background: none !important;
                      // padding-left: 0 !important;
                    `}
                  >
                    Visit Site
                  </Button>
                </div>
              </Info>
            </div>
          </Row>
        </Container>
      </Section>
      <Section spacing="large">
        <Container customStyles="position: relative;">
          <FontAwesomeIcon
            id="values"
            icon="award"
            style={{
              color: `${theme.color.secondary}20`,
              fontSize: 280,
              position: 'absolute',
              right: -60,
              top: -100,
            }}
          />
          <Heading display="title" type="h6" color="secondary">
            Values
          </Heading>
          <Heading className="mt-3" type="h2">
            Highest Quality Standards
          </Heading>
          <Paragraph customStyles="max-width: 769px;">
            When I develop websites and applications, I don't cut corners. To
            paraphrase a popular quote: "A website is only as good as it's worst
            part". understand that
          </Paragraph>
          <Row spacing={[24]} breakpoints={[769, 960]}>
            <div widths={[6, 4]}>
              <Info
                variant="filled"
                align="left"
                color="primary"
                icon={<FontAwesomeIcon icon="pencil-ruler" />}
              >
                <Heading
                  type="h3"
                  customStyles={`color: ${theme.color.gray.one};`}
                  className="mb-none mt-4"
                >
                  Modern Design
                </Heading>
                <Paragraph customStyles={`color: ${theme.color.gray.two};`}>
                  My number one priority with every website I build is design. I
                  focus on crafting a clean, modern design that works on every
                  screen size.
                </Paragraph>
              </Info>
            </div>
            <div widths={[6, 4]}>
              <Info
                variant="filled"
                align="left"
                color="primary"
                icon={<FontAwesomeIcon icon="bolt" />}
              >
                <Heading
                  type="h3"
                  customStyles={`color: ${theme.color.gray.one};`}
                  className="mb-none mt-4"
                >
                  Performance
                </Heading>
                <Paragraph customStyles={`color: ${theme.color.gray.two};`}>
                  Performance is at the core of what I do. Faster websites bring
                  more people to your business, which is why I optimize every
                  aspect of your website for performance.
                </Paragraph>
              </Info>
            </div>
            <div widths={[6, 4]}>
              <Info
                variant="filled"
                align="left"
                color="primary"
                icon={<FontAwesomeIcon icon="check" />}
              >
                <Heading
                  type="h3"
                  customStyles={`color: ${theme.color.gray.one};`}
                  className="mb-none mt-4"
                >
                  Code Quality
                </Heading>
                <Paragraph customStyles={`color: ${theme.color.gray.two};`}>
                  Coding isn't just about getting it to work. It's about getting
                  it to work in the most efficient way, and staying up-to-date
                  with today's standards.
                </Paragraph>
              </Info>
            </div>
          </Row>
        </Container>
      </Section>
      <Section spacing="large">
        <Container customStyles="position: relative;">
          <FontAwesomeIcon
            id="contact"
            icon="envelope"
            style={{
              color: `${theme.color.secondary}20`,
              fontSize: 280,
              position: 'absolute',
              left: -60,
              top: -100,
            }}
          />
          <Heading display="title" type="h6" color="secondary">
            Contact Me
          </Heading>
          <Heading className="mt-3" type="h2">
            Get In Touch!
          </Heading>
          <Paragraph customStyles="max-width: 769px;">
            If you've got any questions, or have a website you'd like built, let
            me know! I'll do my best to respond withing 24 hours.
          </Paragraph>
          {emailError && (
            <Alert color="error">Please enter a valid email.</Alert>
          )}
          {messageError && !emailError && (
            <Alert color="error">Please type a message.</Alert>
          )}
          <Row spacing={[12]} breakpoints={[769]}>
            <div widths={[6]}>
              <Input
                onChange={onNameInputChange}
                fullWidth
                size="large"
                placeholder="Name"
              />
            </div>
            <div widths={[6]}>
              <Input
                onChange={onEmailInputChange}
                fullWidth
                size="large"
                type="email"
                placeholder="Email"
              />
            </div>
            <div widths={[12]}>
              <TextArea
                onChange={onMessageInputChange}
                fullWidth
                size="large"
                placeholder="Message"
              />
            </div>
            <div widths={[12]}>
              <Button color="secondary" onClick={onSubmit}>
                Submit
              </Button>
            </div>
          </Row>
        </Container>
      </Section>
    </Layout>
  );
};

export default App;
