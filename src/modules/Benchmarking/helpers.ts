type TableValue = Record<[k: string], string>;

type TableHead = { key: string, label: string };

const headServicesNamedMap: Map<string, string> = new Map([
	['company', 'Company'],
	['support', '24/7 Support'],
	['transfer', 'Code Transfer'],
	['listings', 'Unlimited Listings'],
	['customization', 'Сustomization'],
	['launch', '7 days Launch'],
]);

const namedMap = new Map([...new Set([...headServicesNamedMap].concat([...headServicesNamedMap]))]);

const createTableHead = (values: TableValue[]): TableValue[] => {
	return values
		.reduce((acc, el) => {
			Object.keys(el).forEach((key) => {
				if (!namedMap.has(key.toString())) return;
				acc[key] = namedMap.get(key) || '';
			});
			return acc;
		}, {} as TableValue);
};

export const tableHead = (values: TableValue[]): TableHead[] => {
	const headTitles = createTableHead(values);
	return [...headServicesNamedMap].map(([key]) => {
		return { key, label: headTitles[key] };
	});
};

