import React, { useCallback } from 'react';
import styled from 'styled-components';

const SNB = (): JSX.Element => {
  const scrollTopHandler = useCallback(() => {
    // eslint-disable-next-line no-restricted-globals
    scrollTo(0, 0);
  }, []);

  return (
    <SNBWrapper>
      <ScrollTopBtn onClick={scrollTopHandler} className="bg-brown">
        <i className="fas fa-chevron-up"></i>
      </ScrollTopBtn>
    </SNBWrapper>
  );
};

const SNBWrapper = styled.nav`
  position: fixed;
  z-index: 7;
  bottom: 5vw;
  right: 5vw;
`;

const ScrollTopBtn = styled.button`
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

export default SNB;
