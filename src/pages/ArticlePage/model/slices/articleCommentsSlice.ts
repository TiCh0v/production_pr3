import { createSlice, createEntityAdapter, EntityState } from "@reduxjs/toolkit";
import { ArticleCommentSchema } from "../types/ArticleCommentSchema";
import { Comment } from "app/entities/Comment";
import { StateSchema } from "app/providers/StoreProvider";
import { fetchComments } from "../services/fetchComments";
import { PayloadAction } from "@reduxjs/toolkit";



// const initialState: ArticleCommentSchema = {
//     isLoading?: false,
//     error?: "",
//     data?
// }


const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id
});


export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleComments || commentsAdapter.getInitialState()
)


const articleCommentsSlice = createSlice({
    name: "comments",
    initialState: commentsAdapter.getInitialState<ArticleCommentSchema>({
        isLoading: false,
        error: undefined,
        ids: ['1', '2'],
        entities: {}
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchComments.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        })
        .addCase(fetchComments.fulfilled, (
            state,
            action: PayloadAction<Comment[]>,
        ) => {
            state.isLoading = false;
            commentsAdapter.setAll(state, action.payload)
        })
        .addCase(fetchComments.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})


export const { actions: articleCommentActions } = articleCommentsSlice;
export const { reducer: articleCommentReducer } = articleCommentsSlice;


// const initialState: ArticleDetailsSchema = {
//     isLoading: false,
//     data: undefined,
//     error: undefined,
    
//   }
  
//   export const articleSlice = createSlice({
//       name: 'article',
//       initialState,
//       reducers: {},
//       extraReducers: (builder) => {
//           builder
//               .addCase(fetchAarticleById.pending, (state) => {
//                   state.error = undefined;
//                   state.isLoading = true;
//               })
//               .addCase(fetchAarticleById.fulfilled, (
//                   state,
//                   action: PayloadAction<IArticle>,
//               ) => {
//                   state.isLoading = false;
//                   state.data = action.payload;
//               })
//               .addCase(fetchAarticleById.rejected, (state, action) => {
//                   state.isLoading = false;
//                   state.error = action.payload;
//               })
//       },
//   })
  
//   // Action creators are generated for each case reducer function
//   export const { actions: articleActions } = articleSlice;
//   export const { reducer: articleReducer } = articleSlice;