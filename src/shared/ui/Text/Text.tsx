import { Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'
import { memo } from 'react'

//

export enum textTheme {
  PRIMARY = 'primary',
  SECONDADY = 'secondary',
  ERROR = 'error'
}

export enum textSize {
  M = 'size_m',
  L = 'size_l',
}


interface TextProps {
    className?: string,
    text?: string | number,
    title?: string,
    theme?: textTheme
    size?: textSize
}

export const Text = memo((props: TextProps) => {

  const {
    className,
    text,
    title,
    theme = textTheme.PRIMARY,
    size = textSize.M 
  } = props;

  const mods: Mods = {
    [cls[theme]]: true,
    [cls[size]]: true,
  }

  return (
    <div className={classNames(cls.Text, mods, [className])}>
        {title && <p className={cls.title}>{title}</p>}
        { text && <p className={cls.text}>{text}</p>}
    </div>
  )
})