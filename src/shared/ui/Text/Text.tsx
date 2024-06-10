import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'
import { memo } from 'react'

//

export enum textTheme {
  PRIMARY = 'primary',
  SECONDADY = 'secondary',
  ERROR = 'error'
}

interface TextProps {
    className?: string,
    text?: string,
    title?: string,
    theme?: textTheme
}

export const Text = memo((props: TextProps) => {

  const {
    className,
    text,
    title,
    theme = textTheme.PRIMARY
  } = props;

  return (
    <div className={classNames(cls.Text, {[cls[theme]]: true}, [className])}>
        {title && <p className={cls.title}>{title}</p>}
        { text && <p className={cls.text}>{text}</p>}
    </div>
  )
})