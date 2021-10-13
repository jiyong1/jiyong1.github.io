import React, { forwardRef } from 'react';
import styled from 'styled-components';

interface IAboutSectionProps {
  children: JSX.Element[] | JSX.Element | string;
  style?: React.CSSProperties;
}

const ObserverSection = forwardRef<HTMLElement, IAboutSectionProps>(({ children, style }, ref) => {
  return (
    <Section ref={ref} style={style}>
      {children}
    </Section>
  );
});

ObserverSection.displayName = 'ObserverSection';

const Section = styled.section`
  position: relative;
`;

export default ObserverSection;
