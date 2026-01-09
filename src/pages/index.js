import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WeVoteImageTwo from "../images/wevote_two.jpg";
import Project1000Image from "../images/project1000.png";
import GlitterImage from "../images/glitter.png";
import galvastarImage from "../images/galvastar.png";
import JellyImage from "../images/jelly.png";
import MindtrustImage from "../images/mindtrust.png";
import GridImage from "../images/react-tiny-grid.jpg";
import { theme } from "../components/theme";
import Hero from "../system-components/Hero";
import Section from "../system-components/Section";
import Button from "../system-components/Button";
import Row from "../system-components/Row";

import Heading from "../system-components/Heading";
import Alert from "../system-components/Alert";
import Code from "../system-components/Code";
import Info from "../system-components/Info";
import Container from "../system-components/Container";
import Chip from "../system-components/Chip";
import Layout from "../components/Layout";
import SubTitle from "../system-components/SubTitle";
import Paragraph from "../system-components/Paragraph";
import Input from "../system-components/Input";
import Flex from "../system-components/Flex";
import Collapse from "../system-components/Collapse";
import Text from "../system-components/Text";
import TextArea from "../system-components/TextArea";
import SEO from "../components/SEO";

const App = ({}) => {
  // Reusable card style for all cards
  const cardStyle = {
    padding: "16px 20px",
    borderRadius: 4,
    background: "#fff",
    border: "1px solid #e2e8f0",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
    textAlign: "center",
    fontSize: 16,
    fontWeight: 500,
    color: "#000",
    textTransform: "uppercase",
  };
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [messageError, setMessageError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const onEmailInputChange = e => {
    setEmail(e.target.value);

    const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (regex.test(e.target.value)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const onNameInputChange = e => {
    setName(e.target.value);
  };

  const onMessageInputChange = e => {
    setMessage(e.target.value);

    setMessageError(false);
  };

  const onSubmit = e => {
    e.preventDefault();
    let body = "";
    let subject = "";

    if (message && email) {
      body = `
        ${message}
      `;

      subject = `Message from ${name || "website"}`;

      if (typeof window !== "undefined") {
        window.location.href = `mailto:jarodpeachey@gmail.com?subject=${subject}&body=${body}`;
      }
    } else {
      if (message === "") {
        setMessageError(true);
      }
      if (email === "") {
        setEmailError(true);
      }
    }
  };

  // (function () {
  //   window.hyperlogID = '68979bd3-fdef-421a-a33c-6b891d8ebd2d';

  //   let d = document;
  //   let s = d.createElement('script');
  //   s.src = 'https://c.hyperlog.io/l.js';
  //   s.async = 1;
  //   d.getElementsByTagName('head')[0].appendChild(s);
  // })();

  return (
    <Layout>
      <SEO
        title="Jarod Peachey - Front End Web Developer"
        description="Modern website solutions built to be blazing fast, extremely secure and simple to manage. Built using React, Gatsby, Netlify, HTML and CSS"
      />
      <Hero>
        <Heading type="h1" customStyles={{ color: "#000" }}>
          Jarod Peachey
        </Heading>
        <Heading type="h4" display="title" customStyles={{ color: "#000", marginBottom: 38 }}>
          Front-End Developer & Web Designer
        </Heading>
        <Container size="sm" align="left">
          <Paragraph customStyles={{ color: "#000" }}>
            Hey! I'm a front-end developer and web designer who loves building modern, high-performance websites and applications. I work with React,
            JavaScript, and the latest web technologies to turn designs into smooth digital experiences that actually get results.
          </Paragraph>
          <Paragraph className="mb-6" customStyles={{ color: "#000" }}>
            Whether it's responsive interfaces or full web solutions, I bring together technical skills and design sense to create something great. I've also
            got some backend experience, so I can handle full-stack projects when needed.
          </Paragraph>
          <Flex hAlign="start">
            <Button className="mr-2" color="primary" link="#projects">
              My Work
            </Button>
            <Button color="primary" variant="plain" link="#contact">
              Contact Me
            </Button>
          </Flex>
        </Container>
      </Hero>
      <Section spacing="medium">
        <Container>
          <Heading display="title" type="h6" color="secondary" customStyles={{ color: "#000" }}>
            Recent Projects and Websites
          </Heading>
          <Heading className="mt-3" type="h2" customStyles={{ color: "#000" }}>
            My Work
          </Heading>
          <Paragraph customStyles={{ maxWidth: 769, color: "#000" }}>
            My work ranges from full-stack applications, API and authentication, to small business websites, landing pages and blogs.
          </Paragraph>
          <Row spacing={[24]} breakpoints={[769, 1100]}>
            <div widths={[6, 4]}>
              <Info
                color="primary"
                align="left"
                customStyles={{
                  borderRadius: 4,
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
                image={<img src={Project1000Image} />}
              >
                <div className="px-4 py-4 pb-y">
                  <Flex style={{ flexWrap: "wrap" }} hAlign="start">
                    <Chip color="primary" className="mr-2 mb-2">
                      React
                    </Chip>
                    <Chip color="primary" className="mr-2 mb-2">
                      HTML/CSS
                    </Chip>
                    <Chip color="primary" className="mr-2 mb-2">
                      Tailwind
                    </Chip>
                    <Chip color="primary" className="mr-2">
                      Authentication
                    </Chip>
                    <Chip color="primary">API</Chip>
                  </Flex>
                </div>
                <div className="p-4 pt-none">
                  <Collapse>
                    <>
                      <Heading type="h3" customStyles={`color: ${theme.color.gray.one};`} className="m-none">
                        Project 1,000
                      </Heading>
                      <Text type="span">Solo Developer</Text>
                    </>
                    <>
                      <Paragraph customStyles={`color: ${theme.color.gray.three};`}>
                        I designed and built Project 1,000 as a custom workout tracker for myself and my friends. It's built on React, with Supabase for
                        authentication and database functionality.
                      </Paragraph>
                      <Paragraph customStyles={`color: ${theme.color.gray.three};`}>
                        The app is fully-functioning, and allows users to create custom exercises, workout templates, and schedules to help them reach their
                        fitness goals.
                      </Paragraph>
                    </>
                  </Collapse>
                  <Button
                    external
                    link="https://project1000.app"
                    // variant="outlined"
                    color="primary"
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
                customStyles={{
                  borderRadius: 4,
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
                image={<img src={WeVoteImageTwo} />}
              >
                <div className="px-4 py-4 pb-y">
                  <Flex hAlign="start">
                    <Chip color="primary" className="mr-2">
                      React
                    </Chip>
                    <Chip color="primary">HTML/CSS</Chip>
                  </Flex>
                </div>
                <div className="p-4 pt-none">
                  <Collapse>
                    <>
                      <Heading type="h3" customStyles={`color: ${theme.color.gray.one};`} className="m-none">
                        We Vote
                      </Heading>
                      <Text type="span">Software Engineer Intern</Text>
                    </>
                    <>
                      <Paragraph customStyles={`color: ${theme.color.gray.three};`}>
                        At We Vote, I was a front-end engineer responsible for implementing a complete redesign of the website.
                      </Paragraph>
                      <Paragraph customStyles={`color: ${theme.color.gray.three};`}>
                        I updated over 30,000 lines of legacy code and implemented several major new features, such as a friending and sharing system.
                      </Paragraph>
                    </>
                  </Collapse>
                  <Button
                    external
                    link="https://wevote.us"
                    // variant="outlined"
                    color="primary"
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
                customStyles={{
                  borderRadius: 4,
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
                image={<img src={GlitterImage} />}
              >
                <div className="px-4 py-4 pb-y">
                  <Flex hAlign="start">
                    <Chip color="primary" className="mr-2">
                      HTML
                    </Chip>
                    <Chip color="primary" className="mr-2">
                      CSS
                    </Chip>
                    <Chip color="primary">CHROME DEVTOOLS</Chip>
                  </Flex>
                </div>
                <div className="p-4 pt-none">
                  <Collapse>
                    <>
                      <Heading type="h3" customStyles={`color: ${theme.color.gray.one};`} className="m-none">
                        Glitter
                      </Heading>
                      <Text type="span">Developer</Text>
                    </>
                    <>
                      <Paragraph customStyles={`color: ${theme.color.gray.three};`}>
                        Glitter is a Twitter theme customization tool that allows users to create their own Twitter theme
                      </Paragraph>
                      <Paragraph customStyles={`color: ${theme.color.gray.three};`}>
                        It uses local storage to keep track of themes that a user creates and has potential to function on other sites in the future as well.
                      </Paragraph>
                    </>
                  </Collapse>

                  <Button
                    external
                    link="https://get-glitter.netlify.app"
                    // variant="outlined"
                    color="primary"
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
                customStyles={{
                  borderRadius: 4,
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
                image={<img src={JellyImage} />}
              >
                <div className="px-4 py-4 pb-y">
                  <Flex hAlign="start">
                    <Chip color="primary" className="mr-2">
                      React
                    </Chip>
                    <Chip color="primary" className="mr-2">
                      Gatsby
                    </Chip>
                    <Chip color="primary">JAMstack</Chip>
                  </Flex>
                </div>
                <div className="p-4 pt-none">
                  <Collapse>
                    <>
                      <Heading type="h3" customStyles={`color: ${theme.color.gray.one};`} className="m-none">
                        Jelly Development
                      </Heading>
                      <Text type="span">Designer + Developer</Text>
                    </>
                    <>
                      <Paragraph customStyles={`color: ${theme.color.gray.three};`}>
                        I built the website for my web development agency, Jelly Development. I used a clean, modern design with a simple font and colors.
                      </Paragraph>
                      <Paragraph customStyles={`color: ${theme.color.gray.three};`}>
                        I used Gatsby to generate the HTML from React, and deployed the site to Netlify.
                      </Paragraph>
                    </>
                  </Collapse>
                  <Button
                    external
                    link="https://jellydevelopment.com"
                    // variant="outlined"
                    color="primary"
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
                customStyles={{
                  borderRadius: 4,
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
                image={<img src={MindtrustImage} />}
              >
                <div className="px-4 py-4 pb-y">
                  <Flex hAlign="start">
                    <Chip color="primary" className="mr-2">
                      React
                    </Chip>
                    <Chip color="primary" className="mr-2">
                      Gatsby
                    </Chip>
                    <Chip color="primary">JAMstack</Chip>
                  </Flex>
                </div>
                <div className="p-4 pt-none">
                  <Collapse>
                    <>
                      {" "}
                      <Heading type="h3" customStyles={`color: ${theme.color.gray.one};`} className="m-none">
                        MindTrust
                      </Heading>
                      <Text type="span">Front End Developer</Text>
                    </>
                    <>
                      {" "}
                      <Paragraph customStyles={`color: ${theme.color.gray.three};`}>
                        At MindTrust, I was the main developer responsible for developing the new website based off of the designs from the design team.
                      </Paragraph>
                      <Paragraph customStyles={`color: ${theme.color.gray.three};`}>
                        I created a custom CSS framework and used SVG animations to make the site appealing to visitors. I also optimized the performance and
                        accessibility.
                      </Paragraph>
                    </>
                  </Collapse>

                  <Button
                    external
                    link="https://mindtrust.us"
                    // variant="outlined"
                    color="primary"
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
                customStyles={{
                  borderRadius: 4,
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
                image={<img src={GridImage} />}
              >
                <div className="px-4 py-4 pb-y">
                  <Flex hAlign="start">
                    <Chip color="primary" className="mr-2">
                      React
                    </Chip>
                    <Chip color="primary" className="mr-2">
                      Styled Components
                    </Chip>
                  </Flex>
                </div>
                <div className="p-4 pt-none">
                  <Collapse>
                    <>
                      <Heading type="h3" customStyles={`color: ${theme.color.gray.one};`} className="m-none">
                        React Tiny Grid
                      </Heading>
                      <Text type="span">Sole Developer</Text>
                    </>
                    <>
                      <Paragraph customStyles={`color: ${theme.color.gray.three};`}>
                        React Tiny Grid is a grid system built for simplicity and ease of use.
                      </Paragraph>
                      <Paragraph customStyles={`color: ${theme.color.gray.three};`}>
                        I built React Tiny Grid to solve a problem I saw. There were no grid systems for React that weren't super complex and easy to use. I
                        created this grid system to work out-of-the-box, with a few advanced configuration options.
                      </Paragraph>
                    </>
                  </Collapse>

                  <Button
                    external
                    link="https://react-tiny-grid.netlify.app"
                    // variant="outlined"
                    color="primary"
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
      <Section spacing="medium">
        <Container>
          <Heading display="title" type="h6" color="primary" customStyles={{ color: "#000" }}>
            WHAT I DO
          </Heading>
          <Heading className="mt-3" type="h2" customStyles={{ color: "#000" }}>
            My Skills
          </Heading>
          <Row spacing={[24]} breakpoints={[400, 576, 769]}>
            <div
              style={{
                padding: "16px 20px",
                borderRadius: 4,
                background: "#fff",
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                textAlign: "center",
                textTransform: "uppercase",
                padding: "12px 12px",
              }}
              widths={[6, 3, 2]}
            >
              HTML
            </div>
            <div
              style={{
                padding: "16px 20px",
                borderRadius: 4,
                background: "#fff",
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                textAlign: "center",
                textTransform: "uppercase",
                padding: "12px 12px",
              }}
              widths={[6, 3, 2]}
            >
              CSS
            </div>
            <div
              style={{
                padding: "16px 20px",
                borderRadius: 4,
                background: "#fff",
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                textAlign: "center",
                textTransform: "uppercase",
                padding: "12px 12px",
              }}
              widths={[6, 3, 2]}
            >
              Javascript
            </div>
            <div
              style={{
                padding: "16px 20px",
                borderRadius: 4,
                background: "#fff",
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                textAlign: "center",
                textTransform: "uppercase",
                padding: "12px 12px",
              }}
              widths={[6, 3, 2]}
            >
              React
            </div>
            <div
              style={{
                padding: "16px 20px",
                borderRadius: 4,
                background: "#fff",
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                textAlign: "center",
                textTransform: "uppercase",
                padding: "12px 12px",
              }}
              widths={[6, 3, 2]}
            >
              Vue.js
            </div>
            <div
              style={{
                padding: "16px 20px",
                borderRadius: 4,
                background: "#fff",
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                textAlign: "center",
                textTransform: "uppercase",
                padding: "12px 12px",
              }}
              widths={[6, 3, 2]}
            >
              Next.js
            </div>
            <div
              style={{
                padding: "16px 20px",
                borderRadius: 4,
                background: "#fff",
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                textAlign: "center",
                textTransform: "uppercase",
                padding: "12px 12px",
              }}
              widths={[6, 3, 2]}
            >
              Gatsby
            </div>
            <div
              style={{
                padding: "16px 20px",
                borderRadius: 4,
                background: "#fff",
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                textAlign: "center",
                textTransform: "uppercase",
                padding: "12px 12px",
              }}
              widths={[6, 3, 2]}
            >
              GraphQL
            </div>
            <div
              style={{
                padding: "16px 20px",
                borderRadius: 4,
                background: "#fff",
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                textAlign: "center",
                textTransform: "uppercase",
                padding: "12px 12px",
              }}
              widths={[6, 3, 2]}
            >
              PHP
            </div>
            <div
              style={{
                padding: "16px 20px",
                borderRadius: 4,
                background: "#fff",
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                textAlign: "center",
                textTransform: "uppercase",
                padding: "12px 12px",
              }}
              widths={[6, 3, 2]}
            >
              MySQL
            </div>
            <div
              style={{
                padding: "16px 20px",
                borderRadius: 4,
                background: "#fff",
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                textAlign: "center",
                textTransform: "uppercase",
                padding: "12px 12px",
              }}
              widths={[6, 3, 2]}
            >
              Wordpress
            </div>
            <div
              style={{
                padding: "16px 20px",
                borderRadius: 4,
                background: "#fff",
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                textAlign: "center",
                textTransform: "uppercase",
                padding: "12px 12px",
              }}
              widths={[6, 3, 2]}
            >
              Shopify
            </div>
            <div
              style={{
                padding: "16px 20px",
                borderRadius: 4,
                background: "#fff",
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                textAlign: "center",
                textTransform: "uppercase",
                padding: "12px 12px",
              }}
              widths={[6, 3, 2]}
            >
              Tailwind CSS
            </div>
            <div
              style={{
                padding: "16px 20px",
                borderRadius: 4,
                background: "#fff",
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                textAlign: "center",
                textTransform: "uppercase",
                padding: "12px 12px",
              }}
              widths={[6, 3, 2]}
            >
              AJAX/JSON
            </div>
            <div
              style={{
                padding: "16px 20px",
                borderRadius: 4,
                background: "#fff",
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                textAlign: "center",
                textTransform: "uppercase",
                padding: "12px 12px",
              }}
              widths={[6, 3, 2]}
            >
              Stripe
            </div>
            <div
              style={{
                padding: "16px 20px",
                borderRadius: 4,
                background: "#fff",
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                textAlign: "center",
                textTransform: "uppercase",
                padding: "12px 12px",
              }}
              widths={[6, 3, 2]}
            >
              Netlify
            </div>
            <div
              style={{
                padding: "16px 20px",
                borderRadius: 4,
                background: "#fff",
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                textAlign: "center",
                textTransform: "uppercase",
                padding: "12px 12px",
              }}
              widths={[6, 3, 2]}
            >
              Serverless
            </div>
          </Row>
        </Container>
      </Section>
      <Section spacing="medium">
        <Container>
          <Heading display="title" type="h6" color="primary" customStyles={{ color: "#000" }}>
            Values
          </Heading>
          <Heading className="mt-3" type="h2" customStyles={{ color: "#000" }}>
            Why Choose Me?
          </Heading>
          <Paragraph customStyles={{ maxWidth: 769, color: "#000" }}>
            When I develop websites and applications, I don't cut corners. Every line of code I write is high-quality and works best for your website.
          </Paragraph>
          <Row spacing={[24]} breakpoints={[769, 960]}>
            <div widths={[6, 4]}>
              <Info
                customStyles={{
                  padding: "16px 20px",
                  paddingTop: 28,
                  borderRadius: 4,
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
                variant="filled"
                align="left"
                color="primary"
                icon={<FontAwesomeIcon icon="pencil-ruler" style={{ color: "#000" }} />}
              >
                <Heading type="h3" customStyles={`color: ${theme.color.gray.one};`} className="mb-none mt-4">
                  Responsive Design
                </Heading>
                <Paragraph customStyles={`color: ${theme.color.gray.three};`}>
                  My number one priority with every website I build is design. I focus on crafting a clean, modern design that works on every screen size.
                </Paragraph>
              </Info>
            </div>
            <div widths={[6, 4]}>
              <Info
                customStyles={{
                  padding: "16px 20px",
                  paddingTop: 28,
                  borderRadius: 4,
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
                variant="filled"
                align="left"
                color="primary"
                icon={<FontAwesomeIcon icon="bolt" style={{ color: "#000" }} />}
              >
                <Heading type="h3" customStyles={`color: ${theme.color.gray.one};`} className="mb-none mt-4">
                  Performance
                </Heading>
                <Paragraph customStyles={`color: ${theme.color.gray.three};`}>
                  Performance is at the core of what I do. Faster websites bring more people to your business, which is why I optimize every aspect of your
                  website for performance.
                </Paragraph>
              </Info>
            </div>
            <div widths={[6, 4]}>
              <Info
                customStyles={{
                  padding: "16px 20px",
                  paddingTop: 28,
                  borderRadius: 4,
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
                variant="filled"
                align="left"
                color="primary"
                icon={<FontAwesomeIcon icon="check" style={{ color: "#000" }} />}
              >
                <Heading type="h3" customStyles={`color: ${theme.color.gray.one};`} className="mb-none mt-4">
                  Code Quality
                </Heading>
                <Paragraph customStyles={`color: ${theme.color.gray.three};`}>
                  Coding isn't just about getting it to work. It's about getting it to work in the most efficient way, and staying up-to-date with today's
                  standards.
                </Paragraph>
              </Info>
            </div>
          </Row>
        </Container>
      </Section>
      <Section spacing="medium">
        <Container>
          <Heading display="title" type="h6" color="secondary" customStyles={{ color: "#000" }}>
            Contact Me
          </Heading>
          <Heading className="mt-3" type="h2" customStyles={{ color: "#000" }}>
            Get In Touch!
          </Heading>
          <Paragraph customStyles={{ maxWidth: 769, color: "#000" }}>
            If you've got any questions, or have a website you'd like built, let me know! I'll do my best to respond within 24 hours.
          </Paragraph>
          <a style={{ color: "#548bdd", fontWeight: 500 }} href="mailto:jarodpeachey@gmail.com">
            jarodpeachey@gmail.com
          </a>
          <br />
          <a style={{ color: "#548bdd", fontWeight: 500 }} href="tel:7176822910">
            717-682-2910
          </a>
          {/* {emailError && <Alert color="error">Please enter a valid email.</Alert>}
          {messageError && !emailError && <Alert color="error">Please type a message.</Alert>}
          <Row spacing={[12]} breakpoints={[769]}>
            <div widths={[6]}>
              <Input onChange={onNameInputChange} fullWidth size="large" placeholder="Name" />
            </div>
            <div widths={[6]}>
              <Input onChange={onEmailInputChange} fullWidth size="large" type="email" placeholder="Email" />
            </div>
            <div widths={[12]}>
              <TextArea onChange={onMessageInputChange} fullWidth size="large" placeholder="Message" />
            </div>
            <div widths={[12]}>
              <Button color="secondary" onClick={onSubmit}>
                Submit
              </Button>
            </div>
          </Row> */}
        </Container>
      </Section>
    </Layout>
  );
};

export default App;
