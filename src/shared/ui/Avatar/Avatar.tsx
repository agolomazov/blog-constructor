import { CSSProperties, FC, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames';
import cls from './Avatar.module.scss';

interface Props {
  className?: string;
  src: string;
  alt?: string;
  title?: string;
  size?: number;
}

export const Avatar: FC<Props> = (props) => {
  const { className, src, alt, title, size } = props;
  const mods: Mods = {};

  const styles = useMemo<CSSProperties>(
    () => ({
      width: `${size}px`,
      height: `${size}px`,
    }),
    [size]
  );

  return (
    <img
      className={classNames(cls.avatar, mods, [className || ''])}
      src={src}
      alt={alt}
      title={title}
      style={styles}
    />
  );
};
