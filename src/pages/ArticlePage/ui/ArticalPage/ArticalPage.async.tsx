import { lazy } from 'react';

export const ArticalPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // для теста лоадера
    setTimeout(() => resolve(import('./ArticalPage')), 1500);
}));
