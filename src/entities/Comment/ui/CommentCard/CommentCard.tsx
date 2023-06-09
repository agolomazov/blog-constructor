import { memo, FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Avatar } from 'shared/ui/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface Props {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

const CommentCard: FC<Props> = (props) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.commentCardSkeleton, {}, [className])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton height={16} width={100} className={cls.username} />
        </div>
        <Skeleton height={50} width="100%" className={cls.text} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.commentCard, {}, [className])}>
      <div className={cls.header}>
        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
        <Text title={comment.user.username} className={cls.username} />
      </div>
      <Text text={comment.text} className={cls.text} />
    </div>
  );
};

export const CommentCardMemo = memo(CommentCard);
