import ReactDOM from 'react-dom';
import { useEffect } from 'react';

const portalRoot = document.getElementById('portal');

export default function Portal({ children }: { children: React.ReactNode }) {
  if (!portalRoot) throw new Error('portal root가 없습니다');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.removeAttribute('style');
    };
  }, []);

  return ReactDOM.createPortal(children, portalRoot);
}
