import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';

interface Props {
  className?: string;
}

export const ArticleCodeBlockComponent: FC<Props> = ({
  className,
  children,
}) => (
  <div
    className={classNames(cls.articleCodeBlockComponent, {}, [className || ''])}
  >
    {children}
  </div>
);
