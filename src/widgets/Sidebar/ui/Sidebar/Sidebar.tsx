import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
//

interface SidebarProps {
    className?: string,
}

export const Sidebar = ({className}: SidebarProps) => {

  const [colapsed, setColapsed] = useState(false);
  const onToggle = () =>{
    setColapsed(!colapsed)
  }
  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: colapsed}, [className])}>
      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
      <button onClick={onToggle}>toggle</button>
    </div>
  )
}