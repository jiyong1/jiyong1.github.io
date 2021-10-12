import React, { forwardRef } from 'react';

interface IAboutSectionProps {
  children: JSX.Element[];
  height: string;
  opacity: number;
}

const ObserverSection = forwardRef<HTMLElement, IAboutSectionProps>(({ children, height, opacity }, ref) => {
  return (
    <section ref={ref} style={{ height, position: 'relative', overflow: 'hidden', opacity }}>
      {children}
    </section>
  );
});

ObserverSection.displayName = 'ObserverSection';

export default ObserverSection;
