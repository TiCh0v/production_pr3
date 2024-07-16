import { lazy } from 'react';

export const AddCommentFormAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // для теста лоадера
    setTimeout(() => resolve(import('./AddCommentForm')), 1500);
}));
