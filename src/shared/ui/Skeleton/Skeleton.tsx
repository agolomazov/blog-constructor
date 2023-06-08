import { CSSProperties, FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Skeleton.module.scss';

interface Props {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton: FC<Props> = (props) => {
  const { className, height, width, border } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div className={classNames(cls.skeleton, {}, [className])} style={styles} />
  );
};
