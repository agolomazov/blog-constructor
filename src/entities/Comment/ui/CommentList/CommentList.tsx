import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Text } from 'shared/ui/Text';
import { Comment } from '../../model/types/comment';
import { CommentCardMemo as CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface Props {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

const CommentList: FC<Props> = (props) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation('comments');

  return (
    <div className={classNames(cls.commentlist, {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            className={cls.comment}
            isLoading={isLoading}
          />
        ))
      ) : (
        <Text text={t('Комментариев нет')} />
      )}
    </div>
  );
};

export const CommentListMemo = memo(CommentList);
