interface IPricingData {
	features: string[],
	price: string,
}

interface ISupportData {
	title: string,
	subtitle: string,
	price: string,
}

export const pricing: IPricingData[] = [
		{
			price: '$300.000',
			features: ['Complete CEX', 'Functionality with Spot Trading'],
		},
		{
			price: '$400.000',
			features: ['Complete CEX', 'Functionality with Spot and Margin Trading'],
		},
	]
;

export const supportCosts: ISupportData[] = [
	{
		title: 'Basic Support',
		subtitle: 'Ensures the functioning of the spot trading and new listings support',
		price: '$10.000/month',
	},
	{
		title: 'Active Development and Support',
		subtitle: 'From',
		price: '$20.000/month',
	}
];
