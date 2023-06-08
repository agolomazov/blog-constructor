import { ArticleCodeBlock } from 'entities/Article/model/types/article';
import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Code } from 'shared/ui/Code';
import cls from './ArticleCodeBlockComponent.module.scss';

interface Props {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent: FC<Props> = memo((props: Props) => {
  const {
    className,
    block: { code },
  } = props;

  return (
    <div
      className={classNames(cls.articleCodeBlockComponent, {}, [
        className || '',
      ])}
    >
      <Code text={code} />
    </div>
  );
});
