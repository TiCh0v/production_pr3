import { getUserAuthData } from 'app/entities/User';
import React, {Suspense, useMemo, memo} from 'react';
import { useSelector } from 'react-redux';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {

    const isAuth = useSelector(getUserAuthData)

    const routes = useMemo(() => {
        return Object.values(routeConfig).filter(route => {
            if (route.authOnly && !isAuth) {
                return false
            }

            return true
        })
    }, [isAuth])

    if (isAuth){

    }

    return (
    
        <Routes>
            {routes.map(({element, path}) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<div>Loading...</div>}>
                            <div className='page-wrapper'>
                                {element}
                            </div>
                        </Suspense>
                    )}
                />
            ))}
        </Routes>
        
    );
};

export default memo(AppRouter);
