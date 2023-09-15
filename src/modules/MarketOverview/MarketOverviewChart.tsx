import { chartData } from '@/modules/MarketOverview/content';
import { extendPalette } from '@/theme/extendPalette';
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip, } from 'chart.js';
import { CSSProperties, memo } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	indexAxis: 'y' as const,
	elements: {
		bar: {
			borderWidth: 1,
		},
	},
	responsive: true,
	plugins: {
		legend: {
			position: 'top' as const,
			fontFamily: 'Peta',
			fontSize: 18.
		},
		title: {
			display: false,
		},
	},
};

const labels = chartData.map(({ label }) => label);

const dataSetColor = new Map<string, CSSProperties>([
	['share', {
		borderColor: extendPalette.green75,
		backgroundColor: extendPalette.green75,
		borderWidth: 1,
	}],
	['adj', {
		borderColor: extendPalette.aqua75,
		backgroundColor: extendPalette.aqua75,
	}],
]);

const dataSetName = new Map<string, string>([
	['share', 'Market Share %'],
	['adj', 'Adj. Vol (7D), $B'],
]);

const dataset = chartData.reduce((acc, value) => {
	Object
		.entries(value)
		.forEach(([k, v]) => {
			if (Number.isNaN(k)) return;
			acc[k] = [...(acc[k] || []), v];
		});
	return acc;
}, {});

export const data = {
	labels,
	datasets: [...dataSetName].map(([k, label]) => ({
		label,
		...dataSetColor.get(k) || {},
		data: dataset[k],
	})),
};

export const MarketOverviewChart = memo(() => {
	return (
		<Bar
			options={options}
			data={data}
		/>
	);
});
