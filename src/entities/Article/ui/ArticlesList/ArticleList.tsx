import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItemMemo as ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeletonMemo as ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface Props {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === 'small' ? 12 : 3).fill(0).map((_, idx) => (
    // eslint-disable-next-line react/no-array-index-key
    <ArticleListItemSkeleton view={view} key={idx} className={cls.card} />
  ));

const ArticleList: FC<Props> = (props) => {
  const { className, articles, view = 'small', isLoading } = props;

  const renderArticle = useCallback(
    (article: Article) => (
      <ArticleListItem
        key={article.id}
        article={article}
        view={view}
        className={cls.card}
      />
    ),
    [view]
  );

  return (
    <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
};

export const ArticleListMemo = memo(ArticleList);
