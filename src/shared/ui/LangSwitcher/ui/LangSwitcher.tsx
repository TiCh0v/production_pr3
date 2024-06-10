import { useTranslation } from 'react-i18next';


import 'shared/config/i18n/i18n';
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { memo } from 'react';

//

interface LangSwitcherProps {
    className?: string,
    
}

export const LangSwitcher = memo(({className}: LangSwitcherProps) => {

    const {t, i18n} = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <Button 
            onClick={toggle}
            className={classNames(cls.langSwitcher, {}, [className])}
            theme={ButtonTheme.CLEAR}
        >
            {t('RU')}
        </Button>
    )
})