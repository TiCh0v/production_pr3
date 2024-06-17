import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

import { User, userActions } from 'app/entities/User';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, {dispatch, extra, rejectWithValue}) => {
        try {
    
            const response = await extra.api.post<User>('/login', authData)
            
            console.log(response.status)
            if (!response.data) {
                throw new Error();
            }

      
            await localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            await dispatch(userActions.setAuthData(response.data));

            return response.data;
            
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
