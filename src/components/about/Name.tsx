import React, { useRef, useState, useCallback, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import { browserCheck } from '@utils/browser';

const Name = (): JSX.Element => {
  const [isSafari, setIsSafari] = useState<boolean>(false);
  const [display, setDisplay] = useState<boolean>(true);
  const nameRef = useRef<HTMLElement>(null);

  const displayHandler = useCallback((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    setDisplay(entries[0].isIntersecting);
  }, []);

  useEffect(() => {
    const browser = browserCheck();
    setIsSafari(browser === 'Safari');
    if (nameRef.current) {
      const observer = new IntersectionObserver(displayHandler, { threshold: 0 });
      observer.observe(nameRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [nameRef]);

  return (
    <NameSection ref={nameRef}>
      <svg viewBox="0 0 800 200">
        <text
          className={'name stroke-invert' + (display ? ' display' : '') + (isSafari ? ' safari' : '')}
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
    stroke-dashoffset: 807;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;
const SafariNameDash = keyframes`
  from {
    stroke-dashoffset: 2416;
  }
  to {
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
    &:not(.safari) {
      stroke-dasharray: 807;
      &.display {
        animation: ${NameDash} 4s forwards;
      }
    }
  }
  .name.safari {
    stroke-dasharray: 2416;
    &.display {
      animation: ${SafariNameDash} 8s forwards;
    }
  }
`;

export default Name;
