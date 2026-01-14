import React from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import "../styles/partials/pages/_home.scss";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

const Home = () => {
    return (
        <>
            <SEO bodyClass="home" />
            <header>
                <Navigation />
            </header>
            <div id="wrapper" className="wrapper">
                {/* About Me Section */}
                <section className="hero hero--bw">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <h1>Jarod Peachey</h1>
                                <p className="section-description hero__paragraph">
                                    Professional web developer passionate about building clean, modern, and high-performing websites. I specialize in React,
                                    JavaScript, and full-stack development. Welcome to my portfolio.
                                </p>
                                <div className="about-snippets">
                                    <p>• 5+ years of experience in web development</p>
                                    <p>• Focused on accessibility, performance, and user experience</p>
                                    <p>• Open source contributor & lifelong learner</p>
                                </div>
                            </div>
                            <div className="col-lg-5 d-flex justify-content-center">
                                <img
                                    src="/media/img/jarod.png"
                                    alt="Jarod Peachey portrait"
                                    className="profile-img"
                                    style={{ maxWidth: "320px", borderRadius: "100%", border: "4px solid #111" }}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* My Work (Carousel) Section */}
                <section className="themes" id="work">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 max-560">
                                <p className="display">EXPERIENCE</p>
                                <h2 style={{ textAlign: "center" }}>Featured Work</h2>
                            </div>
                        </div>
                        <Carousel
                            slides={[
                                {
                                    name: "WeVote",
                                    image: "/media/img/wevote.jpg",
                                    link: "https://wevote.us",
                                    description:
                                        "As a Software Engineer Intern at WeVote, I used React, HTML, and CSS to enhance the user interface and deliver a more engaging experience. I developed new components and workflows, and integrated the frontend with the API and data to streamline user interactions and improve overall functionality.",
                                },
                                {
                                    name: "Jelly Development",
                                    image: "/media/img/jellydevelopment.png",
                                    link: "https://jellydevelopment.com",
                                    description:
                                        "I designed and developed this landing page to showcase my freelance web development work, focusing on a clean and modern user experience. The site was built using HTML, CSS, React, and Gatsby, ensuring fast performance and scalability. The design was crafted in Figma to achieve a visually appealing and intuitive layout.",
                                },
                                {
                                    name: "Glitter",
                                    image: "/media/img/glitter-work.webp",
                                    link: "https://get-glitter.netlify.app",
                                    description:
                                        "Glitter is a Chrome extension I developed that enables users to apply custom themes to Twitter, transforming the look and feel of the platform to match their personal style. Built with HTML, CSS, and JavaScript, Glitter allows for easy color and layout customization directly in the browser. The extension provides a seamless user experience, making Twitter more visually engaging and unique.",
                                },
                                {
                                    name: "MindTrust",
                                    image: "/media/img/mindtrust.png",
                                    link: "https://mindtrust.us",
                                    description:
                                        "As a Frontend Developer at MindTrust, I worked with a team of developers to build their landing page, focusing on clean design and engaging user experiences. I created custom CSS and SVG animations to enhance visual appeal and interactivity, and collaborated on multiple client websites to deliver high-quality, responsive solutions tailored to each brand.",
                                },
                                {
                                    name: "Project 1,000",
                                    image: "/media/img/project1000.png",
                                    link: "https://project1000.app/",
                                    description:
                                        "Project 1,000 is a workout tracker that I designed and built from the ground up, supporting multiple users through Supabase authentication and database integration. The app leverages React, HTML, and CSS to deliver a clean, intuitive interface for logging workouts and tracking progress. Users can securely sign up, manage their routines, and view personalized stats, making fitness tracking simple and collaborative.",
                                },
                                {
                                    name: "WeVote",
                                    image: "/media/img/wevote.jpg",
                                    link: "https://wevote.us",
                                    description:
                                        "As a Software Engineer Intern at WeVote, I used React, HTML, and CSS to enhance the user interface and deliver a more engaging experience. I developed new components and workflows, and integrated the frontend with the API and data to streamline user interactions and improve overall functionality.",
                                },
                                {
                                    name: "Jelly Development",
                                    image: "/media/img/jellydevelopment.png",
                                    link: "https://jellydevelopment.com",
                                    description:
                                        "I designed and developed this landing page to showcase my freelance web development work, focusing on a clean and modern user experience. The site was built using HTML, CSS, React, and Gatsby, ensuring fast performance and scalability. The design was crafted in Figma to achieve a visually appealing and intuitive layout.",
                                },
                                {
                                    name: "Glitter",
                                    image: "/media/img/glitter-work.webp",
                                    link: "https://get-glitter.netlify.app",
                                    description:
                                        "Glitter is a Chrome extension I developed that enables users to apply custom themes to Twitter, transforming the look and feel of the platform to match their personal style. Built with HTML, CSS, and JavaScript, Glitter allows for easy color and layout customization directly in the browser. The extension provides a seamless user experience, making Twitter more visually engaging and unique.",
                                },
                                {
                                    name: "MindTrust",
                                    image: "/media/img/mindtrust.png",
                                    link: "https://mindtrust.us",
                                    description:
                                        "As a Frontend Developer at MindTrust, I worked with a team of developers to build their landing page, focusing on clean design and engaging user experiences. I created custom CSS and SVG animations to enhance visual appeal and interactivity, and collaborated on multiple client websites to deliver high-quality, responsive solutions tailored to each brand.",
                                },
                                {
                                    name: "Project 1,000",
                                    image: "/media/img/project1000.png",
                                    link: "https://project1000.app/",
                                    description:
                                        "Project 1,000 is a workout tracker that I designed and built from the ground up, supporting multiple users through Supabase authentication and database integration. The app leverages React, HTML, and CSS to deliver a clean, intuitive interface for logging workouts and tracking progress. Users can securely sign up, manage their routines, and view personalized stats, making fitness tracking simple and collaborative.",
                                },
                                {
                                    name: "WeVote",
                                    image: "/media/img/wevote.jpg",
                                    link: "https://wevote.us",
                                    description:
                                        "As a Software Engineer Intern at WeVote, I used React, HTML, and CSS to enhance the user interface and deliver a more engaging experience. I developed new components and workflows, and integrated the frontend with the API and data to streamline user interactions and improve overall functionality.",
                                },
                                {
                                    name: "Jelly Development",
                                    image: "/media/img/jellydevelopment.png",
                                    link: "https://jellydevelopment.com",
                                    description:
                                        "I designed and developed this landing page to showcase my freelance web development work, focusing on a clean and modern user experience. The site was built using HTML, CSS, React, and Gatsby, ensuring fast performance and scalability. The design was crafted in Figma to achieve a visually appealing and intuitive layout.",
                                },
                                {
                                    name: "Glitter",
                                    image: "/media/img/glitter-work.webp",
                                    link: "https://get-glitter.netlify.app",
                                    description:
                                        "Glitter is a Chrome extension I developed that enables users to apply custom themes to Twitter, transforming the look and feel of the platform to match their personal style. Built with HTML, CSS, and JavaScript, Glitter allows for easy color and layout customization directly in the browser. The extension provides a seamless user experience, making Twitter more visually engaging and unique.",
                                },
                            ]}
                        />
                    </div>
                    {/* <a href="/themes" className="btn">View all themes</a> */}
                </section>
                {/* Skills Section */}
                <section id="skills" className="skills skills--bw">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <p className="display">SKILLS</p>
                                <h2 style={{ textAlign: "center" }}>What I Do</h2>
                                <p className="section-description" style={{ textAlign: "center" }}>
                                    Here are some of the technologies and skills I work with:
                                </p>
                                {/* TODO: Add your skills here */}
                                <ul
                                    className="skills-list"
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        justifyContent: "center",
                                        gap: "1.5rem",
                                        listStyle: "none",
                                        padding: 0,
                                        marginTop: "2rem",
                                    }}
                                >
                                    <li>HTML5 & CSS3</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>NextJS</li>
                                    <li>Gatsby</li>
                                    <li>Sass/SCSS</li>
                                    <li>Node.js</li>
                                    <li>Tailwind</li>
                                    <li>Webpack/Babel</li>
                                    <li>ASP.net</li>
                                    <li>UI/UX Design</li>
                                    <li>Figma</li>
                                    <li>Git & GitHub</li>
                                    <li>Accessibility Optimization</li>
                                    <li>Performance Optimization</li>
                                    <li>Responsive Design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                                <section id="contact" className="contact contact--bw">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <p className="display">CONTACT</p>
                                <h2 style={{ textAlign: "center" }}>Work With Me</h2>
                                <p className="section-description" style={{ textAlign: "center" }}>
                                    I'm available to reach by email, phone, or text!
                                </p>
                                {/* TODO: Add your skills here */}
                                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                                    <p>
                                        <strong>Email:</strong>{" "}
                                        <a href="mailto:jarodpeachey@gmail.com">jarodpeachey@gmail.com</a>
                                    </p>
                                    <p>
                                        <strong>Phone:</strong>{" "}
                                        <a href="tel:7176822910">717-682-2910</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Home;
