import { FC } from 'react'
import classes from './Reference.module.css'

interface ICReferenceData {
	id: string
	name: string
	price: string
	market_cap: string
	daily_change: number
	logo: string
	index: number
}

const Reference: FC<ICReferenceData> = props => {
	return (
		<tr className={classes['table-col']}>
			<td className={classes['table-first-row']}>{props.index}</td>
			<td className='border-b px-4 py-2'>
				<img
					className='ml-2'
					width={'32px'}
					src={props.logo}
					alt={props.name}
				/>
			</td>
			<td className={classes['table-row']}>{props.name}</td>
			<td className={`${classes['table-row']} text-center`}> {props.price}</td>
			<td className={`${classes['table-row']} text-center`}>
				{props.market_cap}
			</td>
		</tr>
	)
}

export default Reference
