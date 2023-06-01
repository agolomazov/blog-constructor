import { memo } from 'react';
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

export const Text = memo(({ className, title, text, theme }: Props) => (
  <div
    className={classNames(cls.text, { [cls[theme]]: true }, [className || ''])}
  >
    {title && <p className={cls.title}>{title}</p>}
    {text && <p className={cls.text}>{text}</p>}
  </div>
));
