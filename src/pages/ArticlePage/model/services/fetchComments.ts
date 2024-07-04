import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'app/entities/Comment';


export const fetchComments = createAsyncThunk<
    Comment[],
    string | undefined,
    ThunkConfig<string>
    >(
        'article/fetchComments',
        async (articleId, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            if(!articleId){
                return rejectWithValue('error')
            }

            try {
                const response = await extra.api.get<Comment[]>('/comments', {
                    params:{
                       articleId, 
                       _expand: 'user',
                    }
                });

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
