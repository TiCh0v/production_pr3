import { lazy } from 'react';

export const CatalogPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // для теста лоадера
    setTimeout(() => resolve(import('./CatalogPage')), 1500);
}));
