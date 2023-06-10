import { useAppSelector } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  ProfileCard,
  profileReducer,
} from 'entities/Profile';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { FC, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import {
  DynamicComponentLoader,
  ReducersList,
} from 'shared/lib/components/DynamicComponentLoader/DynamicComponentLoader';
import { Text, TextTheme } from 'shared/ui/Text';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

interface Props {
  className?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC<Props> = ({ className }) => {
  const { t } = useTranslation('profile');
  const dispatch = useDispatch();
  const data = useAppSelector(getProfileForm);
  const isLoading = useAppSelector(getProfileIsLoading);
  const error = useAppSelector(getProfileError);
  const readonly = useAppSelector(getProfileReadonly);
  const validateErrors = useAppSelector(getProfileValidateErrors);
  const { id } = useParams<{ id: string }>();

  const validateTranslateErrors: Record<ValidateProfileError, string> = {
    [ValidateProfileError.INCORRECT_USER_DATA]: t(
      'Некорректно заполнены данные о пользователе'
    ),
    [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректная страна'),
    [ValidateProfileError.NO_DATA]: t('Данные о пользователе пусты'),
    [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка'),
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  }, [dispatch, id]);

  const handleChangeFirstName = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          first: value,
        })
      );
    },
    [dispatch]
  );

  const handleChangeLastName = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          lastname: value,
        })
      );
    },
    [dispatch]
  );

  const handleChangeCity = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          city: value,
        })
      );
    },
    [dispatch]
  );

  const handleChangeAge = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          age: Number(value || 0),
        })
      );
    },
    [dispatch]
  );

  const handleChangeUsername = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          username: value,
        })
      );
    },
    [dispatch]
  );

  const handleChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          avatar: value,
        })
      );
    },
    [dispatch]
  );

  const handleChangeCurrency = useCallback(
    (value?: Currency) => {
      dispatch(
        profileActions.updateProfile({
          currency: value,
        })
      );
    },
    [dispatch]
  );

  const handleChangeCountry = useCallback(
    (value?: Country) => {
      dispatch(
        profileActions.updateProfile({
          country: value,
        })
      );
    },
    [dispatch]
  );

  return (
    <DynamicComponentLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHeader />
        {validateErrors?.length > 0
          && validateErrors.map((err) => (
            <Text
              theme={TextTheme.ERROR}
              title={validateTranslateErrors[err]}
              key={err}
            />
          ))}
        <ProfileCard
          data={data}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstName={handleChangeFirstName}
          onChangeLastName={handleChangeLastName}
          onChangeAge={handleChangeAge}
          onChangeCity={handleChangeCity}
          onChangeAvatar={handleChangeAvatar}
          onChangeUsername={handleChangeUsername}
          onChangeCurrency={handleChangeCurrency}
          onChangeCountry={handleChangeCountry}
        />
      </div>
    </DynamicComponentLoader>
  );
};

export default ProfilePage;
