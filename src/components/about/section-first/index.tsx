/* eslint-disable no-restricted-globals */
import React, { useCallback, useMemo, useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

import ObserverSection from '../Section';
import Logo from './Logo';

import useRFA from '@hooks/useRFA';
import useObserver from '@hooks/useObserver';

const SectionFirst = (): JSX.Element => {
  const sectionRef = useRef<HTMLElement>(null);
  const [event, setEvent] = useState<boolean>(false);
  const [fixed, setFixed] = useState<boolean>(false);
  const [opacity, setOpacity] = useState<number>(1);
  const [transformX, setTransformX] = useState<number>(0);

  const options = useMemo(() => {
    const threshold = Array.from({ length: 101 }, (_, idx) => idx * 0.01);
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

    const textStartPoint = height / 4;
    const transform = ((height - bottom) / textStartPoint) * 100;
    let transformPer = 0;
    if (transform > 0 && transform <= 100) transformPer = transform;
    else if (transform > 100) transformPer = 100;
    setTransformX(transformPer);

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
          left: '100%',
          transform: `translateX(-${transformX}%)`,
        }}
      />
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
