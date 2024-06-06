import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, memo, useState } from 'react';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, textTheme } from 'shared/ui/Text/Text';
//

interface LoginFormProps {
    className?: string,
}

export const LoginForm = memo(({className}: LoginFormProps) => {

    const { t } = useTranslation();

    const dispatch = useDispatch();


    const loginForm = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch]);

    const onAuth = useCallback(() => {
        dispatch(loginByUsername({ username: loginForm.username, password: loginForm.password }));
    }, [dispatch, loginForm.password, loginForm.username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input 
                type="text" 
                className={cls.input} 
                placeholder='Введите никнейм'
                onChange={onChangeUsername}
                value={loginForm.username}
            />
            <Input 
                type="password" 
                className={cls.input} 
                placeholder='Введите пароль'
                onChange={onChangePassword}
                value={loginForm.password}
            />
            <Button 
                className={cls.loginBtn}
                onClick={onAuth}
                disabled={loginForm.isLoading}
            >
                {t('Войти')}
            </Button>
            {loginForm.error && <Text text={loginForm.error} theme={textTheme.ERROR}/>}
        </div>
    )
})