import { useMemo } from 'react';

export default function useDebounce(cb: () => void, delay: number, preCb?: () => void): () => void {
  const returnFunction = useMemo(() => {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    return () => {
      if (preCb) preCb();
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        cb();
        timeout = null;
      }, delay);
    };
  }, []);

  return returnFunction;
}
