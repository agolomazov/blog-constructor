import { MutableRefObject, useEffect, useRef } from 'react';
import { logger } from '../logger';

export interface UseInfiniteScrollOptions {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({
  callback,
  wrapperRef,
  triggerRef,
}: UseInfiniteScrollOptions) {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const wrapperElement = wrapperRef.current;
    const triggerElement = triggerRef.current;

    if (!callback) {
      return;
    }

    const options: IntersectionObserverInit = {
      root: wrapperElement,
      rootMargin: '0px',
      threshold: 0.5,
    };

    observer.current = new IntersectionObserver(([entry]) => {
      // Указание на то, что отслеживаемый элемент появился в зоне видимости
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    observer.current.observe(triggerElement);

    return () => {
      logger('destroyed infinity');
      if (observer.current && triggerElement) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.current.unobserve(triggerElement);
      }
    };
  }, [wrapperRef, triggerRef, callback]);
}
