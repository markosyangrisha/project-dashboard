import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ICryptocurrencies } from '../../../models/models'

interface ICoinSearchState {
	loading: boolean
	error: string
	filteredCoin: ICryptocurrencies[]
	text: string
	noResult: boolean
}

const initialState: ICoinSearchState = {
	loading: false,
	error: '',
	filteredCoin: [],
	text: '',
	noResult: false,
}

const coinSearchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		toggleText: (state, action: PayloadAction<string>) => {
			state.text = action.payload
		},
		searchFetchSuccess: (state, action: PayloadAction<ICryptocurrencies[]>) => {
			state.loading = false
			state.filteredCoin = action.payload.filter(coin => coin.name.toLowerCase().includes(state.text.toLowerCase())
			)
			state.filteredCoin.length === 0
				? (state.noResult = true)
				: (state.noResult = false)
		},
	},
})

export const coinSearchReducer = coinSearchSlice.reducer
export const { searchFetchSuccess, toggleText } = coinSearchSlice.actions
