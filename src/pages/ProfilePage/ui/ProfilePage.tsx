import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ValidateProfileErrors, fetchProfileData, profileActions, profileReducer } from 'app/entities/Profile';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfileCard } from 'app/entities/Profile';
import { Text, textTheme } from 'shared/ui/Text/Text';

import { getProfileError } from 'app/entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from 'app/entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';

import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { getReadOnly } from 'app/entities/Profile/model/selectors/getReadOnly/getReadOnly';
import { getProfileForm } from 'app/entities/Profile/model/selectors/getProfileForm/getProfileForm';
import { Currency } from 'app/entities/Currency';
import { getProfileValidateErrors } from 'app/entities/Profile/model/selectors/getProfileValidateError/getProfileValidateError';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch()

    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getReadOnly);
    const validateError = useSelector(getProfileValidateErrors);

    const validateErrorTranslates = {
        [ValidateProfileErrors.SERVER_ERROR]: 'server error during saving',
        [ValidateProfileErrors.NO_DATA]: 'no data',
        [ValidateProfileErrors.INCORRECT_USER_DATA]: 'first and last name are neccesary',
        [ValidateProfileErrors.INCORRECT_AGE]: 'incorrect age',
        [ValidateProfileErrors.INCORRECT_USERNAME]: 'incorrect username',
    };

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    const changeFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({first: value || ''}))
    }, [dispatch])

    const changeLastName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({lastname: value || ''}))
    }, [dispatch]);

    const changeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({age: Number(value || 0) }))
    }, [dispatch]);

    const changeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({city: value || ''}))
    }, [dispatch]);

    const changeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({avatar: value || ''}))
    }, [dispatch]);

    const changeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({username: value || ''}))
    }, [dispatch]);

    const changeCurrency = useCallback((value?: Currency) => {
        dispatch(profileActions.updateProfile({currency: value}))
    }, [dispatch]);



    return (
        <DynamicModuleLoader reducers={reducers} unmountRemove={true}>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                {validateError?.length && validateError.map((err) => (
                    <Text 
                        key={err}
                        theme={textTheme.ERROR}
                        text={validateErrorTranslates[err]}
                    />
                ))}
                <ProfileCard 
                    data={formData} 
                    error={error} 
                    isLoading={isLoading}
                    readonly={readonly}
                    changeFirstName={changeFirstName}
                    changeLastName={changeLastName}
                    changeAge={changeAge}
                    changeCity={changeCity}
                    changeAvatar={changeAvatar}
                    changeUsername={changeUsername}
                    changeCurrency={changeCurrency}
                />

            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
