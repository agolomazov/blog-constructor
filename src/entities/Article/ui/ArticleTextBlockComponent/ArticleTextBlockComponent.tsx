import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './ArticleTextBlockComponent.module.scss';

interface Props {
  className?: string;
}

export const ArticleTextBlockComponent: FC<Props> = ({
  className,
  children,
}) => (
  <div
    className={classNames(cls.articleBlockTextComponent, {}, [className || ''])}
  >
    {children}
  </div>
);
