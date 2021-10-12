import React from 'react';
import styled from 'styled-components';

import logo from '@images/logo.png';

const Logo = ({ fixed }: { fixed: boolean }): JSX.Element => {
  return (
    <LogoWrapper className={fixed ? 'fixed' : ''}>
      <img src={logo} className="" alt="로고 이미지" />
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
  }

  img {
    display: block;
    max-width: 600px;
    width: 100%;
  }
`;

export default Logo;
