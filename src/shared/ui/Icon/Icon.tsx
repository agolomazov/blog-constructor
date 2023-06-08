import { classNames } from 'shared/lib/classNames';
import cls from './Icon.module.scss';

interface Props {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = ({ Svg, className }: Props) => (
  <Svg className={classNames(cls.icon, {}, [className])} />
);
