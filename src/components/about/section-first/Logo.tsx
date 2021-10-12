import React from 'react';
import styled from 'styled-components';

import logo from '@images/logo.png';

const Logo = ({ style, bottom }: { style: React.CSSProperties; bottom: boolean }): JSX.Element => {
  return (
    <LogoWrapper className={bottom ? 'bottom' : 'top'} style={style}>
      <img src={logo} alt="로고 이미지" />
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: absolute;
  left: 0;
  &.top {
    top: 0;
  }
  &.bottom {
    bottom: 0;
  }

  img {
    display: block;
    max-width: 600px;
    width: 100%;
  }
`;

export default Logo;
