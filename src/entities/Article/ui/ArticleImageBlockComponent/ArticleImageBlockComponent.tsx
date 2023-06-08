import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Text } from 'shared/ui/Text';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

interface Props {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: Props) => {
  const {
    className,
    block: { src, title },
  } = props;
  return (
    <>
      <img
        src={src}
        alt={title || ''}
        className={classNames(cls.articleImageBlockComponent, {}, [
          className || '',
        ])}
      />
      {title && <Text text={title} align="center" />}
    </>
  );
});
