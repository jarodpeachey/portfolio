import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import Heading from './Heading';

const Info = ({
  children,
  title,
  icon,
  className = '',
  variant,
  color,
  layout,
  align,
  image,
  customStyles,
}) => {
  console.log(image);
  return (
    <StyledInfo
      layout={layout}
      variant={variant}
      color={color}
      align={align}
      customStyles={customStyles}
      className={className}
    >
      {image && <ImageWrapper>{image}</ImageWrapper>}
      {icon && !image && (
        <Icon layout={layout} align={align} color={color} variant={variant}>
          {icon}
        </Icon>
      )}
      <div>
        {title && <Heading type="h3">{title}</Heading>}
        {children}
      </div>
    </StyledInfo>
  );
};

const ImageWrapper = styled.div`
  max-height: 190px;
  height: 190px;
  overflow-y: hidden;
  overflow-x: visible;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const StyledInfo = styled.div`
  font-size: 18px;
  margin: 0 auto;
  border-radius: 6px;
  ${(props) =>
    props.layout === 'horizontal' &&
    css`
      display: flex;
      align-items: flex-start;
    `};
  img {
    border-radius: 6px;
  }

  ${(props) =>
    (props.variant === 'filled' || props.variant === 'light') &&
    css`
      padding: ${props.theme.spacing.five + 8}px ${props.theme.spacing.five}px
        ${props.theme.spacing.five}px ${props.theme.spacing.five}px;
    `};
  text-align: ${(props) =>
    props.align === 'left' || props.layout === 'horizontal'
      ? 'left'
      : props.align === 'right'
      ? 'right'
      : 'center'};
  h3 {
    margin: ${(props) =>
      props.layout === 'horizontal' ? '0 0 16px 0' : '16px 0'};
  }
  ${(props) =>
    props.variant === 'filled' &&
    css`
      background: ${props.color === 'primary'
        ? props.theme.color.primary
        : props.color === 'secondary'
        ? props.theme.color.secondary
        : props.color === 'success'
        ? props.theme.color.success
        : props.color === 'error'
        ? props.theme.color.error
        : 'white'};
    `};
  ${(props) =>
    props.variant === 'light' &&
    css`
      background: ${props.color === 'primary'
        ? props.theme.color.primary
        : props.color === 'secondary'
        ? props.theme.color.secondary
        : props.color === 'success'
        ? props.theme.color.success
        : props.color === 'error'
        ? props.theme.color.error
        : 'white'}15;

      p {
        color: ${props.color ? '#000000bb' : null};
      }
    `};
  ${(props) => props.customStyles}
`;

const Icon = styled.div`
  margin: ${(props) =>
    props.align === 'left' || props.align === 'right' ? 0 : '0 auto'};
  margin-left: ${(props) => (props.align === 'right' ? 'auto' : null)};
  width: fit-content;
  color: ${(props) => props.theme.color.primary};
  svg {
    font-size: 42px;
  }
  margin-right: ${(props) =>
    props.layout === 'horizontal' ? `${props.theme.spacing.five - 6}px` : null};

  color: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary
      : props.color === 'secondary'
      ? props.theme.color.secondary
      : props.color === 'success'
      ? props.theme.color.success
      : props.color === 'error'
      ? props.theme.color.error
      : props.theme.color.gray.nine};
  ${(props) =>
    props.variant === 'filled' &&
    css`
      color: ${props.color ? 'white' : null};
    `};
`;

export default Info;
