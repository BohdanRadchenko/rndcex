import { LayoutLogo } from '@/componnents/Layout';
import { contentTrading, contentUserPanel } from '@/modules/Functionality/content';
import { TradingBackground } from '@/modules/Functionality/TradingBackground';
import { UserBackground } from '@/modules/Functionality/UserBackground';
import { Stack, Typography } from '@mui/material';
import { memo } from 'react';
import { FunctionalityCard } from './FunctionalityCard';

export const Functionality = memo(() => {
	return (
		<LayoutLogo>
			<Stack
				spacing={5}
				sx={{ flexGrow: 1, pt: 8, pb: 5 }}
			>
				<Typography
					variant="title"
					fontSize={46}
				>
					R’N’D CEX Whitelabel&nbsp;
					<Typography
						variant="title"
						component="span"
						sx={({ palette: { typography } }) => ({ fontSize: 46, color: typography.orange })}
					>
						Functionality
					</Typography>
				</Typography>
				<Stack
					direction="row"
					sx={{ gap: 3, flexGrow: 1 }}
				>
					<FunctionalityCard
						title="Trading Platform"
						content={contentTrading}
					>
						<TradingBackground/>
					</FunctionalityCard>
					<FunctionalityCard
						title="User Panel"
						content={contentUserPanel}
					>
						<UserBackground/>
					</FunctionalityCard>
				</Stack>
			</Stack>
		</LayoutLogo>
	);
});
