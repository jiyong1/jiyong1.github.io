import React, { FC } from 'react';
import ScrollIndicatorWrapper from './style';

const ScrollIndicator: FC = () => {
  return (
    <ScrollIndicatorWrapper>
      <p>Scroll</p>
      <svg viewBox="0 0 100 100">
        <path d="M5 15 L 50 45 L 95 15" />
        <path d="M5 60 L 50 90 L 95 60" />
      </svg>
    </ScrollIndicatorWrapper>
  );
};

export default ScrollIndicator;
