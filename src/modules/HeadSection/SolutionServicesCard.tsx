import { CardBackground } from '@/componnents/CardBackground';
import { CheckmarkItem } from '@/componnents/CheckmarkItem';
import { BackgroundImageStyled } from '@/modules/Works/styled';
import { Stack } from '@mui/material';
import { FC, memo } from 'react';
import { ISolutionData } from './content';
import { CardTitleStyled } from './styled';

interface ISolutionServicesCardProps {
	card: ISolutionData;
}

export const SolutionServicesCard: FC<ISolutionServicesCardProps> = memo(({
																																						card: {
																																							title,
																																							features,
																																							img
																																						}
																																					}) => {
	return (
		<CardBackground flex={1}>
			{/*TODO: move to background image */}
			<BackgroundImageStyled
				sx={{ display: { xs: 'none', xl: 'unset' } }}
				src={img}
				alt={''}
			/>
			<Stack
				spacing={3}
				zIndex={1}
				maxWidth={510}
			>
				<CardTitleStyled>
					{title}
				</CardTitleStyled>
				<Stack spacing={3}>
					{features.map((feature) => (
						<CheckmarkItem
							text={feature}
							key={feature}
						/>
					))}
				</Stack>
			</Stack>

		</CardBackground>
	);
});
