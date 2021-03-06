/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { theme } from '../components/theme';
import { pSBC } from '../utils/color';

const TextArea = ({
  className = '',
  placeholder = '',
  onChange = null,
  onFocus = null,
  onBlur = null,
  size,
  variant,
  label,
  fullWidth,
  state,
  icon,
  type,
  defaultValue,
  color,
}) => {
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState(
    defaultValue || type === 'number' ? 0 : '',
  );

  console.log(hover);

  const customOnChange = (e) => {
    setValue(e.target.value);

    onChange && onChange(e);
  };

  const customOnFocus = (e) => {
    setFocus(true);

    onFocus && onFocus(e);
  };

  const customOnBlur = (e) => {
    setFocus(false);

    onBlur && onBlur(e);
  };

  const increment = () => {
    console.log('Increasing.');
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value - 1);
  };

  return (
    <Wrapper
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      fullWidth={fullWidth}
    >
      {label && (
        <Label state={state} size={size}>
          {label}
        </Label>
      )}
      {icon && (
        <>
          <StyledTextArea
            color={color}
            unselectable="on"
            fullWidth={fullWidth}
            size={size}
            state={state}
            withIcon
            variant={variant}
            placeholder={placeholder}
            type={type === 'number' ? 'tel' : type}
            hover={hover}
            value={value}
            onChange={customOnChange}
            onFocus={customOnFocus}
            onBlur={customOnBlur}
          />
          <Icon size={size}>{icon}</Icon>
          {type === 'number' && (
            <NumberButtons focus={focus}>
              <NumberButton focus={focus} onClick={() => increment()}>
                <FontAwesomeIcon
                  icon="chevron-down"
                  style={{ transform: 'rotate(180deg)', fontSize: 13 }}
                />
              </NumberButton>
              <NumberButton focus={focus} onClick={() => decrement()}>
                <FontAwesomeIcon icon="chevron-down" style={{ fontSize: 13 }} />
              </NumberButton>
            </NumberButtons>
          )}
        </>
      )}
      {!icon && (
        <>
          <StyledTextArea
            color={color}
            unselectable="on"
            hover={hover}
            fullWidth={fullWidth}
            size={size}
            state={state}
            variant={variant}
            type={type === 'number' ? 'tel' : type}
            placeholder={placeholder}
            value={value}
            onChange={customOnChange}
            onFocus={customOnFocus}
            onBlur={customOnBlur}
          />
          {type === 'number' && (
            <NumberButtons focus={focus}>
              <NumberButton focus={focus} onClick={() => increment()}>
                <FontAwesomeIcon
                  icon="chevron-down"
                  style={{ transform: 'rotate(180deg)', fontSize: 13 }}
                />
              </NumberButton>
              <NumberButton focus={focus} onClick={() => decrement()}>
                <FontAwesomeIcon icon="chevron-down" style={{ fontSize: 13 }} />
              </NumberButton>
            </NumberButtons>
          )}
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: block;
  position: relative;
  width: fit-content;
  -webkit-user-select: none; /* Chrome/Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */

  /* Rules below not implemented in browsers yet */
  -o-user-select: none;
  user-select: none;
  width: ${(props) => (props.fullWidth ? '100%' : 'fit-content')};
`;

const NumberButtons = styled.div`
  position: absolute;
  top: ${(props) => (props.focus ? '1px' : '1px')};
  right: ${(props) => (props.focus ? '1px' : '1px')};
  height: ${(props) => (props.focus ? 'calc(100% - 2px)' : 'calc(100% - 2px)')};
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const NumberButton = styled.div`
  padding: 0px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;

  :hover {
    cursor: pointer;
    background: ${(props) => props.theme.color.primary}10;
  }
  right: ${(props) => (props.focus ? '0px' : null)};

  &:first-child {
    border-top-right-radius: 3px;
    top: ${(props) => (props.focus ? '1px' : '0px')};
    padding-bottom: ${(props) => (props.focus ? '1px' : '0px')};
    position: relative;
    width: ${(props) => (props.focus ? 'calc(100% - 2px)' : '100%')};
    margin-left: ${(props) => (props.focus ? '2px' : null)};
  }
  &:last-child {
    border-bottom-right-radius: 3px;
    bottom: ${(props) => (props.focus ? '1px' : '0px')};
    padding-top: ${(props) => (props.focus ? '2px' : '0px')};
    position: relative;
    width: ${(props) => (props.focus ? 'calc(100% - 2px)' : '100%')};
    margin-left: ${(props) => (props.focus ? '2px' : null)};
  }
`;

const Icon = styled.div`
  color: ${(props) => pSBC(props.theme.color.gray.eight, -25)};
  position: absolute;
  left: ${(props) =>
    props.size === 'xs'
      ? '10px'
      : props.size === 'small'
      ? '12px'
      : props.size === 'large'
      ? '18px'
      : '16px'};
  top: ${(props) =>
    props.size === 'xs'
      ? 'calc(50% - 9px)'
      : props.size === 'small'
      ? 'calc(50% - 11px)'
      : props.size === 'large'
      ? 'calc(50% - 14px)'
      : 'calc(50% - 13px)'};
  font-size: ${(props) =>
    props.size === 'xs'
      ? '15px'
      : props.size === 'small'
      ? '17px'
      : props.size === 'large'
      ? '22px'
      : '20px'};
  font-weight: 400;
`;

const Label = styled.label`
  display: block;
  width: ${(props) => (props.fullWidth ? '100%' : 'fit-content')};
  margin-bottom: 8px;
  font-weight: 600;
  color: ${(props) =>
    props.state === 'success'
      ? props.theme.color.success
      : props.state === 'error'
      ? props.theme.color.error
      : ''} !important;
`;

const StyledTextArea = styled.textarea`
  -webkit-user-select: none; /* Chrome/Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  display: inline-block;
  // background: ${(props) => props.theme.color.gray.eight};
  ::placeholder {
    color: ${(props) => props.theme.color.gray.five};
  }
  min-height: 150px;
  resize: vertical;
color: ${(props) =>
  props.theme.color.gray
    .eight};  /* Rules below not implemented in browsers yet */
  -o-user-select: none;
  user-select: none;
  display: inline-block;
  padding: ${(props) =>
    props.size === 'xs'
      ? '4px 8px'
      : props.size === 'small'
      ? '8px 12px'
      : props.size === 'large'
      ? '16px 18px'
      : '13px 15px'};
  font-size: ${(props) =>
    props.size === 'xs'
      ? '13px'
      : props.size === 'small'
      ? '14px'
      : props.size === 'large'
      ? '17px'
      : '15px'};
  transition-duration: 0.15s;
  display: inline-block;
  width: ${(props) => (props.fullWidth ? '100%' : 'fit-content')};
  border-radius: ${(props) => props.theme.radius.two};
  border: 1px solid
    ${(props) =>
      props.state === 'success'
        ? props.theme.color.success
        : props.state === 'error'
        ? props.theme.color.error
        : props.theme.color.gray.eight};
  :hover {
  }
  :focus ~ div svg {
  }
  :focus {
    outline: none;
    border: 1px solid
      ${(props) => props.theme.color.gray.eight};
box-shadow: 2px 4px 32px -14px ${(props) => props.theme.color.gray.four};  }
  padding-left: ${(props) =>
    props.withIcon
      ? props.size === 'xs'
        ? '30px'
        : props.size === 'small'
        ? '37px'
        : props.size === 'large'
        ? '50px'
        : '46px'
      : ''};
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    margin: 0;
  }
`;

export default TextArea;
