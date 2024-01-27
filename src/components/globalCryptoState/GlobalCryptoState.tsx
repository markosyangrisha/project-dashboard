import { FC } from 'react'
import classes from './GlobalCryptoState.module.css'

const GlobalCryptoState: FC = () => {
	return (
		<div className='flex mb-5'>
			{/* Left div */}
			<div className='flex flex-col gap-1 w-2/4'>
				<p className={classes['global-coin-total']}>Total Crypto Currencies</p>
				<span className={classes['global-coin-price']}>12,221</span>
				<p className={classes['global-coin-total']}>Total Market Cap</p>
				<span className={classes['global-coin-price']}>2.1T</span>
				<p className={classes['global-coin-total']}>Total Markets</p>
				<span className={classes['global-coin-price']}>80.2K</span>
			</div>
			{/* Right div */}
			<div className='flex flex-col gap-1'>
				<p className={classes['global-coin-total']}>Total Exchange</p>
				<span className={classes['global-coin-price']}>373</span>
				<p className={classes['global-coin-total']}>Total 24h Volume</p>
				<span className={classes['global-coin-price']}>127.2B</span>
			</div>
		</div>
	)
}

export default GlobalCryptoState
