import { useEffect } from 'react';

export default function useOnClickOutside(ref, ref2, handler) {

  useEffect(() => {
    const listener = event => {
      const ignoreRef = document.querySelector(ref);
      const ignoreElement = document.querySelector(ref2);
      if (ignoreRef?.contains(event.target) || ignoreElement?.contains(event.target)) {
        return;
      }
      handler(event);
    };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },[ref, ref2, handler]);
}