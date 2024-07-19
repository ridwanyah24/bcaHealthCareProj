import { combineReducers, configureStore} from '@reduxjs/toolkit'
import { apiSlice } from './app/lib/api/apiSlice'
import userSlice from './app/lib/api/userSlice'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const reduers = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userSlice
})

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['user']
}
const persistedReducer = persistReducer(persistConfig, reduers)
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)
