//======================Store setup ==========================================//
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { baseApi } from '../service/api';
import AsyncStorage from '@react-native-async-storage/async-storage';  // Import AsyncStorage
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/query';
import userReducer from './slices/userSlice';
import themeReducer from './slices/themeSlice';

// Combine reducers
const reducers = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  user: userReducer, //add reducer
  theme: themeReducer
});

// Define persist config using AsyncStorage as storage
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,  // Replace MMKV with AsyncStorage
  whitelist: ['auth', 'api'], // Only persist 'auth' and 'api' slices
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, reducers);

// Configure store with middleware
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware), // Add RTK Query middleware
});

// Initialize persistor
const persistor = persistStore(store);

// Set up listeners for cache invalidation and state synchronization
setupListeners(store.dispatch);

// Export store and persistor
export { store, persistor };

// Define types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Purge store if needed (optional)
export const purgeStore = async () => {
  try {
    await persistor.purge();
    await persistor.flush();
    // Optionally, you can pause the persistor after purge if needed
    // persistor.pause();
  } catch (error) {
    console.error('Failed to purge store:', error);
  }
};
