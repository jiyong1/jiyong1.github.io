import React, { forwardRef } from 'react';
import styled from 'styled-components';

interface IAboutSectionProps {
  children: JSX.Element[] | JSX.Element | string;
  style?: React.CSSProperties;
  id?: string;
}

const ObserverSection = forwardRef<HTMLElement, IAboutSectionProps>(({ children, style, id }, ref) => {
  return (
    <Section id={id} ref={ref} style={style}>
      {children}
    </Section>
  );
});

ObserverSection.displayName = 'ObserverSection';

const Section = styled.section`
  position: relative;
`;

export default ObserverSection;
