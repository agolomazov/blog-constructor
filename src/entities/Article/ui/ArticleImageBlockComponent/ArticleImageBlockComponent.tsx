import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './ArticleImageBlockComponent.module.scss';

interface Props {
  className?: string;
}

export const ArticleImageBlockComponent: FC<Props> = ({
  className,
  children,
}) => (
  <div
    className={classNames(cls.articleImageBlockComponent, {}, [
      className || '',
    ])}
  >
    {children}
  </div>
);
