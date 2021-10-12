import React, { useRef, useState, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

import useObserver from '@hooks/useObserver';

const Name = (): JSX.Element => {
  const [display, setDisplay] = useState<boolean>(true);
  const nameRef = useRef<HTMLElement>(null);

  const displayHandler = useCallback((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    setDisplay(entries[0].isIntersecting);
  }, []);

  useObserver(nameRef, displayHandler, { threshold: 0 });

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
    stroke-dashoffset: 2416;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;
const NameSection = styled.section`
  padding: 0 2rem;
  svg {
    width: 100%;
  }
  .name {
    font-family: 'Noto Sans KR', sans-serif;
    stroke-dasharray: 2416;
    &.display {
      animation: ${NameDash} 4s forwards;
    }
  }
`;

export default Name;
