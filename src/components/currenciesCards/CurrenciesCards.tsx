import { FC } from 'react'
import { ICryptocurrencies } from '../../models/models'
import classes from './CurrenciesCards.module.css'

interface ICurrenciesCardsData {
	coin: ICryptocurrencies
	index: number
	handlerToCoinCard: (id: string) => void
}

const CurrenciesCards: FC<ICurrenciesCardsData> = ({
	coin,
	index,
	handlerToCoinCard,
}) => {
	return (
		<div
			onClick={() => handlerToCoinCard(coin.id)}
			className={`${classes['card-box']} ${classes['currencies-cards']}`}
		>
			{/* Block 1 */}
			<div className={classes['card-block-1']}>
				<h2 className='font-bold text-sm'>
					{index} {coin.name}
				</h2>
				<img src={coin.logo} alt={coin.name} className='w-8 h-8' />
			</div>
			{/* Block 2 */}
			<div className={classes['card-block-2']}>
				<div className='flex justify-between p-2 '>
					<span className='font-bold text-sm'>Price: </span>
					<p className='text-[13px]'>{coin.price}</p>
				</div>
				<div className='flex justify-between p-2 '>
					<span className='font-bold text-sm'>Market cap: </span>
					<p className='text-[13px]'>{coin.market_cap}</p>
				</div>
				<div className='flex justify-between p-2 '>
					<span className='font-bold text-sm'>Daily Change: </span>
					<p className='text-[13px]'>{coin.daily_change}</p>
				</div>
			</div>

			{/* Button */}
			<div className='flex  items-center font-light '>
				<button className={classes['card-block-btn']}>View Markets</button>
				<button className={classes['card-block-btn']}>View Exchanges</button>
			</div>
		</div>
	)
}

export default CurrenciesCards
