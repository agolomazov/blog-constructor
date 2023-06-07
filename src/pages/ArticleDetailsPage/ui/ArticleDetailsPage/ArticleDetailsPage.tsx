import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import cls from './ArticleDetailsPage.module.scss';

interface Props {
  className?: string;
}

const ArticleDetailsPage: FC<Props> = ({ className }) => {
  const { t } = useTranslation('article');

  return (
    <div className={classNames(cls.articleDetailsPage, {}, [className || ''])}>
      {t('Детальная статья')}
    </div>
  );
};

export default memo(ArticleDetailsPage);
