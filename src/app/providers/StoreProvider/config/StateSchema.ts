

import { CombinedState, EnhancedStore } from "@reduxjs/toolkit";
import { CounterSchema } from "app/entities/Counter";
import { UserSchema } from "app/entities/User";
import { LoginSchema } from "app/features/AuthByUsername";
import { ReducersMapObject, Reducer, AnyAction } from '@reduxjs/toolkit'

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;


    // acync reducers
    loginForm?: LoginSchema;
}

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}