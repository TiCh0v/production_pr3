import { FC, ReactNode, useEffect } from 'react'
import { useStore, useDispatch } from 'react-redux'
import { Reducer } from '@reduxjs/toolkit'
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'



export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
    children: ReactNode
    reducers: ReducersList,
    unmountRemove: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {

    const { children, reducers, unmountRemove } = props;
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({type: `@INIT ${name} reducer`})

        })


        return () => {
            if(unmountRemove){
                Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
                    store.reducerManager.add(name, reducer);
                    dispatch({type: `@DELETED ${name} reducer`})
        
                })
            }
        }
    }, [])

    return (
        <>
            {children}
        </>
    )
}