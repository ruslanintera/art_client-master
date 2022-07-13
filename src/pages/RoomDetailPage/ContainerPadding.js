import React from 'react';
import styled from 'styled-components';

const StyledContainerPadding = styled.div`
  width: 100%;
  font: 400 18px '', sans-serif;
  padding: 0 20px;
  box-sizing: border-box;
`;

const ContainerPadding = ({children, className}) => {

  return (
    <StyledContainerPadding className={className}>
      {children}
    </StyledContainerPadding>
  );
};
export default ContainerPadding;
