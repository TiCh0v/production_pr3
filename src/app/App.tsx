import React, { Suspense, useEffect, useState } from 'react';

import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import { Sidebar } from 'widgets/Sidebar';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { useDispatch } from 'react-redux';
import { userActions } from './entities/User';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(userActions.initAuth())
        
    }, [])
    
    // useEffect(() =>{
    //     throw new Error
    // }, [])


    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                

                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
