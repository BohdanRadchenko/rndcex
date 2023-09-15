interface BaseRow {
	id: number;
	icon: string;
	current: boolean;
}

export interface IBenchmarkingData {
	title: string;
	values: Array<BaseRow & Record<[k: string], string | boolean>>;
}

const serviceRnd = {
	id: 3,
	company: 'R’N’D CEX',
	support: true,
	transfer: true,
	listings: true,
	customization: true,
	launch: true,
	current: true,
};

const serviceModulus = {
	id: 2,
	company: 'Modulus',
	support: true,
	transfer: true,
	listings: true,
	customization: true,
	launch: true,
	current: false,
};

const serviceSoft = {
	id: 1,
	company: 'Soft-FX',
	support: true,
	transfer: true,
	listings: true,
	customization: false,
	launch: false,
	current: false,
};

const serviceB2b = {
	id: 0,
	company: 'B2B Broker',
	support: true,
	transfer: false,
	listings: false,
	customization: true,
	launch: false,
	current: false,
};

const costsRnd = {
	id: 13,
	current: true,
	company: 'R’N’D CEX',
	novolumefees: true,
	noturnoverfees: true,
	transferfees: '$300K - $400K',
	setupfess: '0$',
	monthlyfees: '0$',
	supportfees: '$10K - $20K / Month',
	listingfees: '0$',
};

const costsModulus = {
	id: 12,
	current: false,
	company: 'Modulus',
	novolumefees: true,
	noturnoverfees: true,
	transferfees: '$475K - $700K',
	setupfess: '0$',
	monthlyfees: '0$',
	supportfees: '1 Year for Free; 100$ / Hour',
	listingfees: '0$',
};

const costsSoft = {
	id: 11,
	company: 'Soft-FX',
	current: false,
	novolumefees: true,
	noturnoverfees: false,
	transferfees: false,
	setupfess: '17K$',
	monthlyfees: '$3K - $4.5K',
	supportfees: '50$ / Hour',
	listingfees: '0$',
};

const costsB2b = {
	id: 10,
	company: 'B2B Broker',
	current: false,
	novolumefees: false,
	noturnoverfees: false,
	transferfees: false,
	setupfess: '$21K - $70.5K',
	monthlyfees: '$3K - $4.5K',
	supportfees: '$500 - $700 / Month',
	listingfees: '200$ / Month for Each Custom Token',
};

export const benchmarkingData: IBenchmarkingData[] = [
	{
		title: 'Benchmarking with Competitors by Services',
		values: [serviceRnd, serviceModulus, serviceSoft, serviceB2b],
	},
	{
		title: 'Benchmarking with Competitors by Costs & Fees',
		values: [costsRnd, costsModulus, costsSoft, costsB2b],
	},
];
