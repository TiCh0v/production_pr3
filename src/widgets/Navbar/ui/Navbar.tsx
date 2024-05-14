import React, { useState, useCallback } from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';


interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    
    const { t } = useTranslation()
    
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames (cls.navbar, {}, [className])}>
            
            <Button  onClick={onToggleModal}>
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sint enim nulla quas natus similique error veritatis. Ratione ipsam earum facere error, sunt, voluptatem quas praesentium exercitationem molestiae, veniam nemo.  
            </Modal>
        </div>
    );
};
