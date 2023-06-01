import { profileReducer } from 'entities/Profile';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import {
  DynamicComponentLoader,
  ReducersList,
} from 'shared/lib/components/DynamicComponentLoader/DynamicComponentLoader';

interface Props {
  className?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC<Props> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <DynamicComponentLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className || ''])}>
        {t('Profile page')}
      </div>
    </DynamicComponentLoader>
  );
};

export default ProfilePage;
