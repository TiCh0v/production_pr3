import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from 'app/entities/User';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getAddCommentFormText } from '../selectors/addCommentFormSelectors';
import { getArticleData } from 'app/entities/Article/model/selectors/getArticleData';
import { addCommentActions } from '../slice/addCommentSlice';
import { fetchComments } from 'pages/ArticlePage/model/services/fetchComments';



export const sendComment = createAsyncThunk<
    Comment, 
    void, 
    ThunkConfig<string>
    >(
    'addCommentForm/sendComment',
    async (authData, thunkApi) => {

        const {extra, dispatch, rejectWithValue, getState} = thunkApi;

        const userData = getUserAuthData(getState())
        const text = getAddCommentFormText(getState())
        const article = getArticleData(getState())

        if (!text || !article || !userData){
            return rejectWithValue('no data')
        }

        try {
    
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text
            })
            
            console.log(response.status)
            if (!response.data) {
                throw new Error();
            }

            dispatch(addCommentActions.setText(''))
            dispatch(fetchComments(article.id))

            return response.data;
            
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
