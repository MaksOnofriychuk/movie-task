import * as React from "react";

export const useObserver = (ref: React.RefObject<HTMLDivElement>, isLoading: boolean, canLoad: boolean, callback: () => void) => {
  const observer = React.useRef<IntersectionObserver | null>(null);

  React.useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    const cb = function (entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
      if (entries[0].isIntersecting && canLoad) {
        callback();
      }
    };
    observer.current = new IntersectionObserver(cb);
    ref && ref.current &&
    observer.current.observe(ref?.current)
  }, [isLoading])
}

