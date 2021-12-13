import React, { FC, CSSProperties } from 'react';
import styled from 'styled-components';

import logo from '@images/logo.png';

type LogoProps = {
  fixed: boolean;
  bottom: boolean;
  circleStyle: CSSProperties;
};

const Logo: FC<LogoProps> = ({ fixed, bottom, circleStyle }) => {
  return (
    <LogoWrapper className={bottom ? 'bottom' : 'top'} style={fixed ? { position: 'fixed' } : {}}>
      <StyledSVG viewBox="0 0 100 100">
        <defs>
          <mask id="logo-mask">
            <rect x="0" y="0" width="200" height="200" fill="black" />
            <circle style={circleStyle} fill="white" cy="50" cx="50" r="100" />
          </mask>
        </defs>
        <image x="0" y="0" width="100" height="100" href={logo} mask="url(#logo-mask)" />
      </StyledSVG>
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

const StyledSVG = styled.svg`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  mask * {
    stroke: none !important;
  }
  mask circle {
    transform-origin: center;
  }
`;

export default Logo;
