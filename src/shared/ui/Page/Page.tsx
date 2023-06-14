import { FC, memo, MutableRefObject, ReactNode, useRef } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
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

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <section ref={wrapperRef} className={classNames(cls.page, {}, [className])}>
      {children}
      <div ref={triggerRef} className={cls.loadMore} />
    </section>
  );
};

export const PageMemo = memo(Page);
