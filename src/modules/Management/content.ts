interface IManagersData {
	title: string,
	subtitle: string,
}

export const managersData: IManagersData[] = [
	{
		title: 'Market Making',
		subtitle: 'Our exchange software utilize powerful REST and WebSocket APIs to attract reliable market makers and create a robust liquidity pool for exchange.',
	},
	{
		title: 'Internal Organic Liquidity',
		subtitle: 'Our matching engine consolidates user orders in the order books across all available assets on the platform, ensuring internal organic liquidity.',
	},
	{
		title: 'Bridge to Leading Exchanges',
		subtitle: 'We offer establishment of connections with the most liquid and reputable spot exchanges on the crypto market',
	},
	{
		title: 'External Liquidity Provider',
		subtitle: 'Our exchange software enables the use of FIX APIs to connect to aggregated liquidity pools or external sources.',
	},
];
