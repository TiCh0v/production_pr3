import { AddCommentSchema } from "../types/addComment";

import { 
    createSlice, 
    PayloadAction
} from "@reduxjs/toolkit";




const initialState: AddCommentSchema = {
    text: ''
}

export const addCommentSlice = createSlice({
  name: 'addComment',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
        state.text = action.payload
    },
  }
//   extraReducers: (builder) => {
//     builder
//     .addCase(loginByUsername.pending, (state) => {
//         state.isLoading = true;
//         state.error = undefined
//     })
//     .addCase(loginByUsername.fulfilled, (state) => {
//         state.isLoading = false;
        
//     })
//     .addCase(loginByUsername.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//     });
//   }
})




// Action creators are generated for each case reducer function
export const { actions: addCommentActions } = addCommentSlice;
export const { reducer: addCommentReducer } = addCommentSlice;