import { EntityState } from "@reduxjs/toolkit";
import { Comment } from "app/entities/Comment";

export interface ArticleCommentSchema extends EntityState<Comment>{
    isLoading?: boolean;
    error?: string;
}