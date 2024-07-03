import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleImageBC.module.scss'
import { memo } from 'react'
import { ArticleImageBlock } from '../../model/types/artilce'
import { Text } from 'shared/ui/Text/Text'

interface ArticleImageBCProps {
    className?: string,
    block: ArticleImageBlock
}

export const ArticleImageBC = memo((props: ArticleImageBCProps) => {

  const {
    className,
    block
  } = props

  return (
    <div className={classNames(cls.ArticleImageBC, {}, [className])}>
        <img 
          src={block.src} 
          alt="image"
          className={cls.img}
        />
        {block.title &&
          <Text text={block.title}/>
        }
    </div>
  )
})