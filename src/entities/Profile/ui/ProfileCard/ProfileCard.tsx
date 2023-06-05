import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Input } from 'shared/ui/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextTheme } from 'shared/ui/Text';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface Props {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
}

export const ProfileCard: FC<Props> = ({
  className,
  data,
  isLoading,
  error,
  readonly = true,
}) => {
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div
        className={classNames(cls.profileCard, { [cls.loading]: true }, [
          className,
        ])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={classNames(cls.profileCard, { [cls.error]: true }, [
          className,
        ])}
      >
        <Text
          theme={TextTheme.ERROR}
          text={t('Попробуйте перезагрузить страницу')}
          title={t('Произошла ошибка при загрузке профиля')}
          align="center"
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.profileCard, {}, [className])}>
      <div className={cls.data}>
        <Input
          className={cls.input}
          value={data?.first}
          placeholder={t('Ваше имя')}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.lastname}
          placeholder={t('Ваше фамилия')}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.age?.toString()}
          placeholder={t('Ваш возраст')}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.country}
          placeholder={t('Страна проживания')}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.city}
          placeholder={t('Город проживания')}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.username}
          placeholder={t('Ваш nickname')}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.currency}
          placeholder={t('Ваша валюта')}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
