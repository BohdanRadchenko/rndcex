interface IProductsData {
	title: string;
	subtitle: string;
	features: string[];
}

export const productContentData: IProductsData[] = [
	{
		title: 'IEO Launchpad',
		subtitle: 'Allow users to participate in token sales and crowdfunding campaigns for new crypto projects conduction Token Offering on the exchange',
		features: ['Token Sale Platform', 'Project Dashboard', 'Investments Management Module', 'Token Sale Calendar', 'Token Distribution Module'],
	},
	{
		title: 'OTC Platform',
		subtitle: 'Allow users to buy and sell cryptocurrency directly from other users or OTC desks, outside of the regular exchange order book',
		features: ['OTC Desk Admin Panel', 'Offers Marketplace', 'Trading Desk', 'Customizable Trades', 'Analytics Dashboard'],
	},
	{
		title: 'E-Commerce Marketplace',
		subtitle: 'Allow merchants to accept cryptocurrency payments for goods and services',
		features: ['Merchant Account', 'Integrated Payment Processing', 'Analytics Dashboard', 'Multi-currency Support', 'Fiat on/off Ramp'],
	},
	{
		title: 'NFT Marketplace',
		subtitle: 'Allow users to buy, sell, and trade NFTs on a dedicated platform',
		features: ['Browse NFTs', 'Buy / Sell NFTs', 'NFT Portfolio Management', 'NFT Creation Toolkit', 'Licensing and Royalties'],
	},
];
