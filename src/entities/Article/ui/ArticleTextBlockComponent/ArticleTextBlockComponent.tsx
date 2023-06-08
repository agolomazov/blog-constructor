import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Text } from 'shared/ui/Text';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface Props {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: Props) => {
  const {
    className,
    block: { title, paragraphs },
  } = props;

  return (
    <div
      className={classNames(cls.articleBlockTextComponent, {}, [
        className || '',
      ])}
    >
      {title && <Text title={title} className={cls.title} />}
      {paragraphs.map((p) => (
        <Text text={p} key={p} className={cls.paragraph} />
      ))}
    </div>
  );
});
