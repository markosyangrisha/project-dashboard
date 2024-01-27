export interface ICryptocurrencies {
	id: string
	name: string
	price: string
	market_cap: string
	daily_change: number
	logo: string
}

export interface ICoin {
	cryptocurrencies: ICryptocurrencies
}
