import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input';
import { Text } from 'shared/ui/Text';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
// import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
// import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import cls from './ProfileCard.module.scss';

interface Props {
  className?: string;
}

export const ProfileCard: FC<Props> = ({ className }) => {
  const { t } = useTranslation('profile');

  const data = useSelector(getProfileData);
  // const isLoading = useSelector(getProfileIsLoading);
  // const error = useSelector(getProfileError);

  return (
    <div className={classNames(cls.profileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Профиль')} />
        <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
          {t('Редактировать')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          className={cls.input}
          value={data?.first}
          placeholder={t('Ваше имя')}
        />
        <Input
          className={cls.input}
          value={data?.lastname}
          placeholder={t('Ваше фамилия')}
        />
        <Input
          className={cls.input}
          value={data?.age?.toString()}
          placeholder={t('Ваш возраст')}
        />
        <Input
          className={cls.input}
          value={data?.country}
          placeholder={t('Страна проживания')}
        />
        <Input
          className={cls.input}
          value={data?.city}
          placeholder={t('Город проживания')}
        />
        <Input
          className={cls.input}
          value={data?.username}
          placeholder={t('Ваш nickname')}
        />
        <Input
          className={cls.input}
          value={data?.currency}
          placeholder={t('Ваша валюта')}
        />
      </div>
    </div>
  );
};
