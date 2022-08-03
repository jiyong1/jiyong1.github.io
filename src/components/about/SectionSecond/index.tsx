/* eslint-disable no-restricted-globals */
import React, { useRef, useCallback, useMemo, useEffect, useState } from 'react';
import styled from 'styled-components';

import ObserverSection from '../Section';
import SectionHeader from '../SectionHeader';
import Experience from './Experience';
import experiences from './text';

const SectionSecond = (): JSX.Element => {
  const secondSectionRef = useRef<HTMLElement>(null);
  const [expDisplay, setExpDisplay] = useState<boolean[]>([false, false, false]);

  const [efd, setEfd] = useState<boolean>(false);
  const [esd, setEsd] = useState<boolean>(false);
  const [etd, setEtd] = useState<boolean>(false);
  const expFirstRef = useRef<HTMLLIElement>(null);
  const expSecondRef = useRef<HTMLLIElement>(null);
  const expThirdref = useRef<HTMLLIElement>(null);

  const expRefArr = useMemo(() => {
    return [expFirstRef, expSecondRef, expThirdref];
  }, [expFirstRef, expSecondRef, expThirdref]);

  const expParseIdx = useCallback((id: string): number | undefined => {
    const rv = parseInt(id.substr(5));

    if (isNaN(rv)) return;

    return rv;
  }, []);

  const expObserverHandler = useCallback((entries: IntersectionObserverEntry[], obs: IntersectionObserver) => {
    entries.forEach((entry) => {
      const id = expParseIdx(entry.target.id);
      if (id !== undefined) {
        const nextDisplay =
          (entry.isIntersecting && entry.intersectionRatio > 0.6) || entry.boundingClientRect.top < 10;
        if (id === 0) {
          setEfd(nextDisplay);
        } else if (id === 1) {
          setEsd(nextDisplay);
        } else if (id === 2) {
          setEtd(nextDisplay);
        }
      }
    });
  }, []);

  useEffect(() => {
    setExpDisplay([efd, esd, etd]);
  }, [efd, esd, etd]);

  useEffect(() => {
    if (
      !expRefArr.every(({ current }) => {
        if (current) return true;
        return false;
      })
    )
      return;
    const observer = new IntersectionObserver(expObserverHandler, { threshold: [0, 0.7] });
    expRefArr.forEach(({ current }) => {
      observer.observe(current as HTMLLIElement);
    });
  }, [expRefArr]);

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
