/* eslint-disable no-restricted-globals */
import React, { useRef, useCallback, useMemo, useEffect, useState } from 'react';

import ObserverSection from '../Section';
import StickyHeader from '../StickyHeader';

import useObserver from '@hooks/useObserver';
import useRFA from '@hooks/useRFA';

import stylePercentGenerate from '@utils/aboutStyle';
import HeadingStyle from './style';

const SectionSecond = (): JSX.Element => {
  const secondSectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [headingStyle, setHeadingStyle] = useState<React.CSSProperties[]>([]);
  const [headingFixed, setHeadingFixed] = useState<boolean>(false);
  const threshold = useMemo(() => {
    return Array.from({ length: 101 }, (_, idx) => idx * 0.01);
  }, []);

  const setDefault = useCallback(() => {
    setHeadingFixed(false);
    setHeadingStyle([]);
  }, []);

  const headingStyleGenerater = useRFA<number>((percentage) => {
    if (typeof percentage === 'number' && percentage > 0 && percentage < 100) {
      const headingStyle = stylePercentGenerate(percentage, HeadingStyle, 1);
      setHeadingStyle(headingStyle);
    }
  });

  const observeHandler = useCallback(
    (entries: IntersectionObserverEntry[], obs: IntersectionObserver) => {
      const topScrollHeight = 16 * 0.6;
      const viewHeight = innerHeight - topScrollHeight;
      const rootTop = entries[0].boundingClientRect.top;
      if (entries[0].isIntersecting) {
        if (rootTop >= topScrollHeight) {
          const percentage = ((viewHeight - rootTop) / viewHeight) * 100;
          headingStyleGenerater(percentage);
          setHeadingFixed(false);
        } else {
          setHeadingFixed(true);
        }
      } else {
        setDefault();
      }
    },
    [headingStyleGenerater],
  );

  const observer = useObserver(secondSectionRef, observeHandler, { threshold });

  useEffect(() => {
    if (observer && headingRef.current) {
      // observer.observe(headingRef.current);
    }
  }, [observer, headingRef]);

  useEffect(() => {
    if (headingFixed) {
      setHeadingStyle([]);
    }
  }, [headingFixed]);

  return (
    <ObserverSection ref={secondSectionRef} style={{ marginTop: '50vh' }}>
      <StickyHeader ref={headingRef} style={headingStyle[0]} header={'Experience'} fixed={headingFixed} />
      <div style={{ height: '200vh' }}></div>
    </ObserverSection>
  );
};

export default SectionSecond;
