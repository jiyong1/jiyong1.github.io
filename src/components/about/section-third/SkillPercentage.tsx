import React, { useRef, useEffect, useCallback, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { ISkillGraph } from './text';

interface ISkillPerProps {
  skill: ISkillGraph;
}

const SkillPercentage = ({ skill }: ISkillPerProps): JSX.Element => {
  const wrapper = useRef<HTMLDivElement>(null);
  const [fadeIn, setFadeIn] = useState<boolean>(false);

  const observerHandler = useCallback((entries: IntersectionObserverEntry[], obs: IntersectionObserver) => {
    const wrapperElem = entries[0];
    const fade = wrapperElem.boundingClientRect.top <= 0 || wrapperElem.intersectionRatio > 0.5;
    setFadeIn(fade);
  }, []);

  useEffect(() => {
    if (!wrapper.current) return;
    const observer = new IntersectionObserver(observerHandler, { threshold: [0, 0.6] });
    observer.observe(wrapper.current);

    return () => observer.disconnect();
  }, [wrapper]);

  return (
    <SkillPerWrapper className={'bg-soft' + (fadeIn ? ' fade-in' : '')} ref={wrapper}>
      <div className="grid-container">
        <p className="skill-name">{skill.name}</p>
        <div className="skill-graph-container">
          <p className="bar-pin zero">0</p>
          <p className="bar-pin quarter">25</p>
          <p className="bar-pin half">50</p>
          <p className="bar-pin three-quaters">75</p>
          <p className="bar-pin full">100</p>
          <div className="bg-brown graph-bar" style={{ width: `${skill.per}%` }}></div>
          <div className="bg-normal graph-bar-bg" />
        </div>
      </div>
      <div className="bg-normal skill-description">
        {skill.description.map((description, idx) => (
          <p key={`${skill.name}-des-${idx}`}>{description}</p>
        ))}
      </div>
    </SkillPerWrapper>
  );
};

const wrapperFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 20%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const graphIn = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(100%, 0, 0);
  }
`;

const SkillPerWrapper = styled.div`
  max-width: 1024px;
  margin: 15vh auto;
  padding: 1rem;
  border-radius: 1rem;
  opacity: 0;
  transform: translate3d(0, 20%, 0);

  .grid-container {
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
    margin-bottom: 2rem;
  }

  .skill-name {
    font-size: 1.2rem;
    padding-right: 0.5em;
    font-weight: bold;
  }

  .skill-graph-container {
    padding: 1.5rem 0;
    overflow: hidden;
    position: relative;

    .bar-pin {
      position: absolute;
      top: 0.1rem;
      font-size: 0.8rem;
      &:not(.full, .zero) {
        transform: translateX(-50%);
      }
      &.zero {
        left: 0;
      }
      &.quarter {
        left: 25%;
      }
      &.half {
        left: 50%;
      }
      &.three-quaters {
        left: 75%;
      }
      &.full {
        right: 0;
      }
    }
    .graph-bar-bg {
      height: 1.5rem;
      width: 100%;
    }
    .graph-bar {
      position: absolute;
      top: 1.5rem;
      right: 100%;
      height: 1.5rem;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      transform: translate3d(0, 0, 0);
    }
  }
  .skill-description {
    padding: 1rem;
    line-height: 1.5;
    border-radius: 1rem;
    font-weight: 300;
    > p {
      margin: 1em 0;
    }
  }
  &.fade-in {
    animation: ${wrapperFadeIn} 1s forwards;
    .graph-bar {
      animation: ${graphIn} 1.5s ease forwards;
      animation-delay: 1s;
    }
  }
  @media (max-width: ${({ theme }) => theme.size.medium}) {
    .grid-container {
      display: block;
    }
    .skill-name {
      margin-bottom: 2rem;
    }
  }
`;

export default SkillPercentage;
