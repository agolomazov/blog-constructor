import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from 'entities/Profile';
import { getUserAuthData } from 'entities/User';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text';
import cls from './ProfilePageHeader.module.scss';

interface Props {
  className?: string;
}

export const ProfilePageHeader = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const readonly = useAppSelector(getProfileReadonly);
  const authUser = useAppSelector(getUserAuthData);
  const profileData = useAppSelector(getProfileData);

  const handleEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const handleOnCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const handleOnSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  if (authUser?.id !== profileData?.id) {
    return null;
  }

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
              onClick={handleOnSave}
            >
              {t('Сохранить')}
            </Button>
            <Button
              className={classNames('', undefined, [
                cls.editBtn,
                cls.actionBtn,
              ])}
              theme={ButtonTheme.OUTLINE_RED}
              onClick={handleOnCancelEdit}
            >
              {t('Отменить')}
            </Button>
          </>
        )}
      </div>
    </div>
  );
});
