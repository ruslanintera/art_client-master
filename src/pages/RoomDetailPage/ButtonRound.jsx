import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';


const getBtnSize = (size) => {
  switch (size) {
    case 'l':
      return '22px 64px';
    case 'm':
      return '20px 40px';
    case 's':
      return '14px 38px';
    case 'xs':
      return '10px 25px';
    default:
      return '10px 22px';
  }
}

const getBtnSizeMobile = (size) => {
  switch (size) {
    case 'l':
      return '30px 40px';
    case 'm':
      return '15px 30px';
    case 's':
      return '15px 30px';
    case 'xs':
      return '10px 25px';
    default:
      return '10px 22px';
  }
}

const getBtnFontSize = (size) => {
  switch (size) {
    case 'l':
      return '20px';
    case 'xs':
      return '14px';
    default:
      return '14px';
  }
}

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${(props) => getBtnSize(props.size)};

  svg {
    margin-left: 9px;
  }
`;

const StyledButton = styled(Button)`
  /* border: ${(props) => props.variant ? '1px solid #191919' : '1px solid #191919'}; */
  border: 1px solid #191919;
  box-shadow: none;
  /* background-color: ${(props) => props.variant === 'ghost' ? 'transparent' : 'transparent'}; */
  background-color: transparent;
  border-radius: 7px;
  /* color: ${(props) => props.variant === 'ghost' ? '#191919' : '#191919'}; */
  color: #191919;
  height: auto;
  padding: 0;
  font-size: 18px;
  line-height: 23px;
  /* font-size: ${(props) => getBtnFontSize(props.size)}; */
  /* line-height: ${(props) => getBtnFontSize(props.size)}; */
  flex-grow: 0;

  &:hover, &:focus {
    background-color: #eee;
    color: #191919;
    border: 1px solid #eee;
  }

  &:active {
    background-color: #eee;
    color: #fff;
    border: 1px solid #eee;
  }

  & span {
    display: block;
    padding: ${(props) => getBtnSize(props.size)};
  }

  @media screen and (max-width: 940px) {
    span {
      padding: ${(props) => getBtnSizeMobile(props.size)};
    }
  }
`;

const ButtonRound = (props) => {
  const { children, iconComponent } = props;

  const innerContent = iconComponent ? (
    <ButtonWrapper {...props}>
      {children}
      {iconComponent}
    </ButtonWrapper>
  ) : children

  return (
    <StyledButton {...props}>
      {innerContent}
    </StyledButton>
  );
};
export default ButtonRound;
