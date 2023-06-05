import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { getProfileReadonly, profileActions } from 'entities/Profile';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text';
import cls from './ProfilePageHeader.module.scss';

interface Props {
  className?: string;
}

export const ProfilePageHeader: FC<Props> = ({ className }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const readonly = useAppSelector(getProfileReadonly);

  const handleEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const handleSaveOrCancel = useCallback(() => {
    dispatch(profileActions.setReadonly(true));
  }, [dispatch]);

  return (
    <div className={classNames(cls.profilePageHeader, {}, [className || ''])}>
      <Text title={t('Профиль')} />
      <div className={cls.actions}>
        {readonly && (
          <Button
            className={cls.editBtn}
            theme={ButtonTheme.OUTLINE}
            onClick={handleEdit}
          >
            {t('Редактировать')}
          </Button>
        )}
        {!readonly && (
          <>
            <Button
              className={classNames('', undefined, [
                cls.editBtn,
                cls.actionBtn,
              ])}
              theme={ButtonTheme.OUTLINE}
              onClick={handleSaveOrCancel}
            >
              {t('Сохранить')}
            </Button>
            <Button
              className={classNames('', undefined, [
                cls.editBtn,
                cls.actionBtn,
              ])}
              theme={ButtonTheme.OUTLINE}
              onClick={handleSaveOrCancel}
            >
              {t('Отменить')}
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
