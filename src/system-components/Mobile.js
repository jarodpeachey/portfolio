import React from 'react';
import styled from 'styled-components';

const Mobile = ({ children, customStyles }) => {
  return <Wrapper customStyles={customStyles}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: block;
  @media (min-width: 769px) {
    display: none;
  }
  ${(props) => props.customStyles}
`;

export default Mobile;
