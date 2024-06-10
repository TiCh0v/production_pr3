import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useCallback, memo, useState, useEffect } from 'react';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, textTheme } from 'shared/ui/Text/Text';

import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
//

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers : ReducersList = {
    loginForm: loginReducer
}

const LoginForm = memo(({className, onSuccess}: LoginFormProps) => {

    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    
    // const {username, password, isLoading, error} = useSelector(getLoginState);

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);



    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch]);

    const onAuth = useCallback( async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        console.log(result)
        if(result.meta.requestStatus === 'fulfilled'){
            onSuccess()
        }
    
    }, [onSuccess, dispatch, password, username]);

    return (
        <DynamicModuleLoader
            reducers={initialReducers}
            unmountRemove={true}
        >
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Input 
                    type="text" 
                    className={cls.input} 
                    placeholder='Введите никнейм'
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input 
                    type="password" 
                    className={cls.input} 
                    placeholder='Введите пароль'
                    onChange={onChangePassword}
                    value={password}
                />
                <Button 
                    className={cls.loginBtn}
                    onClick={onAuth}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
                {error && <Text text={error} theme={textTheme.ERROR}/>}
            </div>
        </DynamicModuleLoader>
    )
})

export default LoginForm