import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Chip = ({ children, color = '', icon, className }) => {
  return (
    <Wrapper icon={!!icon} color={color} className={className}>
      {icon && <Icon>{icon}</Icon>}
      <div>{children}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-flex;
  width: fit-content;
  align-items: flex-start;
  font-size: 10px;
  text-transform: uppercase;
  padding: 2px ${(props) => props.theme.spacing.two}px;
  background: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary
      : props.color === 'secondary'
      ? props.theme.color.secondary
      : props.color === 'success'
      ? props.theme.color.success
      : props.color === 'error'
      ? props.theme.color.error
      : props.color || props.theme.color.gray.one};
  div {
    font-size: 12px;
    color: ${(props) => (props.color === '' ? '' : 'white')};
  }
  border-radius: 3px;
  padding-left: ${(props) => (props.icon ? '0' : '8px')};
`;

const CloseButton = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
  margin-left: auto;
  padding-right: 14px;
`;
const Icon = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
  margin-right: 14px;
  padding-left: 14px;
`;

export default Chip;
