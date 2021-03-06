import React, { useState } from 'react';
import styled from 'styled-components';
import Tab from './Tab';
import Flex from './Flex';
// import TabContent from './TabContent';

const TabList = ({
  children,
  onClick,
  customStyles = null,
  selectedTab,
  fullWidth,
  indicatorColor,
}) => {
  return (
    <Wrapper customStyles={customStyles}>
      <Flex hAlign="start">
        {children.map((child) => {
          console.log(child.type.name);
          const newProps = {
            ...child.props,
            onClick,
            fullWidth,
            indicatorColor,
          };
          newProps.active = selectedTab === child.props.name;

          return (
            <>
              <Tab {...newProps}>{child.props.children}</Tab>
            </>
          );
        })}
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${(props) => props.customStyles}
`;

export default TabList;
