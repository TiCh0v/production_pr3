import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import React, {useState} from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'shared/ui/LangSwitcher'
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { Button } from 'shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

import MainIcon from 'shared/assets/icons/main-20-20.svg'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'

interface SidebarProps {
    className?: string,
}

export const Sidebar = ({className}: SidebarProps) => {
  const { t } = useTranslation();
  const [collapsed, setColapsed] = useState(false);
  const onToggle = () =>{
    setColapsed(!collapsed)
  }
  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
    <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
    >
        {collapsed ? '>' : '<'}
    </Button>
    <div className={cls.items}>
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={RoutePath.main}
            className={cls.item}
        >
            <MainIcon className={cls.icon} />
            <span className={cls.link}>
                {t('Главная')}
            </span>
        </AppLink>
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={RoutePath.about}
            className={cls.item}
        >
            <AboutIcon className={cls.icon} />
            <span className={cls.link}>
                {t('О сайте')}
            </span>
        </AppLink>
    </div>
    <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher
            // short={collapsed}
            className={cls.lang}
        />
    </div>
</div>
  )
}