import React, { useState } from 'react';
import styled from 'styled-components';

const SubMenuItem = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.div`
  width: 100%;
  color: ${(props) => props.theme.color.gray.nine} !important;

  a {
    display: block;
    width: 100% !important;
    padding: 8px 24px;
    text-decoration: none;
    background: none;
    transition-duration: 0.15s !important;
    color: initial !important;
    font-weight: normal !important;
    width: 100%;
    border-radius: 0px;
    margin: 0;
    width: 100%;
    cursor: pointer;
    color: ${(props) => props.theme.color.gray.nine} !important;
    :hover {
      background: ${(props) => props.theme.color.gray.two} !important;
      color: ${(props) => props.theme.color.gray.nine} !important;
    }
  }
`;

export default SubMenuItem;
