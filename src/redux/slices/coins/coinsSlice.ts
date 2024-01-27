import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ICryptocurrencies } from '../../../models/models'

interface ICoinState {
	loading: boolean
	error: string
	coins: ICryptocurrencies[]
}

const initialState: ICoinState = {
	loading: false,
	error: '',
	coins: [],
}

const coinSlice = createSlice({
	name: 'coin',
	initialState,
	reducers: {
		fetching: state => {
			state.loading = true
		},
		fetchSuccess: (state, action: PayloadAction<ICryptocurrencies[]>) => {
			state.loading = false
			state.coins = action.payload
		},
		fetchError: (state, action: PayloadAction<Error>) => {
			state.loading = false
			state.error = action.payload.message
		},
	},
})

export const coinReducer = coinSlice.reducer

export const { fetching, fetchSuccess, fetchError } = coinSlice.actions
