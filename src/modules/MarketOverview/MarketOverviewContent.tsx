import { ReactComponent as ArrowIcon } from '@/icons/Arrow.svg';
import { marketOverviewNumbers } from '@/modules/MarketOverview/content';
import { Card, Link, Stack, Typography } from '@mui/material';
import { memo } from 'react';
import { MarketOverviewChartContent } from './MarketOverviewChartContent';

export const MarketOverviewContent = memo(() => {
	return (
		<Stack
			flexGrow={1}
			spacing={3}
		>
			<MarketOverviewChartContent/>
			<Card>
				<Stack spacing={2}>
					<Typography
						variant="subtitle2"
						alignSelf="center"
					>
						Market in Numbers
					</Typography>
					<Stack
						direction="row"
						spacing={5}
					>
						{marketOverviewNumbers.map(({ name, description, link }) => (
							<Stack
								key={name}
								direction="row"
								spacing={1.6}
								flex={1}
							>
								<Typography
									variant="subtitle"
									fontFamily="Zetta"
								>
									{name}
								</Typography>
								<Stack
									spacing={.8}
									flexGrow={1}
									justifyContent="space-between"
								>
									<Typography
										variant="body2"
										sx={{ whiteSpace: 'pre-wrap' }}
									>
										{description}
									</Typography>
									<Link
										target="_blank"
										href={link}
										sx={({ palette: { typography } }) => ({
											display: 'flex',
											alignItems: 'center',
											color: typography.orange,
											textDecoration: 'none',
											['& svg']: {
												marginLeft: '6px',
												transform: 'rotate(45deg)',
											}
										})}
									>
										Source <ArrowIcon/>
									</Link>
								</Stack>
							</Stack>
						))}
					</Stack>
				</Stack>
			</Card>
		</Stack>
	);
});
