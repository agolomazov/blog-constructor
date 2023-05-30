import { Button } from 'shared/ui/Button/Button';
import { FC } from 'react';
import { Input } from 'shared/ui/Input';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss';

interface Props {
  className?: string;
}

export const LoginForm: FC<Props> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.loginForm, {}, [className || ''])}>
      <Input className={cls.input} placeholder={t('Введите username')} autoFocus />
      <Input className={cls.input} placeholder={t('Введите пароль')} />
      <Button className={cls.loginBtn}>{t('Войти')}</Button>
    </div>
  );
};
