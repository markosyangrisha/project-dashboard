import { FC } from 'react'
import NoFondantSvg from '../../assets/svg/NoFondantSvg'
import { ICryptocurrencies } from '../../models/models'
import classes from './DropDown.module.css'

interface IDropDownData {
	coins: ICryptocurrencies[]
	isOpen: boolean
	noResult: boolean
	handlerToCoinCard: (id: string) => void
}

const DropDown: FC<IDropDownData> = ({
	coins,
	isOpen,
	noResult,
	handlerToCoinCard,
}) => {
	return (
		<div
			className={`${classes['drop-down']} ${classes['change-scroll']} ${
				isOpen ? 'max-h-[270px]' : 'max-h-0 invisible'
			}`}
		>
			<ul className={classes.list}>
				{noResult && (
					<div className={classes['no-result']}>
						<NoFondantSvg />
						<p className={classes['no-result-text']}>No Data</p>
					</div>
				)}
				{coins?.map(coin => {
					return (
						<li
							onClick={() => handlerToCoinCard(coin.id)}
							key={coin.id}
							className={classes['list-item']}
						>
							{coin.name}
							<img
								src={coin.logo}
								alt={coin.name}
								width={'24px'}
								height={'24px'}
							/>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default DropDown

//  	className={`change-scroll rounded-md w-full transition-all duration-200 overflow-y-auto bg-white shadow-xl absolute top-9 border
//  ${isOpen ? 'max-h-[270px]' : 'max-h-0 invisible'} `}
