import { ArticleView } from 'entities/Article/model/types/article';
import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import ListViewIcon from 'shared/assets/icons/list-24-24.svg';
import TiledViewIcon from 'shared/assets/icons/tiled-24-24.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon';
import cls from './ArticleViewSelector.module.scss';

interface Props {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

type ArticleViewValue = {
  view: ArticleView;
  icon: React.VFC<React.SVGProps<SVGSVGElement>>;
};

const viewValues: ArticleViewValue[] = [
  { view: 'small', icon: TiledViewIcon },
  { view: 'big', icon: ListViewIcon },
];

const ArticleViewSelector: FC<Props> = (props) => {
  const { className, view, onViewClick } = props;

  const handleClick = (newValue: ArticleView) => () => {
    onViewClick?.(newValue);
  };

  return (
    <div className={classNames(cls.articleviewselector, {}, [className])}>
      {viewValues.map((v) => (
        <Button
          key={v.view}
          theme={ButtonTheme.CLEAR}
          onClick={handleClick(v.view)}
          disabled={view === v.view}
        >
          <Icon Svg={v.icon} />
        </Button>
      ))}
    </div>
  );
};

export const ArticleViewSelectorMemo = memo(ArticleViewSelector);
