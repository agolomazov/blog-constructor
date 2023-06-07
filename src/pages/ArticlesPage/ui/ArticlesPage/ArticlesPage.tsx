import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import cls from './ArticlesPage.module.scss';

interface Props {
  className?: string;
}

const ArticlesPage: FC<Props> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.articlesPage, {}, [className || ''])}>
      {t('Список статей')}
    </div>
  );
};

export default memo(ArticlesPage);
