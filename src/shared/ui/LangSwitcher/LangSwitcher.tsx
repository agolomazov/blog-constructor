import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = ({
  className,
  short = false,
}: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
      size={ButtonSize.M}
    >
      {short ? t('Короткий язык') : t('Язык')}
    </Button>
  );
};
