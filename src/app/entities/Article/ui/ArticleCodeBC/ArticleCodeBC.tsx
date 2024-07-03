import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleCodeBC.module.scss'
import { memo, useCallback } from 'react'
import { ArticleCodeBlock } from '../../model/types/artilce'
import { Code } from 'shared/ui/Code/Code';
//

interface ArticleCodeBCProps {
    className?: string,
    block: ArticleCodeBlock;
}

export const ArticleCodeBC = memo((props: ArticleCodeBCProps) => {
  const {
    className,
    block,
  } = props;

  const text = block.code

  const onClick = useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [text])

  return (
    <div className={classNames(cls.ArticleCodeBC, {}, [className])}>
        <Code onClick={onClick}>
          {block.code}
        </Code>
    </div>
)
})