import { AiOutlineHome } from 'react-icons/ai'
import { GoCrossReference } from 'react-icons/go'
import { TbCurrencySolana } from 'react-icons/tb'

export const navPath = [
	{
		to: '/',
		label: 'Home',
		icon: AiOutlineHome,
	},
	{
		to: 'currencies',
		label: 'Currencies',
		icon: TbCurrencySolana,
	},
	{
		to: 'reference-currencies',
		label: 'Reference Currencies',
		icon: GoCrossReference,
	},
]
