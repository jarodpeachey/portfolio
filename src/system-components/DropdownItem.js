import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { theme } from '../components/theme';

const DropdownItem = ({ children }) => (
  <Wrapper variant="plain">{children}</Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  padding: 12px 18px;
  border-radius: 0px;
  margin: 0;
  width: 100%;
  cursor: pointer;
  color: ${(props) => props.theme.color.gray.nine};
  :active {
    background: ${(props) => props.theme.color.primary} !important;
    color: white;
  }
  :hover {
    background: ${(props) => props.theme.color.gray.two};
  }
`;

export default DropdownItem;
