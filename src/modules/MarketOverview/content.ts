interface IMarketOverviewNumber {
	name: string;
	description: string;
	link: string;
}

export const marketOverviewNumbers: IMarketOverviewNumber[] = [
	{
		name: '425M',
		description: 'Crypto\n Owners',
		link: 'https://content-hub-static.crypto.com/wp-content/uploads/2023/01/Cryptodotcom_Crypto_Market_Sizing_Jan2023-1.pdf'
	},
	{
		name: '350M+',
		description: 'Number of CEX\n users',
		link: 'https://content-hub-static.crypto.com/wp-content/uploads/2023/01/Cryptodotcom_Crypto_Market_Sizing_Jan2023-1.pdf'
	},
	{
		name: '569',
		description: 'CEX exists on, as of\n March 2023',
		link: 'https://explodingtopics.com/blog/number-of-cryptocurrencies'
	},
	{
		name: '$0.93T',
		description: 'Average monthly\n trading volume\n of TOP 10 CEX in 2022',
		link: 'https://www.coingecko.com/research/publications/2022-annual-crypto-report'
	},
	{
		name: '$11.2T',
		description: 'Total volume of\n TOP 10 CEX for 2022',
		link: 'https://www.coingecko.com/research/publications/2022-annual-crypto-report'
	},
];

interface IChartData {
	label: string,
	share: number,
	adj: number
}

export const chartData: IChartData[] = [
	{
		label: 'Binance',
		share: 47.2,
		adj: 75.95
	},
	{
		label: 'OKX',
		share: 6.71,
		adj: 11.59
	},
	{
		label: 'CoinBase Pro',
		share: 5.41,
		adj: 9.45
	},
	{
		label: 'Kraken',
		share: 3.58,
		adj: 4.8
	},
	{
		label: 'Kucoin',
		share: 3.58,
		adj: 4.8
	},
	{
		label: 'Bybit Spot',
		share: 3.45,
		adj: 5.11
	},
	{
		label: 'Binance US',
		share: 3.45,
		adj: 5.11
	},
	{
		label: 'Gate.io',
		share: 3.45,
		adj: 5.11
	},
	{
		label: 'Crypto.com',
		share: 3.45,
		adj: 5.11
	}
];
