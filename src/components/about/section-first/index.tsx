/* eslint-disable no-restricted-globals */
import React, { useCallback, useMemo, useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

import ObserverSection from '../Section';
import Logo from './Logo';
import Text from './Text';

import useRFA from '@hooks/useRFA';
import useObserver from '@hooks/useObserver';

const SectionFirst = (): JSX.Element => {
  const sectionRef = useRef<HTMLElement>(null);
  const [event, setEvent] = useState<boolean>(false);
  const [fixed, setFixed] = useState<boolean>(false);
  const [opacity, setOpacity] = useState<number>(1);
  const [transformX, setTransformX] = useState<number>(0);
  const [textPercentage, setTextPercentage] = useState<number>(0);

  const options = useMemo(() => {
    const threshold = 0;
    return { threshold };
  }, []);

  const observerCallback = useCallback(([entry]: IntersectionObserverEntry[], obs: IntersectionObserver) => {
    if (entry.isIntersecting) {
      setOpacity(1);
      setEvent(true);
    } else {
      setOpacity(0);
      setEvent(false);
    }
  }, []);

  useObserver(sectionRef, observerCallback, options);

  const scrollHandler = useCallback(() => {
    if (!sectionRef.current) return;
    const sectionElem = sectionRef.current;
    const { top, bottom, height } = sectionElem.getBoundingClientRect();

    // text animation percentage
    const textStartPoint = height / 4;
    const textEndPoint = textStartPoint * 3;
    let textPer = 0;
    const textPerCandidate = (height - bottom - textStartPoint) / (textEndPoint - textStartPoint);
    if (textPerCandidate > 0 && textPerCandidate < 1) textPer = textPerCandidate * 100;
    else if (textPerCandidate >= 1) textPer = 100;

    // background animation percentage
    const bgTransform = ((height - bottom) / textStartPoint) * 100;
    let bgTransformPer = 0;
    if (bgTransform > 0 && bgTransform <= 100) bgTransformPer = bgTransform;
    else if (bgTransform > 100) bgTransformPer = 100;

    // set animation state
    setTransformX(bgTransformPer);
    setTextPercentage(textPer);

    if (top <= 0 && bottom >= 0) setFixed(true);
    else setFixed(false);
  }, []);

  const scrollRFA = useRFA(scrollHandler);

  useEffect(() => {
    if (event) {
      window.addEventListener('scroll', scrollRFA, { passive: true });

      return () => {
        window.removeEventListener('scroll', scrollRFA, { passive: true } as EventListenerOptions);
      };
    }
  }, [event, scrollRFA]);

  return (
    <ObserverSection ref={sectionRef} height="500vh" opacity={opacity}>
      <Logo fixed={fixed && event} />
      <SectionFoundation
        className="invert"
        style={{
          right: '100%',
          transform: `translateX(${transformX}%)`,
        }}
      />
      <SectionFoundation
        className="invert"
        style={{
          width: 'calc(50% - 0.1px)',
          left: '100%',
          transform: `translateX(-${transformX}%)`,
        }}
      />
      <Text percentage={textPercentage} />
    </ObserverSection>
  );
};

const SectionFoundation = styled.div`
  width: 50%;
  height: 100vh;
  opacity: 0.8;
  position: fixed;
  top: 0;
  z-index: 3;
`;

export default SectionFirst;
