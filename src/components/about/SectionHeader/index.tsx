import React, { FC, useState, useRef, useEffect, useCallback } from 'react';

import { HeaderWrapper, Header } from './style';
import { useDarkmode } from '@context/theme';

type SectionHeaderProps = {
  text: string;
  fixed?: boolean;
};

const SectionHeader: FC<SectionHeaderProps> = ({ text, fixed }) => {
  const [display, setDisplay] = useState<boolean>(false);
  const theme = useDarkmode();
  const headerWrapperRef = useRef<HTMLDivElement>(null);

  const observeHandler = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      const elem = entries[0];
      if (elem.isIntersecting) {
        setDisplay(true);
      } else {
        setDisplay(false);
      }
    },
    [setDisplay],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(observeHandler, { threshold: 1 });
    const headerElem = headerWrapperRef.current as HTMLDivElement;

    observer.observe(headerElem);

    return () => observer.disconnect();
  }, []);

  return (
    <HeaderWrapper ref={headerWrapperRef} className={'bg-normal' + (fixed ? ' header__fixed' : '')}>
      <Header className={theme + (display ? ' header__display' : '')}>{text}</Header>
    </HeaderWrapper>
  );
};

SectionHeader.displayName = 'SectionHeader';

export default SectionHeader;
