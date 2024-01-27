import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CurrenciesCards from '../../components/currenciesCards/CurrenciesCards'
import Loading from '../../components/loading/Loading'
import { useAppDispatch, useAppSelector } from '../../redux/redux'
import { fetchCoins } from '../../redux/slices/coins/actions'

const CurrenciesPage: FC = () => {
	const { coins, error, loading } = useAppSelector(state => state.coinReducer)
	const dispatch = useAppDispatch()

	const navigate = useNavigate()

	const handlerToCoinCard = (id: string): void => {
		navigate(`/crypto/${id}`)
	}

	useEffect(() => {
		dispatch(fetchCoins())
	}, [dispatch])

	return (
		<div className='flex flex-wrap gap-6 '>
			{loading && <Loading />}
			{error && <p>{error}</p>}
			{coins?.map((coin, index: number) => {
				return (
					<CurrenciesCards
						key={coin.id}
						coin={coin}
						index={index + 1}
						handlerToCoinCard={handlerToCoinCard}
					/>
				)
			})}
		</div>
	)
}

export default CurrenciesPage
