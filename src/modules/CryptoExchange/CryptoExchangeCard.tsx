import { CheckmarkItem } from '@/componnents/CheckmarkItem';
import img from '@/images/snap51.png';
import { cryptoExchangeData } from '@/modules/CryptoExchange/content';
import { BackgroundImageStyled } from '@/modules/Works/styled';
import { Grid, Stack } from '@mui/material';
import { memo } from 'react';
import { Card, CardTitleStyled } from './styled';

export const CryptoExchangeCard = memo(() => {
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
				<Card>
					{/*TODO: move to background image */}
					<BackgroundImageStyled
						sx={{ display: { xs: 'none', xl: 'unset' } }}
						src={img}
						alt={''}
					/>
					<Stack spacing={3}>
						<CardTitleStyled>
							Whitelabel CEX Benefits
						</CardTitleStyled>

						<Grid
							item
							xs={12}
							xl={8}
						>
							<Grid
								container
								columns={12}
								columnSpacing={5}
								rowSpacing={3}
							>
								{cryptoExchangeData.map((feature) => (
									<Grid
										item
										xs={6}
										key={feature}
									>
										<CheckmarkItem text={feature}/>
									</Grid>
								))}
							</Grid>
						</Grid>
					</Stack>
				</Card>
			</Grid>
		</Grid>
	);
});
