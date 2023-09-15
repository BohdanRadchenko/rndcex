import { LayoutLogo } from '@/componnents/Layout';
import { Stack, Typography } from '@mui/material';
import { memo } from 'react';
import { MarketOverviewContent } from './MarketOverviewContent';

export const MarketOverview = memo(() => {
	return (
		<LayoutLogo>
			<Stack
				pt={9.5}
				pb={6.5}
				spacing={5}
				flex={1}
			>
				<Typography variant="title2">
					Centralized Crypto Exchange&nbsp;
					<Typography
						variant="title2"
						component="span"
						sx={({ palette: { typography } }) => ({ color: typography.orange })}
					>
						Market Overview
					</Typography>
				</Typography>
				<MarketOverviewContent/>
			</Stack>
		</LayoutLogo>
	);
});
