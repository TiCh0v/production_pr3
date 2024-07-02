import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Article.module.scss'
import { useCallback, useEffect } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchAarticleById } from '../../model/services/fetchArticleById'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { getArticleData, getArticleError, getArticleIsLoading } from '../../model/selectors/getArticleData'
import { Text, textSize, textTheme } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar'
import EyeIcon from "shared/assets/icons/eye-20-20.svg"
import CalendarIcon from "shared/assets/icons/calendar-20-20.svg"
import { Icon } from 'shared/ui/Icon/Icon'
import { ArticleBlock, ArticleBlockType } from '../../model/types/artilce'
import { ArticleCodeBC } from '../ArticleCodeBC/ArticleCodeBC'
import { ArticleImageBC } from '../ArticleImageBC/ArticleImageBC'
import { ArticleTextBC } from '../ArticleTextBC/ArticleTextBC'

//

interface ArticleProps {
    className?: string,
    id: string;
}

export const Article = memo(({className, id}: ArticleProps) => {

    const dispatch = useAppDispatch()

    // const isLoading = useSelector(getArticleIsLoading)
    const error = useSelector(getArticleError)
    const data = useSelector(getArticleData)
    const isLoading = false


    const renderBlock = useCallback((block: ArticleBlock) => {
        switch(block.type){
            case ArticleBlockType.CODE:
                return <ArticleCodeBC className={cls.block} />

            case ArticleBlockType.TEXT:
                return <ArticleTextBC className={cls.block} block={block}/>

            case ArticleBlockType.IMAGE:
                return <ArticleImageBC className={cls.block} />

            default:
                return null;
        }
    }, [])


    useEffect(() => {
       dispatch(fetchAarticleById(id))
    }, [dispatch, id])

    let content

    if(error) {
        content = (
            <Text title={'Article loading error'} theme={textTheme.ERROR}/>
        )
    } else if(isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width="60%" height={32} />
                <Skeleton className={cls.skeleton} width="100%" height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        );
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar 
                        size={AvatarSize.L} 
                        src={data?.img} 
                        className={cls.avatar}
                    />
                </div>
                <Text 
                    title={data?.title}
                    text={data?.subtitle}
                    size={textSize.M}
                />
                <div className={cls.articleInfo}>
                    <div className={cls.infoBlocks}>  
                        <Icon Svg={EyeIcon} className={cls.icon}/>                  
                        <Text text={data?.views}/>
                    </div>
                    <div className={cls.infoBlocks}>        
                        <Icon Svg={CalendarIcon} className={cls.icon}/>   
                        <Text text={data?.createdAt} />
                    </div>
                </div>
                {data?.blocks.map(renderBlock)}
            
            </>
        )
    }

    

    return (
        <div className={classNames(cls.Article, {}, [className])}>
            {content}
        </div>
    )
})