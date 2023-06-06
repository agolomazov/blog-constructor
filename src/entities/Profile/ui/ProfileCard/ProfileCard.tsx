import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames';
import { Avatar } from 'shared/ui/Avatar';
import { Input } from 'shared/ui/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextTheme } from 'shared/ui/Text';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

type UpdateProfile = (value: string) => void;

interface Props {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstName?: UpdateProfile;
  onChangeLastName?: UpdateProfile;
  onChangeAge?: UpdateProfile;
  onChangeCity?: UpdateProfile;
  onChangeUsername?: UpdateProfile;
  onChangeAvatar?: UpdateProfile;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard: FC<Props> = ({
  className,
  data,
  isLoading,
  error,
  readonly = true,
  onChangeFirstName,
  onChangeLastName,
  onChangeAge,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
}) => {
  const { t } = useTranslation('profile');

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

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
    <div className={classNames(cls.profileCard, mods, [className])}>
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data.avatar} alt={data.username} />
          </div>
        )}
        <Input
          className={cls.input}
          value={data?.first}
          placeholder={t('Ваше имя')}
          readonly={readonly}
          onChange={onChangeFirstName}
        />
        <Input
          className={cls.input}
          value={data?.lastname}
          placeholder={t('Ваше фамилия')}
          readonly={readonly}
          onChange={onChangeLastName}
        />
        <Input
          className={cls.input}
          value={data?.age?.toString()}
          placeholder={t('Ваш возраст')}
          readonly={readonly}
          onChange={onChangeAge}
        />
        <CountrySelect
          value={data?.country}
          disabled={readonly}
          onChange={onChangeCountry}
          className={cls.input}
        />
        <Input
          className={cls.input}
          value={data?.city}
          placeholder={t('Город проживания')}
          readonly={readonly}
          onChange={onChangeCity}
        />
        <Input
          className={cls.input}
          value={data?.username}
          placeholder={t('Ваш nickname')}
          onChange={onChangeUsername}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.avatar}
          placeholder={t('Ваш аватар')}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
        <CurrencySelect
          value={data?.currency}
          disabled={readonly}
          className={cls.input}
          onChange={onChangeCurrency}
        />
      </div>
    </div>
  );
};
