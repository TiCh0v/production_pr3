import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CatalogPage.module.scss'
import { memo } from 'react'
//

interface CatalogPageProps {
    className?: string,
}

const CatalogPage = ({className}: CatalogPageProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
        catalog
    </div>
  )
}

export default memo(CatalogPage)