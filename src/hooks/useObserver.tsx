import React, { useEffect, useMemo } from 'react';

type ICallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void;

export default function useObserver<T extends HTMLElement>(
  refObj: React.RefObject<T>,
  callBack: ICallback,
  options?: IntersectionObserverInit,
): IntersectionObserver | undefined {
  const observer = useMemo(() => {
    if (typeof window === 'undefined') return;
    return new IntersectionObserver(callBack, options);
  }, [callBack, options]);

  useEffect(() => {
    if (refObj.current && observer) {
      const elem = refObj.current;
      observer.observe(elem);
      return () => {
        observer.disconnect();
      };
    }
  }, [refObj, callBack, options, observer]);
  return observer;
}
