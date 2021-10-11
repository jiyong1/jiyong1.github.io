import React, { useRef, useState, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

import useObserver from '@hooks/useObserver';

const Name = (): JSX.Element => {
  const [display, setDisplay] = useState<boolean>(true);
  const nameRef = useRef<HTMLElement>(null);

  const displayHandler = useCallback((entry: IntersectionObserverEntry, observer: IntersectionObserver) => {
    setDisplay(entry.isIntersecting);
  }, []);

  useObserver(nameRef, displayHandler);

  return (
    <NameSection ref={nameRef}>
      <svg viewBox="0 0 800 200">
        <text
          className={'name stroke-invert' + (display ? ' display' : '')}
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          lengthAdjust="spacing"
          fontSize="180"
          textLength="800"
          strokeWidth="6"
        >
          seventwo
        </text>
      </svg>
    </NameSection>
  );
};

const NameDash = keyframes`
  0% {
    stroke-dashoffset: -806;
  }
  40% {
    stroke-dashoffset: 0;
  }
  60% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -806;
  }
`;
const NameSection = styled.section`
  padding: 0 2rem;
  svg {
    width: 100%;
  }
  .name {
    font-family: 'Noto Sans KR', sans-serif;
    stroke-dasharray: 806;
    &.display {
      animation: ${NameDash} 8s infinite;
    }
  }
`;

export default Name;
