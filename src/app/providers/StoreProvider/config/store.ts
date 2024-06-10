import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { counterReducer } from 'app/entities/Counter'
import { userReducer } from 'app/entities/User';

import { createReducerManager } from './reduceManager';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        
    };


    const reducerManager = createReducerManager(rootReducers)


    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    //@ts-ignore
    store.reducerManager = reducerManager;

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch