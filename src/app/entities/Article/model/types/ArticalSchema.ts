import { IArticle } from "./artilce";

export interface ArticleDetailsSchema{
    isLoading: boolean;
    error?: string;
    data?: IArticle;
}