import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Code.module.scss'
import { ReactNode, memo } from 'react'
import { Button, ButtonTheme } from '../Button/Button';
//

interface CodeProps {
    className?: string,
    children: ReactNode,
    onClick: () => void
}

export const Code = memo((props: CodeProps) => {

    const {
        className,
        children,
        onClick
    } = props;

    return (

        <pre className={classNames(cls.Code, {}, [className])}>
            <Button 
                className={cls.copyBtn}
                theme={ButtonTheme.OUTLINE}
                onClick={onClick}
            >
                Copy
            </Button>
            <code>
                {children}
            </code>
        </pre>
    )
})