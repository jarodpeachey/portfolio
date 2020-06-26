import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from './Flex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { theme } from '../components/theme';

const Collapse = ({ children, customStyles }) => {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  const onClick = () => {
    setOpen(!open);
  };
  const onMouseEnter = () => {
    setHover(true);
  };
  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <Wrapper customStyles={customStyles}>
      <Title
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      >
        <Flex hAlign="space-between">
          <span>{children[0]}</span>
          <Toggle hover={hover} open={open}>
            <FontAwesomeIcon
              style={{
                fontSize: 20,
                color: hover ? theme.color.gray.one : theme.color.gray.five,
                transition: '.15s ease-out',
              }}
              icon="times"
            />
          </Toggle>
        </Flex>
      </Title>
      <Body open={open}>{children[1]}</Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${(props) => props.customStyles};
`;

const Toggle = styled.div`
  transform: rotate(${(props) => (!props.open ? '45deg' : '0deg')});
  border: 1px solid
    ${(props) =>
      props.hover ? props.theme.color.gray.one : props.theme.color.gray.five};
  border-radius: 99px;
  padding: 16px;
  transition: color 0.15s ease-out, border 0.15s ease-out, transform 0.3s ease-in-out;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: 1px solid
    ${(props) =>
      props.hover
        ? props.theme.color.gray.one
        : props.theme.color.gray.five} !important;
  * {
    color: 1px solid
      ${(props) =>
        props.hover
          ? props.theme.color.gray.one
          : props.theme.color.gray.five} !important;
  }
`;

const Title = styled.button`
  border: none;
  width: 100%;
  display: block;
  background: transparent;
  font-size: inherit;
  text-align: inherit;
  color: inherit;
  margin: inherit;
  padding: inherit;
  outline: none;
  border: none;
  cursor: pointer;
  margin-bottom: 16px;
`;

const Body = styled.div`
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  max-height: ${(props) => (props.open ? '400px' : '0')} !important;
`;

export default Collapse;
