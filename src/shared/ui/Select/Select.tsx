import { Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'
import { ChangeEvent, ChangeEventHandler, useCallback, useMemo } from 'react'

//

export interface SelectOption {
    value: string,
    content: string
}

interface SelectProps {
    className?: string,
    label?: string,
    options?: SelectOption[],
    value?: string,
    onChange?: (value: string) => void
    readonly?: boolean
}

export const Select = (props: SelectProps) => {

    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly
    } = props;

    const optionList = useMemo(() => {
        return options?.map(opt => (
            <option 
                className={cls.option} 
                value={opt.value} 
                key={opt.value}
            >
                {opt.content}
            </option>
        ))
    }, [options])


    const mods: Mods = {

    }

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.SelectWrapper, mods, [className])}>
            {label && <span className={cls.label}>{label}</span>}
            <select 
                value={value}
                className={cls.select}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionList}
            </select>
        </div>
    )
}