import React from 'react';
import styled, { css } from 'styled-components';

const H1 = ({
  children,
  className = '',
  customStyles,
  color,
  background,
  display,
}) => {
  return (
    <StyledH1
      background={background}
      color={color}
      customStyles={customStyles}
      className={className}
      display={display}
    >
      {children}
    </StyledH1>
  );
};

const StyledH1 = styled.h1`
  color: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary
      : props.color === 'secondary'
      ? props.theme.color.secondary
      : props.color === 'success'
      ? props.theme.color.success
      : props.color === 'error'
      ? props.theme.color.error
      : props.background === 'dark'
      ? props.theme.color.lighter
      : props.theme.color.gray.nine};
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
  text-transform: ${(props) =>
    props.display === 'title' ? 'uppercase' : null};
  font-weight: ${(props) => (props.display === 'subtitle' ? 'normal' : null)};
`;

export default H1;
