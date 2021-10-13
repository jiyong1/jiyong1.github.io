import { useMemo } from 'react';

export default function useRFA<T>(cb: (arg?: T) => void): (arg?: T) => void {
  const handler = useMemo(() => {
    let rafTimeout: number | null = null;

    return function (arg?: T) {
      if (rafTimeout) {
        window.cancelAnimationFrame(rafTimeout);
      }
      rafTimeout = requestAnimationFrame(() => {
        cb(arg);
        rafTimeout = null;
      });
    };
  }, [cb]);

  return handler;
}
