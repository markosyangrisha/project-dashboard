import axiosInstance from '../../../axios/axios'
import { ICryptocurrencies } from '../../../models/models'
import { AppDispatch } from '../../store'
import { fetchSuccessInPage} from './referenceSlice'

export const referenceFetchServer = (page:number) => {
	return async (dispatch: AppDispatch) => {
		try {
			const response = await axiosInstance.get<ICryptocurrencies[]>(
				`cryptocurrencies?_limit=${'5'}&_page=${page}`
			)
				dispatch(fetchSuccessInPage({ referenceCoins: response.data, page }))

		} catch (error) {
			console.error('Error fetching data:', error)
		}
	}
}
