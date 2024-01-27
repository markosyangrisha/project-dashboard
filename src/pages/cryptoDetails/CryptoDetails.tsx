import { FC, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../../axios/axios'
import { ICryptocurrencies } from '../../models/models'
import classes from './CryptoDetails.module.css'

const CryptoDetails: FC = () => {
	const { id } = useParams<'id'>()
	const [coin, setCoin] = useState<ICryptocurrencies>()
	const navigate = useNavigate()

	useEffect(() => {
		try {
			(async () => {
				const response = await axiosInstance.get<ICryptocurrencies>(
					`cryptocurrencies/${id}`
				)
				setCoin(response.data)
			})()
		} catch (error) {
			console.error('Error fetching data:', error)
		}
	}, [id])

	return (
		<>
			<div className='w-28 h-52 rounded-sm'>
				<img src={coin?.logo} alt={coin?.name} />
			</div>

			<div className='flex flex-col border-b p-3.5 px-5'>
				<h3 className='font-bold text-sm p-2'>{coin?.name}</h3>
				<div className='flex justify-between p-2'>
					<span className='font-bold text-sm'>Price: </span>
					<p className='text-[13px]'>{coin?.price}K</p>
				</div>
				<div className='flex justify-between p-2 '>
					<span className='font-bold text-sm'>Market cap: </span>
					<p className='text-[13px]'>{coin?.market_cap}</p>
				</div>
				<div className='flex justify-between p-2 '>
					<span className='font-bold text-sm'>Daily Change: </span>
					<p className='text-[13px]'>{coin?.daily_change}</p>
				</div>
			</div>

			{/* Buttons */}
			<div className='flex  items-center font-light '>
				<button className={classes['card-btn']}>View Markets</button>
				<button className={classes['card-btn']}>View Exchanges</button>
			</div>
			<button onClick={() => navigate(-1)} className={classes['go-back-btn']}>
				Go Back
			</button>
		</>
	)
}

export default CryptoDetails
