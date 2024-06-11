import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';
import { memo } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { useTranslation } from 'react-i18next';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed?: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const Icon = item.Icon;

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
