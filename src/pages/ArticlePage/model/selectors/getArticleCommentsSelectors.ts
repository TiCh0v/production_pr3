import { StateSchema } from "app/providers/StoreProvider";

export const getArticleCommentsError = (state: StateSchema) => state.articleComments?.error
export const getArticleCommentsIsLoading = (state: StateSchema) => state?.articleComments?.isLoading
