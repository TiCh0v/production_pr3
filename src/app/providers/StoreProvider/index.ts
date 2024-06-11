import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore } from './config/store';
import type { StateSchema, ReduxStoreWithManager, ThunkConfig} from './config/StateSchema';
import { AppDispatch } from './config/store';
export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    AppDispatch,
    ThunkConfig,
    
};
