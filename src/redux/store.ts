import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { coinSearchReducer } from './slices/coinSearchSlice/coinSearchSlice'
import { coinReducer } from './slices/coins/coinsSlice'
import { referenceReducer } from './slices/reference/referenceSlice';

const rootReducer = combineReducers({
	coinReducer,
	coinSearchReducer,
	referenceReducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
