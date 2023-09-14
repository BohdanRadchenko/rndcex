import { CardBackground } from '@/componnents/CardBackground';
import { CheckmarkItem } from '@/componnents/CheckmarkItem';
import img from '@/images/snap111.png';
import { securityData } from '@/modules/Security/content';
import { BackgroundImageStyled } from '@/modules/Works/styled';
import { Grid } from '@mui/material';
import { memo } from 'react';

export const SecurityContent = memo(() => {
	return (
		<Grid
			container
			columns={12}
			flex={1}
			justifyContent="flex-end"
		>
			<Grid
				item
				xs={12}
				xl={10}
				spacing={5}
			>
				<CardBackground sx={{ minHeight: '100%' }}>
					{/*TODO: move to background image */}
					<BackgroundImageStyled
						sx={{ display: { xs: 'none', xl: 'unset' } }}
						src={img}
						alt={''}
					/>

					<Grid
						item
						xs={12}
						xl={8}
						columns={12}
						container
						columnSpacing={5}
						rowSpacing={3}
					>
						{securityData.map((feature) => (
							<Grid
								item
								xs={6}
								key={feature}
							>
								<CheckmarkItem text={feature}/>
							</Grid>
						))}
					</Grid>
				</CardBackground>
			</Grid>
		</Grid>
	);
});
