import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // для теста лоадера
    setTimeout(() => resolve(import('./MainPage')), 1500);
}));
