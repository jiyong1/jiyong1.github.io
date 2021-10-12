import { useMemo } from 'react';

export default function useRFA(cb: any): () => void {
  const handler = useMemo(() => {
    let rafTimeout: number | null = null;

    return function () {
      if (rafTimeout) {
        window.cancelAnimationFrame(rafTimeout);
      }
      rafTimeout = requestAnimationFrame(() => {
        cb();
        rafTimeout = null;
      });
    };
  }, [cb]);

  return handler;
}
