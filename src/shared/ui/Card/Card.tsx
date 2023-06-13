import { FC, HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Card.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

const Card: FC<Props> = (props) => {
  const { className, children, ...otherProps } = props;
  return (
    <div className={classNames(cls.card, {}, [className])} {...otherProps}>
      {children}
    </div>
  );
};

export const CardMemo = memo(Card);
