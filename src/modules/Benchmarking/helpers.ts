type TableValue = Record<[k: string], string>;

type TableHead = { key: string, label: string };

const headServicesNamedMap: Map<string, string> = new Map([
	['company', 'Company'],
	['support', '24/7 Support'],
	['transfer', 'Code Transfer'],
	['listings', 'Unlimited Listings'],
	['customization', 'Сustomization'],
	['launch', '7 days Launch'],
	['novolumefees', 'No Volume-based Fees'],
	['noturnoverfees', 'No Turnover Fees'],
	['transferfees', 'Code Transfer & Setup Fees'],
	['setupfess', 'Setup Fees'],
	['monthlyfees', 'Monthly Fees'],
	['supportfees', 'Support Fees'],
	['listingfees', 'Listing Fees'],
]);

const namedMap = new Map([...new Set([...headServicesNamedMap].concat([...headServicesNamedMap]))]);

export const createTableHead = (values: TableValue[]): TableHead[] => {
	const obj = values
		.reduce((acc, el) => {
			Object.keys(el).forEach((key) => {
				if (!namedMap.has(key.toString())) return;
				acc[key] = namedMap.get(key) || '';
			});
			return acc;
		}, {} as TableValue);
	return [...headServicesNamedMap]
		.reduce((acc, [key]) => {
			if (key in obj) {
				acc = [...acc, { key, label: obj[key] }];
			}
			return acc;
		}, [] as TableHead[]);
};

