import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleImageBC.module.scss'
import { memo } from 'react'
//

interface ArticleImageBCProps {
    className?: string,
}

export const ArticleImageBC = memo(({className}: ArticleImageBCProps) => {
  return (
    <div className={classNames(cls.ArticleImageBC, {}, [className])}>
        ArticleImageBC
    </div>
  )
})