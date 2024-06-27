import { getUserAuthData } from 'app/entities/User';
import React, {Suspense, useMemo, memo, useCallback} from 'react';
import { useSelector } from 'react-redux';
import {Route, Routes} from "react-router-dom";
import { routeConfig, AppRouteProps } from "shared/config/routeConfig/routeConfig";
import { RequireAuth } from './RequireAuth';


const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback='Loading...'>
                <div className="page-wrapper">
                    {route.element}
                </div>
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
};

export default memo(AppRouter);
