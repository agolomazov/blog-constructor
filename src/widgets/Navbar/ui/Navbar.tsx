import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';

import { Modal } from 'shared/ui/Modal';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni';

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        className={cls.links}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onToggleModal}
        size={ButtonSize.M}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        <p>{content}</p>
      </Modal>
    </div>
  );
};
