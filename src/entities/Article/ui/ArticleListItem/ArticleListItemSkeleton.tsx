import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Card } from 'shared/ui/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface Props {
  className?: string;
  view: ArticleView;
}

const ArticleListItemSkeleton = (props: Props) => {
  const { className, view } = props;

  if (view === 'big') {
    return (
      <div
        className={classNames(cls.articleListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card}>
          <div className={cls.header} style={{ marginBottom: 10 }}>
            <Skeleton height={30} width={30} border="50%" />
            <Skeleton height={16} width={80} className={cls.username} />
          </div>
          <Skeleton height={16} className={cls.username} />
          <Skeleton height={250} className={cls.img} />
          <Skeleton className={cls.textBlock} height={200} />
        </Card>
      </div>
    );
  }

  return (
    <div
      className={classNames(cls.articleListItem, {}, [className, cls[view]])}
    >
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <Skeleton height={200} width={200} className={cls.img} />
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton width={150} height={16} className={cls.title} />
      </Card>
    </div>
  );
};

export const ArticleListItemSkeletonMemo = memo(ArticleListItemSkeleton);
