import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import React, {useState, memo, useMemo} from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { useSelector } from 'react-redux'
import { LangSwitcher } from 'shared/ui/LangSwitcher'
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { Button } from 'shared/ui/Button/Button'
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from 'widgets/Sidebar/model/getSedebarItems'


interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const SidebarItemsList = useSelector(getSidebarItems)

    const itemsList = useMemo(() => SidebarItemsList.map((item) => (
        <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
           
        />
    )), [collapsed, SidebarItemsList]);

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
                {itemsList}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    // short={collapsed}
                    className={cls.lang}
                />
            </div>
        </div>
    );
});
