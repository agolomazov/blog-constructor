import {
  StateSchema,
  useAppDispatch,
  useAppSelector,
} from 'app/providers/StoreProvider';
import { getUIScrollByPath, uiActions } from 'features/UI';
import {
  FC,
  memo,
  MutableRefObject,
  ReactNode,
  UIEvent,
  useEffect,
  useRef,
} from 'react';
import { useLocation } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
import { useThrottle } from 'shared/lib/hooks/useThrottle';
import cls from './Page.module.scss';

interface Props {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

const Page: FC<Props> = (props) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useAppSelector((state: StateSchema) =>
    getUIScrollByPath(state, pathname)
  );

  const handlerScrollPage = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      uiActions.setScrollPosition({
        position: e.currentTarget.scrollTop,
        path: pathname,
      })
    );
  }, 200);

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [scrollPosition]);

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <section
      ref={wrapperRef}
      className={classNames(cls.page, {}, [className])}
      onScroll={handlerScrollPage}
    >
      {children}
      <div ref={triggerRef} className={cls.loadMore} />
    </section>
  );
};

export const PageMemo = memo(Page);
