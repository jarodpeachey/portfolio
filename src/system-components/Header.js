import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Container from './Container';

const Header = ({ children, color, scrollColor, fixed }) => {
  const [scroll, setScroll] = useState(
    typeof window !== 'undefined' && window.scrollY,
  );
  const onScroll = () => {
    setScroll(typeof window !== 'undefined' && window.scrollY);

    if (typeof window !== 'undefined' && window.scrollY > 50) {
      document.getElementById('header').classList.add('scrolled');
    } else {
      document.getElementById('header').classList.remove('scrolled');
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.scrollY > 50) {
      document.getElementById('header').classList.add('scrolled');
    } else {
      document.getElementById('header').classList.remove('scrolled');
    }

    typeof window !== 'undefined' &&
      window.addEventListener('scroll', onScroll);

    return () => {
      typeof window !== 'undefined' &&
        window.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <Wrapper
      id="header"
      scrolled={typeof window !== 'undefined' && window.scrollY > 50}
      color={color}
      fixed={fixed}
      scrollColor={scrollColor}
    >
      <Container >
        <InnerContainer
          color={color}
          scrolled={typeof window !== 'undefined' && window.scrollY > 50}
        >
          {children}
        </InnerContainer>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  transition: background 0.3s;
  position: ${(props) => (props.fixed ? 'fixed' : '')};
  top: 0;
  width: 100%;
  z-index: 999;
  background: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary
      : props.color === 'secondary'
      ? props.theme.color.secondary
      : props.color === 'transparent'
      ? 'transparent'
      : 'white'};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  div {
    color: ${(props) =>
      props.color === 'primary'
        ? 'white'
        : props.color === 'secondary'
        ? 'white'
        : props.color === 'transparent'
        ? props.theme.color.gray.one
        : null};
  }
  .menu-item,
  .menu-item a {
    color: ${(props) =>
      props.color === 'primary'
        ? 'white'
        : props.color === 'secondary'
        ? 'white'
        : props.color === 'transparent'
        ? props.theme.color.gray.five
        : null};
  }
  span {
    background: ${(props) =>
      props.color === 'primary'
        ? 'white'
        : props.color === 'secondary'
        ? 'white'
        : props.color === 'transparent'
        ? props.theme.color.gray.one
        : props.theme.color.gray.nine} !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 32px !important;
  }

  #mobile-menu::after {
    background: ${(props) =>
      props.color === 'primary'
        ? props.theme.color.primary
        : props.color === 'secondary'
        ? props.theme.color.secondary
        : props.color === 'transparent'
        ? 'transparent'
        : 'white'};
  }
  #mobile-menu {
    padding-top: 103px;
  }

  &.scrolled {
    #mobile-menu {
      padding-top: 71px;
    }

    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.05), 0 2px 4px 0 rgba(0, 0, 0, 0.03),
      0 4px 16px -6px rgba(0, 0, 0, 0.5);
    background: ${(props) =>
      props.color === 'transparent' ? props.theme.color.secondary : null};
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    .menu-item,
    .menu-item a,
    span,
    div {
      color: ${(props) =>
        props.color === 'primary' || props.color === 'secondary'
          ? props.theme.color.gray.one
          : props.theme.color.gray.one};
    }
  }
  &.open {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    div,
    .menu-item,
    .menu-item a {
      color: ${(props) => props.theme.color.gray.nine} !important;
    }
    span {
      background: ${(props) => props.theme.color.gray.nine} !important;
    }
  }
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: ${(props) =>
    props.scrolled || props.color !== 'transparent' ? '10px' : '32px'};
  padding-bottom: ${(props) =>
    props.scrolled || props.color !== 'transparent' ? '10px' : '32px'};
  justify-content: space-between;
  transition: 0.3s;
  z-index: 999;
`;

const Close = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: white;
`;

Header.propTypes = {
  children: PropTypes.object,
  primary: PropTypes.bool,
  transparent: PropTypes.bool,
  secondary: PropTypes.bool,
};

export default Header;
