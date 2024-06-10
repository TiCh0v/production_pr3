import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginModal.module.scss'
import { LoginFormAsync } from '../LoginForm/LoginFrom.async'
import { Modal } from 'shared/ui/Modal/Modal'
import { Suspense } from 'react'
//


interface LoginModalProps {
    className?: string,
    isOpen: boolean,
    onClose: () => void
}

export const LoginModal = ({className, isOpen, onClose}: LoginModalProps) => {
  return (
    <Modal 
        className={classNames(cls.LoginModal, {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
    >
      <Suspense fallback='loading'>
        <LoginFormAsync onSuccess={onClose}/>
      </Suspense>
    </Modal>
  )
}