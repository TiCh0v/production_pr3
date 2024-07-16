import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentCard.module.scss'
import { memo } from 'react'

import {Comment} from '../../modal/types/comment'
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {

    const {
        className,
        comment,
        // isLoading
    } = props;

    const isLoading = false

    if(isLoading) {
        return(
            <div className={classNames(cls.Comment, {}, [className])}>
                <div className={cls.nickname}>
                    <Skeleton width={30} height={30} border={'50%'}/>
                    <Skeleton width={100} height={16}/>
                </div>
                <Skeleton width={'100%'} height={40} />
            </div>
        )
    }

    return (
        <div className={classNames(cls.Comment, {}, [className])}>
            <AppLink to={`${RoutePath.profile}${comment?.user.id}` } className={cls.nickname}>
                {comment?.user.avatar &&
                    <Avatar 
                        size={AvatarSize.S} 
                        src={comment?.user.avatar}
                    />
                }
                {comment?.user.username}
            </AppLink>
            {comment?.text}
        </div>
    )
})