// import { configureStore } from '@reduxjs/toolkit'
// import timelineReducer  from '../features/timeline/timelineSlice'

// export const store = configureStore({
//   reducer: {
//       timeline:timelineReducer
//   },
// })

import { combineReducers, configureStore, } from '@reduxjs/toolkit';
import { persistReducer, persistStore} from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage'
import autoMergeLevel1 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1';
import timelineReducer  from '../features/timeline/timelineSlice'

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel1,
};

const reducers = combineReducers({
  timeline: timelineReducer,
});

const _persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: _persistedReducer
});

export const persistor = persistStore(store);