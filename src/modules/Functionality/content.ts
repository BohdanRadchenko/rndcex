export interface IContent {
	title: string;
	list: string[];
}

export const contentTrading: IContent[] = [
	{ title: 'Trading', list: ['Spot', 'Margin', 'Derivatives', 'P2P'] },
	{ title: 'Order Book', list: ['Order Placement', 'Volumes Display', 'Grouping'] },
	{ title: 'TradingView Widget', list: ['Graph Display', 'Indicators', 'TimeFrame Configuration'] },
	{ title: 'Orders History', list: ['Open Orders', 'Closed Orders', 'Inactive Orders'] },
	{
		title: 'WorkSpace Settings',
		list: ['WorkSpaces Configuration', 'Interactive Tutorial', 'Widgets Addition/Removal', 'Market Depth Widget']
	},
	{ title: 'Order Placement Widget', list: ['Market Orders FOK & IOC', 'Limit Orders', 'Stop Orders'] },
];

export const contentUserPanel: IContent[] = [
	{ title: 'Digital Wallets', list: ['Spot', 'Margin', 'Funding', 'Futures', 'Investments'] },
	{ title: 'Investments', list: ['Staking', 'Auto Invest', 'Options Betting', 'Farming Pools', 'Liquidity Vaults'] },
	{
		title: 'Dashboard',
		list: ['Advanced Analytics', 'Portfolio RoI & PnL Tracking', 'Aggregated Balances', 'Asset Distribution']
	},
	{
		title: 'Payments & Transfers',
		list: ['Buy / Sell Crypto with Credit Card', 'Payments to Merchants', 'Transfer by Username']
	},
	{ title: 'Additional Functionality', list: ['Appearance Setting', 'Referral Program Dashboard', 'Market Feed'] },
	{ title: 'Customer Support', list: ['Live Chat', 'Helpdesk', 'FAQ'] },
];
