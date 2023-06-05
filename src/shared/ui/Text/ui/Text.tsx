import { memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export type TextAlign = 'left' | 'right' | 'center';

interface Props {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

export const Text = memo((props: Props) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = 'left',
  } = props;

  const mods: Mods = {
    [cls[theme]]: true,
    [cls[align]]: true,
  };

  return (
    <div className={classNames(cls.text, mods, [className || ''])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
