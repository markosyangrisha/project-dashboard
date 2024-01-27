import axiosInstance from '../../../axios/axios'
import { ICryptocurrencies } from '../../../models/models'
import {  searchFetchSuccess } from './coinSearchSlice'
import { AppDispatch } from '../../store'

export const searchServerCoin = () => {
	return async (dispatch: AppDispatch) => {
		try {
			const response = await axiosInstance.get<ICryptocurrencies[]>('cryptocurrencies')
			
			dispatch(searchFetchSuccess(response.data))
		} catch (error) {
			console.log(error);
		}
	}
}

