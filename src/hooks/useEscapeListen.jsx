import { useEffect } from 'react';

export default function useEscapeListen(fn) {

  useEffect(() => { 
    const handleKeyDown = (e) => {
      if (e.keyCode === 27) {
        fn();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [fn])

  return;
}