import React, { useEffect } from 'react';

type ICallback = (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void;

function observerCall(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
  entries.forEach((entry, idx) => {
    callBacks[idx](entry, observer);
  });
}

const callBacks: ICallback[] = [];
const observer = new IntersectionObserver(observerCall, { threshold: 0 });

export default function useObserver<T extends HTMLElement>(refObj: React.RefObject<T>, callBack: ICallback): void {
  useEffect(() => {
    if (refObj.current) {
      const elem = refObj.current;
      callBacks.push(callBack);
      const idx = callBacks.length - 1;
      observer.observe(elem);

      return () => {
        observer.unobserve(elem);
        callBacks.splice(idx, 1);
      };
    }
  }, [refObj, callBack]);
}
