import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

import { User, userActions } from 'app/entities/User';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData);
            console.log(response.status)
            if (!response.data) {
                throw new Error();
            }

      
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
            
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);






// import { createAsyncThunk } from "@reduxjs/toolkit"
// import axios from "axios"
// import { User } from "app/entities/User"

// interface LoginByUsernameProps {
//     username: string,
//     password: string
// }

// export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
//     'login/loginByUsername',
//     async ({username, password}: LoginByUsernameProps, thunkAPI) => {
//         try {
//             const response = await axios.post<User>('http://localhost:8000/login', {
//                 username, password
//             });
//             if (!response.data){
//                 throw new Error();
//             }
//             return response.data;
//         } catch(e) {
//             // console.log(e);
//             return thunkAPI.rejectWithValue(e)
//         }
//     }
// );


