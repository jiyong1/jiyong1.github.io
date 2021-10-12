/* eslint-disable no-restricted-globals */
import React, { useEffect, useCallback, useState } from 'react';
import styled from 'styled-components';

const ScrollTop = (): JSX.Element => {
  const [per, setPer] = useState<number>(-100);
  const scrollHandler = useCallback(() => {
    const maxScroll = document.body.scrollHeight - innerHeight;
    setPer(((scrollY - maxScroll) / maxScroll) * 100);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler, { passive: true });

    return () => {
      window.removeEventListener('scroll', scrollHandler, { passive: true } as EventListenerOptions);
    };
  }, [scrollHandler]);

  return (
    <ScrollWrapper className="bg-soft">
      <div
        className="scroll-top bg-brown"
        style={{
          transform: `translateX(${per}%)`,
        }}
      ></div>
    </ScrollWrapper>
  );
};

const ScrollWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 7;
  width: 100vw;
  height: 0.6rem;
  .scroll-top {
    width: 100%;
    height: 100%;
    border-top-right-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
  }
`;

export default ScrollTop;
