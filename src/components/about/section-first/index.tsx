/* eslint-disable no-restricted-globals */
import React, { useCallback, useMemo, useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

import ObserverSection from '../Section';
import Logo from './Logo';
import Text from './Text';

import useRFA from '@hooks/useRFA';

import stylePercentGenerate from '@utils/aboutStyle';
import sectionFirstStyle from './style';

const SectionFirst = (): JSX.Element => {
  const sectionRef = useRef<HTMLElement>(null);
  const [event, setEvent] = useState<boolean>(true);
  const [logoBottom, setLogoBottom] = useState<boolean>(false);
  const [logoFixed, setLogoFixed] = useState<boolean>(false);
  const [percentage, setPercentage] = useState<number>(0);

  const options = useMemo(() => {
    const threshold = 0;
    return { threshold };
  }, []);

  const observerCallback = useCallback(([entry]: IntersectionObserverEntry[], obs: IntersectionObserver) => {
    if (entry.isIntersecting) {
      setEvent(true);
    } else {
      setLogoFixed(false);
      setEvent(false);
    }
  }, []);

  useEffect(() => {
    if (sectionRef.current) {
      const observer = new IntersectionObserver(observerCallback, options);
      observer.observe(sectionRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [sectionRef]);

  const scrollHandler = useCallback(() => {
    if (!sectionRef.current) return;
    const sectionElem = sectionRef.current;
    const viewHeight = innerHeight;
    const { top, bottom, height } = sectionElem.getBoundingClientRect();
    if (top > 0) {
      setLogoFixed(false);
      setLogoBottom(false);
      return;
    }
    const nextPerc = ((height - bottom) / height) * 100;
    if (nextPerc >= 0 && nextPerc <= 100) {
      setLogoFixed(true);
      setPercentage(nextPerc);
    }
    if (viewHeight >= bottom) {
      setLogoFixed(false);
      setLogoBottom(true);
    } else {
      setLogoBottom(false);
    }
  }, []);

  const scrollRFA = useRFA(scrollHandler);

  useEffect(() => {
    if (event) {
      window.addEventListener('scroll', scrollRFA, { passive: true });

      return () => {
        window.removeEventListener('scroll', scrollRFA, { passive: true } as EventListenerOptions);
      };
    }
  }, [event]);

  const styleArr = useMemo(() => {
    if (!event) return [];
    return stylePercentGenerate(percentage, sectionFirstStyle, 17);
  }, [percentage, event]);

  const textStyle = useMemo(() => {
    return styleArr.slice(1);
  }, [styleArr]);

  return (
    <ObserverSection ref={sectionRef} style={{ height: '700vh' }}>
      <Logo fixed={logoFixed} bottom={logoBottom} />
      <SectionFoundation
        className="invert"
        style={
          logoFixed || logoBottom
            ? {
                ...styleArr[0],
              }
            : {}
        }
      />
      <Text styleArr={logoFixed || logoBottom ? textStyle : []} bottom={logoBottom} />
    </ObserverSection>
  );
};

const SectionFoundation = styled.div`
  width: 100vw;
  height: 100vh;
  opacity: 0.8;
  position: fixed;
  bottom: 100%;
  left: 0;
  z-index: 3;
`;

export default SectionFirst;
