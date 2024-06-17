import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';
import { memo } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'app/entities/User';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed?: boolean;
    authOnly?: boolean
}

export const SidebarItem = memo(({ item, collapsed, authOnly }: SidebarItemProps) => {
    const { t } = useTranslation();
    const Icon = item.Icon;

    const auth = useSelector(getUserAuthData)

    if(item.authOnly && !auth){
        return null;
    } 

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            {Icon && <Icon className={cls.icon} />}
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
});
