/* eslint-disable no-restricted-globals */
import React, { useRef } from 'react';
import styled from 'styled-components';

import ObserverSection from '../Section';
import SectionHeader from '../SectionHeader';
import Experience from './Experience';
import experiences from './text';

const SectionSecond = (): JSX.Element => {
  const secondSectionRef = useRef<HTMLElement>(null);

  return (
    <ObserverSection id="second--section--root" ref={secondSectionRef} style={{ marginTop: '50vh' }}>
      <SectionHeader text={'EXPERIENCE'} fixed={true} />
      <ExperienceListWrapper>
        {experiences.map((experience, idx) => {
          return (
            <Experience
              id={`exp--${idx}`}
              idx={idx}
              key={`experience-${idx}`}
              experience={experience}
              left={idx % 2 === 0}
            />
          );
        })}
      </ExperienceListWrapper>
    </ObserverSection>
  );
};

const ExperienceListWrapper = styled.ul`
  margin: 60vh 0 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: ${({ theme }) => theme.size.medium}) {
    grid-template-columns: 1fr;
  }
`;

export default SectionSecond;
