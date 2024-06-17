import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'

//

export enum AvatarSize {
    S = 's',
    M = 'm',
    L = 'l',
}

interface AvatarProps {
    className?: string,
    src?: string,
    size?: AvatarSize,
}

export const Avatar = (props: AvatarProps) => {

    const {
        src,
        className,
        size = AvatarSize.M,
    } = props

    return (
        <img 
            src={src}
            alt='avatar'
            className={classNames(cls.Avatar, {}, [className, cls[size]])}
        />
    )
}