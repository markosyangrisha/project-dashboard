import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ICryptocurrencies } from '../../../models/models'

interface ICoinState {
	loading: boolean
	error: string
	referenceCoins: ICryptocurrencies[]
	page: number
}

const initialState: ICoinState = {
	loading: false,
	error: '',
	referenceCoins: [],
	page: 1,
}

interface ICoinServerPayload {
	referenceCoins: ICryptocurrencies[]
	page: number
}

const referenceCoins = createSlice({
	name: 'reference',
	initialState,
	reducers: {
		fetching: state => {
			state.loading = true
		},
		fetchSuccessInPage: (state, action: PayloadAction<ICoinServerPayload>) => {
			state.loading = false
			state.referenceCoins = action.payload.referenceCoins
			state.page = action.payload.page
		},
		fetchError: (state, action: PayloadAction<Error>) => {
			state.loading = false
			state.error = action.payload.message
		},
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload
		},
	},
})

export const referenceReducer = referenceCoins.reducer

export const { fetching, fetchSuccessInPage, fetchError, setPage } = referenceCoins.actions
