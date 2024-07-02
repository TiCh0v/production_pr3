import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleCodeBC.module.scss'
import { memo } from 'react'
//

interface ArticleCodeBCProps {
    className?: string,
}

export const ArticleCodeBC = memo(({className}: ArticleCodeBCProps) => {
  return (
    <div className={classNames(cls.ArticleCodeBC, {}, [className])}>
        ArticleCodeBC
    </div>
  )
})