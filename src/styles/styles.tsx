import React from 'react';
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';

/* HEADER */
export const imageStyle = {
  height: '30px',
  maxWidth: '100%',
  objectFit: 'contain' as 'contain'
};

export const navbarStyle = {
  borderBottom: '1px solid #979797',
  height: '77px',
  paddingLeft: '20px',
  paddingRight: '20px',
};

export const iconoBellFill = {
  width: '44px',
  height: '44px',
  top: '16px',
  left: '748px'
};

export const iconoGearFill = {
  width: '44px',
  height: '44px',
  top: '16px',
  left: '804px'
};
export const iconoPersonCircle = {
  width: '44px',
  height: '44px',
  top: '16px',
  left: '860px'
};

/* SIDEBAR */
// export const  ={
//   width: '44px', 
//   height: '44px', 
//   top: '16px', 
//   left: '860px'
// };

export const StyledNav = styled(Nav)`
  border-right: 1.5px solid #979797;
  height: 868px;
`;

export const StyledNavLink = styled(Nav.Link)`
  
  font-size: 16px;
  font-weight: 400;
  line-height: 21.82px;
  letter-spacing: 0.5px;
  text-align: left;
  color: #926642;
  background-color: #ffffff;

  &:hover {
    color: #926642;
  }

  &.active {
    color: #ffffff !important;
    background-color: #AB9384 !important;
  }
`;

/* Styles de MainContent */
export const containerStyle = {
  // width: '60px',
  // height: '24px',
  padding: '4px 6px',
  borderRadius: '15px 15px 15px 15px',
  background: '#A8E2F0',
  border: '1px solid #A8E2F0',
  color: '#1A1A1A', // color de texto negro
}

export const buttonStyle1 = {
  width: '100px',
  height: '38px',
  padding: '8px 12px',
  borderRadius: '6px 0 0 6px',
  background: '#979797',
  border: '1px solid #979797',
  color: '#FFFFFF',
}

export const buttonStyle2 = {
  width: '100px',
  height: '38px',
  marginLeft: '10px',
  padding: '8px 12px',
  borderRadius: '0 6px 6px 0',
  background: '#926642',
  border: '1px solid #926642',
  color: '#FFFFFF',
}

