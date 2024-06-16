import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, profileActions, profileReducer } from 'app/entities/Profile';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfileCard } from 'app/entities/Profile';


import { getProfileError } from 'app/entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from 'app/entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';

import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { getReadOnly } from 'app/entities/Profile/model/selectors/getReadOnly/getReadOnly';
import { getProfileForm } from 'app/entities/Profile/model/selectors/getProfileForm/getProfileForm';

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


    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    const changeFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfileData({first: value || ''}))
    }, [dispatch])

    const changeLastName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfileData({lastname: value || ''}))
    }, [dispatch]);

    const changeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfileData({age: Number(value || 0) }))
    }, [dispatch]);

    const changeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfileData({city: value || ''}))
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} unmountRemove={true}>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                <ProfileCard 
                    data={formData} 
                    error={error} 
                    isLoading={isLoading}
                    readonly={readonly}
                    changeFirstName={changeFirstName}
                    changeLastName={changeLastName}
                    changeAge={changeAge}
                    changeCity={changeCity}
                />

            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
