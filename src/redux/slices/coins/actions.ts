import axiosInstance from '../../../axios/axios'
import { ICryptocurrencies } from '../../../models/models'
import { AppDispatch } from '../../store'
import { fetchError, fetchSuccess, fetching } from './coinsSlice'

export const fetchCoins = () => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(fetching())
			const response = await axiosInstance.get<ICryptocurrencies[]>(`cryptocurrencies`)

			dispatch(fetchSuccess(response.data))
		} catch (error) {
			dispatch(fetchError(error as Error))
			console.log(error)
		}
	}
}
