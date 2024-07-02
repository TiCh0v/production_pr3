import { createSlice } from '@reduxjs/toolkit'
import { ArticleDetailsSchema } from '../types/ArticalSchema';
import { fetchAarticleById } from '../services/fetchArticleById';
import { IArticle } from '../types/artilce';
import { PayloadAction } from '@reduxjs/toolkit';

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  data: undefined,
  error: undefined,
  
}

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAarticleById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchAarticleById.fulfilled, (
                state,
                action: PayloadAction<IArticle>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchAarticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
})

// Action creators are generated for each case reducer function
export const { actions: articleActions } = articleSlice;
export const { reducer: articleReducer } = articleSlice;