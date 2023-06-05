import { useAppSelector } from 'app/providers/StoreProvider';
import {
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  getProfileReadonly,
  ProfileCard,
  profileReducer,
} from 'entities/Profile';
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import {
  DynamicComponentLoader,
  ReducersList,
} from 'shared/lib/components/DynamicComponentLoader/DynamicComponentLoader';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

interface Props {
  className?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC<Props> = ({ className }) => {
  const dispatch = useDispatch();
  const data = useAppSelector(getProfileData);
  const isLoading = useAppSelector(getProfileIsLoading);
  const error = useAppSelector(getProfileError);
  const readonly = useAppSelector(getProfileReadonly);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicComponentLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHeader />
        <ProfileCard
          data={data}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
        />
      </div>
    </DynamicComponentLoader>
  );
};

export default ProfilePage;
