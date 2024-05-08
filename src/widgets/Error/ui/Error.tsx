import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Error.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button';

//

interface ErrorProps {
    className?: string,
}

export const Error = ({className}: ErrorProps) => {

    const {t} = useTranslation();

    const reload = () => {
        location.reload();
    }
    return (
        <div className={classNames(cls.error, {}, [className])}>
            <h1>{t('Something went wrong')}</h1>
            <Button onClick={reload}>
                {t('refresh')}
            </Button>
        </div>
    )
}