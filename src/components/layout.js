import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { ThemeProvider } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBolt,
  faQuestionCircle,
  faFeather,
  faCog,
  faGlobe,
  faTimes,
  faChevronDown,
  faUser,
  faDollarSign,
  faBell,
  faCheck,
  faHeart,
  faExclamationCircle,
  faChevronRight,
  faChevronLeft,
  faBoxes,
  faPalette,
  faMousePointer,
  faFlask,
  faAward,
  faPencilRuler,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import NavbarItem from '../system-components/NavbarItem';
import SubMenuItem from '../system-components/SubMenuItem';
import SubMenu from '../system-components/SubMenu';
import Tablet from '../system-components/Tablet';
import Mobile from '../system-components/Mobile';
import Navbar from '../system-components/Navbar';
import MobileSubMenuItem from '../system-components/MobileSubMenuItem';
import MobileMenuItem from '../system-components/MobileMenuItem';
import MobileMenu from '../system-components/MobileMenu';
import MobileSubMenu from '../system-components/MobileSubMenu';
import Header from '../system-components/Header';
import { theme } from './theme';
import Heading from '../system-components/Heading';
import './style.css';

library.add(
  faQuestionCircle,
  faFeather,
  faCog,
  faGlobe,
  faTimes,
  faCheck,
  faChevronDown,
  faUser,
  faBell,
  faDollarSign,
  faHeart,
  faExclamationCircle,
  faChevronRight,
  faChevronLeft,
  faBoxes,
  faPalette,
  faMousePointer,
  faFlask,
  faAward,
  faBolt,
  faPencilRuler,
  faEnvelope
);

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Header fixed color="transparent">
        <Heading type="h1" className="m-none">
          <FontAwesomeIcon icon="user" />
        </Heading>
        <Mobile>
          <MobileMenu>
            <MobileMenuItem>
              <Link to="#">Home</Link>
            </MobileMenuItem>
            <MobileMenuItem>
              <Link to="#projects">Projects</Link>
            </MobileMenuItem>
            <MobileMenuItem>
              <Link to="#values">Values</Link>
            </MobileMenuItem>
            {/* <MobileMenuItem submenu>
              <Link to="#projects">Components</Link>
              <MobileSubMenu>
                <MobileSubMenuItem>
                  <Link to="/components/layout">Layout</Link>
                </MobileSubMenuItem>
                <MobileSubMenuItem>
                  <Link to="/components/inputs">Inputs</Link>
                </MobileSubMenuItem>
                <MobileSubMenuItem>
                  <Link to="/components/display">Display</Link>
                </MobileSubMenuItem>
              </MobileSubMenu>
            </MobileMenuItem> */}
          </MobileMenu>
        </Mobile>
        <Tablet>
          <Navbar>
            <NavbarItem>
              <Link to="/">Home</Link>
            </NavbarItem>
            <NavbarItem>
              <Link to="#projects">Projects</Link>
            </NavbarItem>
            <NavbarItem>
              <Link to="#values">Values</Link>
            </NavbarItem>
            {/* <NavbarItem submenu>
              <Link to="/components">Components</Link>
              <SubMenu>
                <SubMenuItem>
                  <Link to="/components/layout">Layout</Link>
                </SubMenuItem>
                <SubMenuItem>
                  <Link to="/components/inputs">Inputs</Link>
                </SubMenuItem>
                <SubMenuItem>
                  <Link to="/components/display">Display</Link>
                </SubMenuItem>
              </SubMenu>
            </NavbarItem> */}
            {/* <NavbarItem square>
              <a href="/">
                <FontAwesomeIcon
                  icon="heart"
                  style={{ width: 20, height: 20, fontSize: 24 }}
                />
              </a>
            </NavbarItem> */}
          </Navbar>
        </Tablet>
      </Header>
      {children}
    </Wrapper>
  </ThemeProvider>
);

const Wrapper = styled.div`
  color: ${(props) => props.theme.color.gray.five};
  background ${(props) => props.theme.color.gray.nine};
`;

export default Layout;
