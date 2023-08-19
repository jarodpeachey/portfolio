import React, { useContext } from 'react';
import styled from 'styled-components';

const Section = ({
  children,
  background,
  className = '',
  spacing,
  customStyles,
}) => {
  return (
    <StyledSection
      spacing={spacing}
      className={className}
      customStyles={customStyles}
      background={background}
    >
      {children}
    </StyledSection>
  );
};

const StyledSection = styled.section`
  text-align: ${(props) => (props.center ? 'center' : 'inherit')};
  z-index: 1;
  background: ${(props) => props.background};
  padding: ${(props) =>
      props.spacing === 'small'
        ? 44
        : props.spacing === 'large'
        ? 78
        : props.spacing || 52}px
    0;
  ${(props) => props.customStyles}
`;

export default Section;
