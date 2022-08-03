import React, { useEffect, useRef } from 'react';

export const useIntersectionObserver = <T extends Element>(
  ref: React.RefObject<T>,
  cb: IntersectionObserverCallback,
  options?: IntersectionObserverInit,
): void => {
  const ioRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const elem = ref.current;
    const io = new IntersectionObserver(cb, options);
    ioRef.current = io;
    io.observe(elem);
    return () => {
      io.unobserve(elem);
    };
  }, [ref, cb, options]);

  useEffect(() => {
    const io = ioRef.current;
    return () => {
      if (!io) return;
      io.disconnect();
    };
  }, []);
};
