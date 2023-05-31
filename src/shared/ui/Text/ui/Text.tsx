import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface Props {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text: FC<Props> = ({ className, title, text, theme }) => (
  <div
    className={classNames(cls.text, { [cls[theme]]: true }, [className || ''])}
  >
    {title && <p className={cls.title}>{title}</p>}
    {text && <p className={cls.text}>{text}</p>}
  </div>
);
