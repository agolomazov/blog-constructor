import { FC } from 'react';
import { Modal } from 'shared/ui/Modal';
import { classNames } from 'shared/lib/classNames';
import { LoginForm } from '../LoginForm/LoginForm';
import cls from './LoginModal.module.scss';

interface Props {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<Props> = ({ className, isOpen, onClose }) => (
  <Modal
    className={classNames(cls.loginModal, {}, [className])}
    isOpen={isOpen}
    onClose={onClose}
    lazy
  >
    <LoginForm />
  </Modal>
);
