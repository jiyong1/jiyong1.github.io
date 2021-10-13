import React from 'react';
import ReactDOM from 'react-dom';

export default function SNBRoot({ children }: { children: React.ReactNode }): JSX.Element {
  if (typeof document === 'undefined') return <></>;
  const portalRoot = document.getElementById('side__nav--bar');
  if (!portalRoot) throw new Error('portal root가 없습니다');

  return ReactDOM.createPortal(children, portalRoot);
}
