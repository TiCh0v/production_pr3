import React, { useState, useCallback, useEffect } from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'app/features/AuthByUsername';
import { getUserAuthData, userActions } from 'app/entities/User';
import { useSelector, useDispatch } from 'react-redux';



interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    
    const { t } = useTranslation();
    const dispatch = useDispatch();
    
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);


    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    const authdata = useSelector(getUserAuthData);

    if (authdata) {
        return (
            <div className={classNames (cls.navbar, {}, [className])}>
                
                <Button  onClick={onLogout}>
                    {t('Выйти')}
                </Button>
                {/* <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/> */}
            </div>
        );

    }






    return (
        <div className={classNames (cls.navbar, {}, [className])}>
            
            <Button  onClick={onShowModal}>
                {t('Войти')}
            </Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>}
        </div>
    );
};
