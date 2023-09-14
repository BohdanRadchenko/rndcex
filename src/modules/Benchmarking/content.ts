const serviceRnd = {
	company: 'R’N’D CEX',
	support: true,
	transfer: true,
	listings: true,
	customization: true,
	launch: true,
	current: true,
};

const serviceModulus = {
	company: 'Modulus',
	support: true,
	transfer: true,
	listings: true,
	customization: true,
	launch: true,
	current: false,
};

const serviceSoft = {
	company: 'Soft-FX',
	support: true,
	transfer: true,
	listings: true,
	customization: false,
	launch: false,
	current: false,
};

const serviceB2b = {
	company: 'B2B Broker',
	support: true,
	transfer: false,
	listings: false,
	customization: false,
	launch: false,
	current: false,
};

export interface IBenchmarkingData {
	title: string;
	values: Record<[k: string], string | boolean>[];
}

export const benchmarkingData: IBenchmarkingData[] = [
	{
		title: 'Benchmarking with Competitors by Services',
		values: [serviceRnd, serviceModulus, serviceSoft, serviceB2b],
	},
	{
		title: 'Benchmarking with Competitors by Costs & Fees',
		values: [],
	},
];
