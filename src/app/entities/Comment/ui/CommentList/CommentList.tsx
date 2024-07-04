import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentList.module.scss'
import { memo } from 'react'

import { Text } from 'shared/ui/Text/Text'
import { CommentCard } from '../CommentCard/CommentCard'
import { Comment } from '../../modal/types/comment'

interface CommentListProps {
    className?: string,
    comments?: Comment[],
    isLoading?: boolean,
    error?: string
}

export const CommentList = memo((props: CommentListProps) => {

    const {
        className,
        comments
    } = props;

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            {comments?.length 
                ? comments.map(comment => <CommentCard comment={comment}/>)
                : <Text text="no comments"/>
            }
        </div>
    )
})