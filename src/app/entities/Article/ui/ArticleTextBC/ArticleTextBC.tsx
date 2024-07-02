import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleTextBC.module.scss'
import { memo } from 'react'
import { ArticleTextBlock } from '../../model/types/artilce'
import { Text } from 'shared/ui/Text/Text'

interface ArticleTextBCProps {
    className?: string,
    block: ArticleTextBlock
}

export const ArticleTextBC = memo((props: ArticleTextBCProps) => {

    const {
        block,
        className
    } = props;

    return (
        <div className={classNames(cls.ArticleTextBC, {}, [className])}>
            {block.title && (
                <Text 
                    title={block.title} 
                    className={cls.title}
                />
            )}
            {block.paragraphs.map((par) => (
                <Text text={par} key={par} className={cls.paragraph}/>
            ))}

        </div>
    )
})