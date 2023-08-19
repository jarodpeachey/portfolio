/* eslint-disable no-nested-ternary */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { theme } from '../components/theme';
import { pSBC } from '../utils/color';

const Button = ({
  children,
  className = '',
  onClick,
  link,
  color,
  variant = '',
  size,
  customStyles,
  fullWidth,
}) => {
  console.log(customStyles);

  return (
    <>
      {link ? (
        <Link
          to={link}
          className={`${className} no-styling ${
            fullWidth ? 'full-width' : null
          }`}
        >
          <StyledButton
            color={color}
            size={size}
            variant={variant}
            className={className}
            onClick={onClick || null}
            link
            customStyles={customStyles}
            fullWidth={fullWidth}
          >
            {children}
          </StyledButton>
        </Link>
      ) : (
        <StyledButton
          color={color}
          size={size}
          variant={variant}
          className={className}
          onClick={onClick || null}
          customStyles={customStyles}
          fullWidth={fullWidth}
        >
          {children}
        </StyledButton>
      )}
    </>
  );
};

const StyledButton = styled.button`
  text-transform: uppercase;
  outline: none;
  padding: 12px 24px;
  border: none;
  width: ${(props) => (props.fullWidth ? '100%' : null)};
  font-size: 16px;
  // font-weight: 500;
  letter-spacing: 1.1px;
  padding: ${(props) =>
    props.size === 'small'
      ? '8px 12px'
      : props.size === 'large'
      ? '16px 29px'
      : '12px 18px'};
    
  height: ${(props) => (props.size === 'large' ? '54px' : null)};
  font-size: ${(props) =>
    props.size === 'small' ? '12px' : props.size === 'large' ? '16px' : '14px'};
  border-radius: ${(props) => props.theme.radius.two};
  cursor: pointer;
  transition: all 0.25s;
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
    color: ${(props) =>
      props.color === 'primary' ||
      props.color === 'secondary' ||
      props.color === 'success' ||
      props.color === 'error'
        ? 'white'
        : props.color
        ? props.theme.color.gray.one
        : props.theme.color.gray.nine};
      * {
            color: ${(props) =>
              props.color === 'primary' ||
              props.color === 'secondary' ||
              props.color === 'success' ||
              props.color === 'error'
                ? 'white'
                : props.theme.color.gray.nine};
      }
      border: 1px solid transparent;
      :hover {
        box-shadow: 2px 4px 32px -14px ${(props) =>
          props.color === 'primary'
            ? props.theme.color.primary
            : props.color === 'secondary'
            ? props.theme.color.secondary
            : props.color === 'success'
            ? props.theme.color.success
            : props.color === 'error'
            ? props.theme.color.error
            : props.color || props.theme.color.gray.one};
        // color: ${(props) => (props.color === 'white' ? 'initial' : 'white')};
      }


  ${(props) =>
    props.variant === 'outlined' &&
    css`
      background: transparent;
      color: ${props.color === 'primary'
        ? props.theme.color.primary
        : props.color === 'secondary'
        ? props.theme.color.secondary
        : props.color === 'success'
        ? props.theme.color.success
        : props.color === 'error'
        ? props.theme.color.error
        : props.theme.color.gray.one};
      * {
        color: ${props.color === 'primary'
          ? props.theme.color.primary
          : props.color === 'secondary'
          ? props.theme.color.secondary
          : props.color === 'success'
          ? props.theme.color.success
          : props.color === 'error'
          ? props.theme.color.error
          : props.theme.color.gray.one};
      }
      border: 1px solid
        ${props.color === 'primary'
          ? props.theme.color.primary
          : props.color === 'secondary'
          ? props.theme.color.secondary
          : props.color === 'success'
          ? props.theme.color.success
          : props.color === 'error'
          ? props.theme.color.error
          : props.theme.color.gray.one};
      :hover {
        background: ${props.color === 'primary'
          ? props.theme.color.primary
          : props.color === 'secondary'
          ? props.theme.color.secondary
          : props.color === 'success'
          ? props.theme.color.success
          : props.color === 'error'
          ? props.theme.color.error
          : props.theme.color.gray.one}18;
        box-shadow: none;
      }
    `};

  ${(props) =>
    props.variant === 'plain' &&
    css`
      background: transparent;
      color: ${
        props.color === 'primary'
          ? props.theme.color.primary
          : props.color === 'secondary'
          ? props.theme.color.secondary
          : props.color === 'success'
          ? props.theme.color.success
          : props.color === 'error'
          ? props.theme.color.error
          : props.theme.color.gray.one
      };
    * {
            color: ${
              props.color === 'primary'
                ? props.theme.color.primary
                : props.color === 'secondary'
                ? props.theme.color.secondary
                : props.color === 'success'
                ? props.theme.color.success
                : props.color === 'error'
                ? props.theme.color.error
                : props.theme.color.gray.one
            };
    }
      border: 1px solid transparent;
      :hover {
        background: ${
          props.color === 'primary'
            ? `${props.theme.color.primary}15`
            : props.color === 'secondary'
            ? `${props.theme.color.secondary}15`
            : props.color === 'success'
            ? `${props.theme.color.success}15`
            : props.color === 'error'
            ? `${props.theme.color.error}15`
            : props.color || `${props.theme.color.gray.one}15`
        };
        box-shadow: none;
        // color: ${props.color === 'white' ? 'initial' : 'white'};
      }
    `};
    ::after {
      display: block;
    }
    ${(props) => props.customStyles}
`;

Button.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func,
  link: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
};

export default Button;
