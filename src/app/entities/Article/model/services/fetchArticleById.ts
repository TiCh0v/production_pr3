import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from '../types/artilce';

export const fetchAarticleById = createAsyncThunk<
    IArticle,
    string,
    ThunkConfig<string>
    >(
        'article/fetchArticleById',
        async (articleId, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                const response = await extra.api.get<IArticle>(`/articles/${articleId}`);

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
