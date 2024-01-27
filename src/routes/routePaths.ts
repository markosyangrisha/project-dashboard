import CryptoDetails from '../pages/cryptoDetails/CryptoDetails';
import CurrenciesPage from '../pages/currenciesPage/CurrenciesPage';
import PageNotFound from '../pages/notFoundPage/PageNotFound'
import ReferenceCurrencies from '../pages/referenceCurrencies/ReferenceCurrencies'

export const Paths = [
	{
		path: 'currencies',
		component: CurrenciesPage,
	},
	{
		path: 'reference-currencies',
		component: ReferenceCurrencies,
	},
	{
		path: '/crypto/:id',
		component: CryptoDetails,
	},
	{
		path: '*',
		component: PageNotFound,
	},
]
