import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input';
import { Text, TextTheme } from 'shared/ui/Text';
import {
  DynamicComponentLoader,
  ReducersList,
} from 'shared/lib/components/DynamicComponentLoader/DynamicComponentLoader';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';
import {
  getAddCommentFormError,
  getAddCommentFormIsLoading,
  getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import cls from './AddCommentForm.module.scss';

export interface Props {
  className?: string;
  onSendComment: () => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm: FC<Props> = (props) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const text = useAppSelector(getAddCommentFormText);
  const error = useAppSelector(getAddCommentFormError);
  const isLoading = useAppSelector(getAddCommentFormIsLoading);

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch]
  );

  const handleAddComment = useCallback(() => {
    onSendComment();
    onCommentTextChange('');
  }, [onSendComment, onCommentTextChange]);

  return (
    <DynamicComponentLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.addCommentForm, {}, [className])}>
        <Input
          placeholder={t('Введите текст комментария')}
          value={text}
          onChange={onCommentTextChange}
          className={cls.input}
        />
        {error && <Text text={error} theme={TextTheme.ERROR} />}
        <Button
          theme={ButtonTheme.OUTLINE}
          onClick={handleAddComment}
          disabled={isLoading}
        >
          {t('Добавить комментарий')}
        </Button>
      </div>
    </DynamicComponentLoader>
  );
};

export default AddCommentForm;
