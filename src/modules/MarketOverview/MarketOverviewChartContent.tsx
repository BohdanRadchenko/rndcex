import { Card, Stack, Typography } from '@mui/material';
import { memo } from 'react';
import { MarketOverviewChart } from './MarketOverviewChart';

export const MarketOverviewChartContent = memo(() => {
	return (
		<Card>
			<Stack spacing={2}>
				<Typography variant="subtitle2">
					TOP 10 CEX Market Share & Volumes Comparison, First Week of April 2023
				</Typography>
				<MarketOverviewChart/>
			</Stack>
		</Card>
	);
});
